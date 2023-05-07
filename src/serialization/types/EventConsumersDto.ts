/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const EventConsumersDto: core.serialization.ObjectSchema<
    serializers.EventConsumersDto.Raw,
    Squidex.EventConsumersDto
> = core.serialization.object({
    items: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).EventConsumerDto))
        .optional(),
});

export declare namespace EventConsumersDto {
    interface Raw {
        items?: serializers.EventConsumerDto.Raw[] | null;
    }
}