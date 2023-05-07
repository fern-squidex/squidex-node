/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Squidex from "../../../../../api";
import * as core from "../../../../../core";

export const UpdateRoleDto: core.serialization.Schema<serializers.UpdateRoleDto.Raw, Squidex.UpdateRoleDto> =
    core.serialization.object({
        permissions: core.serialization.list(core.serialization.string()),
        properties: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    });

export declare namespace UpdateRoleDto {
    interface Raw {
        permissions: string[];
        properties?: Record<string, unknown> | null;
    }
}