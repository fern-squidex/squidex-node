/**
 * Squidex API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { SkipReason } from './SkipReason';
import {
    SkipReasonFromJSON,
    SkipReasonToJSON,
} from './SkipReason';

/**
 * 
 * @export
 * @interface SimulatedRuleEventDto
 */
export interface SimulatedRuleEventDto {
    /**
     * The unique event id.
     * @type {string}
     * @memberof SimulatedRuleEventDto
     */
    eventId: string;
    /**
     * The the unique id of the simulated event.
     * @type {string}
     * @memberof SimulatedRuleEventDto
     */
    uniqueId: string;
    /**
     * The name of the event.
     * @type {string}
     * @memberof SimulatedRuleEventDto
     */
    eventName: string;
    /**
     * The source event.
     * @type {any}
     * @memberof SimulatedRuleEventDto
     */
    event: any | null;
    /**
     * The enriched event.
     * @type {any}
     * @memberof SimulatedRuleEventDto
     */
    enrichedEvent?: any | null;
    /**
     * The data for the action.
     * @type {string}
     * @memberof SimulatedRuleEventDto
     */
    actionName?: string | null;
    /**
     * The name of the action.
     * @type {string}
     * @memberof SimulatedRuleEventDto
     */
    actionData?: string | null;
    /**
     * The name of the event.
     * @type {string}
     * @memberof SimulatedRuleEventDto
     */
    error?: string | null;
    /**
     * The reason why the event has been skipped.
     * @type {Array<SkipReason>}
     * @memberof SimulatedRuleEventDto
     */
    skipReasons: Array<SkipReason>;
}


/**
 * Check if a given object implements the SimulatedRuleEventDto interface.
 */
export function instanceOfSimulatedRuleEventDto(value: any): value is SimulatedRuleEventDto {
    if (!value) {
        return false;
    }
    if (!('eventId' in value) || value['eventId'] === undefined) return false;
    if (!('uniqueId' in value) || value['uniqueId'] === undefined) return false;
    if (!('eventName' in value) || value['eventName'] === undefined) return false;
    if (!('event' in value) || value['event'] === undefined) return false;
    if (!('skipReasons' in value) || value['skipReasons'] === undefined) return false;
    return true;
}

export function SimulatedRuleEventDtoFromJSON(json: any): SimulatedRuleEventDto {
    return SimulatedRuleEventDtoFromJSONTyped(json, false);
}

export function SimulatedRuleEventDtoFromJSONTyped(json: any, _ignoreDiscriminator: boolean): SimulatedRuleEventDto {
    if (json == null) {
        return json;
    }
    return {
        
        'eventId': json['eventId'],
        'uniqueId': json['uniqueId'],
        'eventName': json['eventName'],
        'event': json['event'],
        'enrichedEvent': json['enrichedEvent'] == null ? undefined : json['enrichedEvent'],
        'actionName': json['actionName'] == null ? undefined : json['actionName'],
        'actionData': json['actionData'] == null ? undefined : json['actionData'],
        'error': json['error'] == null ? undefined : json['error'],
        'skipReasons': ((json['skipReasons'] as Array<any>).map(SkipReasonFromJSON)),
    };
}

export function SimulatedRuleEventDtoToJSON(value?: SimulatedRuleEventDto | null, _ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'eventId': value['eventId'],
        'uniqueId': value['uniqueId'],
        'eventName': value['eventName'],
        'event': value['event'],
        'enrichedEvent': value['enrichedEvent'],
        'actionName': value['actionName'],
        'actionData': value['actionData'],
        'error': value['error'],
        'skipReasons': ((value['skipReasons'] as Array<any>).map(x => SkipReasonToJSON(x))),
    };
}
