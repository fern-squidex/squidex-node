/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const ArrayCalculatedDefaultValue: core.serialization.Schema<
    serializers.ArrayCalculatedDefaultValue.Raw,
    Squidex.ArrayCalculatedDefaultValue
> = core.serialization.enum_(["EmptyArray", "Null"]);

export declare namespace ArrayCalculatedDefaultValue {
    type Raw = "EmptyArray" | "Null";
}