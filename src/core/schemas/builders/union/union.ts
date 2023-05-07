import { BaseSchema, MaybeValid, SchemaType } from "../../Schema";
import { isPlainObject, NOT_AN_OBJECT_ERROR_MESSAGE } from "../../utils/isPlainObject";
import { keys } from "../../utils/keys";
import { MaybePromise } from "../../utils/MaybePromise";
import { maybeSkipValidation } from "../../utils/maybeSkipValidation";
import { enum_ } from "../enum";
import { ObjectSchema } from "../object";
import { getObjectLikeUtils, ObjectLikeSchema } from "../object-like";
import { getSchemaUtils } from "../schema-utils";
import { Discriminant } from "./discriminant";
import { inferParsedDiscriminant, inferParsedUnion, inferRawDiscriminant, inferRawUnion, UnionSubtypes } from "./types";

export function union<D extends string | Discriminant<any, any>, U extends UnionSubtypes<any>>(
    discriminant: D,
    union: U
): ObjectLikeSchema<inferRawUnion<D, U>, inferParsedUnion<D, U>> {
    const rawDiscriminant =
        typeof discriminant === "string" ? discriminant : (discriminant.rawDiscriminant as inferRawDiscriminant<D>);
    const parsedDiscriminant =
        typeof discriminant === "string"
            ? discriminant
            : (discriminant.parsedDiscriminant as inferParsedDiscriminant<D>);

    const discriminantValueSchema = enum_(keys(union) as string[]);

    const baseSchema: BaseSchema<inferRawUnion<D, U>, inferParsedUnion<D, U>> = {
        parse: async (raw, opts) => {
            return transformAndValidateUnion({
                value: raw,
                discriminant: rawDiscriminant,
                transformedDiscriminant: parsedDiscriminant,
                transformDiscriminantValue: (discriminantValue) =>
                    discriminantValueSchema.parse(discriminantValue, {
                        allowUnrecognizedEnumValues: opts?.allowUnrecognizedUnionMembers,
                    }),
                getAdditionalPropertiesSchema: (discriminantValue) => union[discriminantValue],
                allowUnrecognizedUnionMembers: opts?.allowUnrecognizedUnionMembers,
                transformAdditionalProperties: (additionalProperties, additionalPropertiesSchema) =>
                    additionalPropertiesSchema.parse(additionalProperties, opts),
            });
        },
        json: async (parsed, opts) => {
            return transformAndValidateUnion({
                value: parsed,
                discriminant: parsedDiscriminant,
                transformedDiscriminant: rawDiscriminant,
                transformDiscriminantValue: (discriminantValue) =>
                    discriminantValueSchema.json(discriminantValue, {
                        allowUnrecognizedEnumValues: opts?.allowUnrecognizedUnionMembers,
                    }),
                getAdditionalPropertiesSchema: (discriminantValue) => union[discriminantValue],
                allowUnrecognizedUnionMembers: opts?.allowUnrecognizedUnionMembers,
                transformAdditionalProperties: (additionalProperties, additionalPropertiesSchema) =>
                    additionalPropertiesSchema.json(additionalProperties, opts),
            });
        },
        getType: () => SchemaType.UNION,
    };

    return {
        ...maybeSkipValidation(baseSchema),
        ...getSchemaUtils(baseSchema),
        ...getObjectLikeUtils(baseSchema),
    };
}

async function transformAndValidateUnion<
    TransformedDiscriminant extends string,
    TransformedDiscriminantValue extends string,
    TransformedAdditionalProperties
>({
    value,
    discriminant,
    transformedDiscriminant,
    transformDiscriminantValue,
    getAdditionalPropertiesSchema,
    allowUnrecognizedUnionMembers = false,
    transformAdditionalProperties,
}: {
    value: unknown;
    discriminant: string;
    transformedDiscriminant: TransformedDiscriminant;
    transformDiscriminantValue: (discriminantValue: unknown) => MaybePromise<MaybeValid<TransformedDiscriminantValue>>;
    getAdditionalPropertiesSchema: (discriminantValue: string) => ObjectSchema<any, any> | undefined;
    allowUnrecognizedUnionMembers: boolean | undefined;
    transformAdditionalProperties: (
        additionalProperties: unknown,
        additionalPropertiesSchema: ObjectSchema<any, any>
    ) => MaybePromise<MaybeValid<TransformedAdditionalProperties>>;
}): Promise<
    MaybeValid<Record<TransformedDiscriminant, TransformedDiscriminantValue> & TransformedAdditionalProperties>
> {
    if (!isPlainObject(value)) {
        return {
            ok: false,
            errors: [
                {
                    path: [],
                    message: NOT_AN_OBJECT_ERROR_MESSAGE,
                },
            ],
        };
    }

    const { [discriminant]: discriminantValue, ...additionalProperties } = value;

    if (discriminantValue == null) {
        return {
            ok: false,
            errors: [
                {
                    path: [],
                    message: `Missing discriminant ("${discriminant}")`,
                },
            ],
        };
    }

    const transformedDiscriminantValue = await transformDiscriminantValue(discriminantValue);
    if (!transformedDiscriminantValue.ok) {
        return {
            ok: false,
            errors: transformedDiscriminantValue.errors.map((error) => ({
                path: [discriminant, ...error.path],
                message: error.message,
            })),
        };
    }

    const additionalPropertiesSchema = getAdditionalPropertiesSchema(transformedDiscriminantValue.value);

    if (additionalPropertiesSchema == null) {
        if (allowUnrecognizedUnionMembers) {
            return {
                ok: true,
                value: {
                    [transformedDiscriminant]: transformedDiscriminantValue.value,
                    ...additionalProperties,
                } as Record<TransformedDiscriminant, TransformedDiscriminantValue> & TransformedAdditionalProperties,
            };
        } else {
            return {
                ok: false,
                errors: [
                    {
                        path: [discriminant],
                        message: "Unrecognized discriminant value",
                    },
                ],
            };
        }
    }

    const transformedAdditionalProperties = await transformAdditionalProperties(
        additionalProperties,
        additionalPropertiesSchema
    );
    if (!transformedAdditionalProperties.ok) {
        return transformedAdditionalProperties;
    }

    return {
        ok: true,
        value: {
            [transformedDiscriminant]: discriminantValue,
            ...transformedAdditionalProperties.value,
        } as Record<TransformedDiscriminant, TransformedDiscriminantValue> & TransformedAdditionalProperties,
    };
}
