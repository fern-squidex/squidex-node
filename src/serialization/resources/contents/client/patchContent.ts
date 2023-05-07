/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Squidex from "../../../../api";
import * as core from "../../../../core";

export const Request: core.serialization.Schema<
    serializers.contents.patchContent.Request.Raw,
    Record<string, Squidex.ContentFieldData>
> = core.serialization.record(
    core.serialization.string(),
    core.serialization.lazy(async () => (await import("../../..")).ContentFieldData)
);

export declare namespace Request {
    type Raw = Record<string, serializers.ContentFieldData.Raw>;
}
