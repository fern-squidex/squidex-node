/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const BulkUpdateContentsJobDto: core.serialization.ObjectSchema<
    serializers.BulkUpdateContentsJobDto.Raw,
    Squidex.BulkUpdateContentsJobDto
> = core.serialization.object({
    query: core.serialization.lazyObject(async () => (await import("..")).QueryJsonDto).optional(),
    id: core.serialization.string().optional(),
    data: core.serialization.lazy(async () => (await import("..")).ContentData).optional(),
    status: core.serialization.string().optional(),
    dueTime: core.serialization.string().optional(),
    type: core.serialization.lazy(async () => (await import("..")).BulkUpdateContentType).optional(),
    schema: core.serialization.string().optional(),
    patch: core.serialization.boolean().optional(),
    permanent: core.serialization.boolean().optional(),
    expectedCount: core.serialization.number().optional(),
    expectedVersion: core.serialization.number().optional(),
});

export declare namespace BulkUpdateContentsJobDto {
    interface Raw {
        query?: serializers.QueryJsonDto.Raw | null;
        id?: string | null;
        data?: serializers.ContentData.Raw | null;
        status?: string | null;
        dueTime?: string | null;
        type?: serializers.BulkUpdateContentType.Raw | null;
        schema?: string | null;
        patch?: boolean | null;
        permanent?: boolean | null;
        expectedCount?: number | null;
        expectedVersion?: number | null;
    }
}