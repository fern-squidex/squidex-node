/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const AddFieldDto: core.serialization.ObjectSchema<serializers.AddFieldDto.Raw, Squidex.AddFieldDto> =
    core.serialization.object({
        name: core.serialization.string(),
        partitioning: core.serialization.string().optional(),
        properties: core.serialization.lazy(async () => (await import("..")).FieldPropertiesDto),
    });

export declare namespace AddFieldDto {
    interface Raw {
        name: string;
        partitioning?: string | null;
        properties: serializers.FieldPropertiesDto.Raw;
    }
}