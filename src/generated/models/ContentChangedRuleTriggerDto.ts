/* tslint:disable */
/* eslint-disable */
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

import { mapValues } from '../runtime';
import type { SchemaCondition } from './SchemaCondition';
import {
    SchemaConditionFromJSON,
    SchemaConditionFromJSONTyped,
    SchemaConditionToJSON,
} from './SchemaCondition';
import type { RuleTriggerDto } from './RuleTriggerDto';
import {
    RuleTriggerDtoFromJSON,
    RuleTriggerDtoFromJSONTyped,
    RuleTriggerDtoToJSON,
} from './RuleTriggerDto';

/**
 * 
 * @export
 * @interface ContentChangedRuleTriggerDto
 */
export interface ContentChangedRuleTriggerDto extends RuleTriggerDto {
    /**
     * The schema settings.
     * @type {Array<SchemaCondition>}
     * @memberof ContentChangedRuleTriggerDto
     */
    schemas?: Array<SchemaCondition> | null;
    /**
     * The schema references.
     * @type {Array<SchemaCondition>}
     * @memberof ContentChangedRuleTriggerDto
     */
    referencedSchemas?: Array<SchemaCondition> | null;
    /**
     * Determines whether the trigger should handle all content changes events.
     * @type {boolean}
     * @memberof ContentChangedRuleTriggerDto
     */
    handleAll: boolean;
}


/**
 * Check if a given object implements the ContentChangedRuleTriggerDto interface.
 */
export function instanceOfContentChangedRuleTriggerDto(value: object): value is ContentChangedRuleTriggerDto {
    if (!('handleAll' in value) || value['handleAll'] === undefined) return false;
    return true;
}

export function ContentChangedRuleTriggerDtoFromJSON(json: any): ContentChangedRuleTriggerDto {
    return ContentChangedRuleTriggerDtoFromJSONTyped(json, false);
}

export function ContentChangedRuleTriggerDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContentChangedRuleTriggerDto {
    if (json == null) {
        return json;
    }
    return {
        ...RuleTriggerDtoFromJSONTyped(json, ignoreDiscriminator),
        'schemas': json['schemas'] == null ? undefined : ((json['schemas'] as Array<any>).map(SchemaConditionFromJSON)),
        'referencedSchemas': json['referencedSchemas'] == null ? undefined : ((json['referencedSchemas'] as Array<any>).map(SchemaConditionFromJSON)),
        'handleAll': json['handleAll'],
    };
}

export function ContentChangedRuleTriggerDtoToJSON(value?: ContentChangedRuleTriggerDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        ...RuleTriggerDtoToJSON(value, true),
        'schemas': value['schemas'] == null ? undefined : ((value['schemas'] as Array<any>).map(SchemaConditionToJSON)),
        'referencedSchemas': value['referencedSchemas'] == null ? undefined : ((value['referencedSchemas'] as Array<any>).map(SchemaConditionToJSON)),
        'handleAll': value['handleAll'],
    };
}
