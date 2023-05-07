/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const StatusInfoDto: core.serialization.ObjectSchema<serializers.StatusInfoDto.Raw, Squidex.StatusInfoDto> =
    core.serialization.object({
        status: core.serialization.string(),
        color: core.serialization.string(),
    });

export declare namespace StatusInfoDto {
    interface Raw {
        status: string;
        color: string;
    }
}