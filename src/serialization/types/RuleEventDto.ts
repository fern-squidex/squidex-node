/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const RuleEventDto: core.serialization.ObjectSchema<serializers.RuleEventDto.Raw, Squidex.RuleEventDto> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        created: core.serialization.string().optional(),
        description: core.serialization.string().optional(),
        eventName: core.serialization.string().optional(),
        lastDump: core.serialization.string().optional(),
        numCalls: core.serialization.number().optional(),
        nextAttempt: core.serialization.string().optional(),
        result: core.serialization.lazy(async () => (await import("..")).RuleResult).optional(),
        jobResult: core.serialization.lazy(async () => (await import("..")).RuleJobResult).optional(),
    });

export declare namespace RuleEventDto {
    interface Raw {
        id?: string | null;
        created?: string | null;
        description?: string | null;
        eventName?: string | null;
        lastDump?: string | null;
        numCalls?: number | null;
        nextAttempt?: string | null;
        result?: serializers.RuleResult.Raw | null;
        jobResult?: serializers.RuleJobResult.Raw | null;
    }
}
