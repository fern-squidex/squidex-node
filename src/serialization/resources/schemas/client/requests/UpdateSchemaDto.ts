/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Squidex from "../../../../../api";
import * as core from "../../../../../core";

export const UpdateSchemaDto: core.serialization.Schema<serializers.UpdateSchemaDto.Raw, Squidex.UpdateSchemaDto> =
    core.serialization.object({
        label: core.serialization.string().optional(),
        hints: core.serialization.string().optional(),
        contentsSidebarUrl: core.serialization.string().optional(),
        contentSidebarUrl: core.serialization.string().optional(),
        contentEditorUrl: core.serialization.string().optional(),
        validateOnPublish: core.serialization.boolean(),
        tags: core.serialization.list(core.serialization.string()).optional(),
    });

export declare namespace UpdateSchemaDto {
    interface Raw {
        label?: string | null;
        hints?: string | null;
        contentsSidebarUrl?: string | null;
        contentSidebarUrl?: string | null;
        contentEditorUrl?: string | null;
        validateOnPublish: boolean;
        tags?: string[] | null;
    }
}
