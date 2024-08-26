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

import type { RuleTriggerDto } from './RuleTriggerDto';
import {
    RuleTriggerDtoFromJSONTyped,
    RuleTriggerDtoToJSON,
} from './RuleTriggerDto';

/**
 * 
 * @export
 * @interface AssetChangedRuleTriggerDto
 */
export interface AssetChangedRuleTriggerDto extends RuleTriggerDto {
    /**
     * Javascript condition when to trigger.
     * @type {string}
     * @memberof AssetChangedRuleTriggerDto
     */
    condition?: string | null;
}


/**
 * Check if a given object implements the AssetChangedRuleTriggerDto interface.
 */
export function instanceOfAssetChangedRuleTriggerDto(value: any): value is AssetChangedRuleTriggerDto {
    if (!value) {
        return false;
    }
    return true;
}

export function AssetChangedRuleTriggerDtoFromJSON(json: any): AssetChangedRuleTriggerDto {
    return AssetChangedRuleTriggerDtoFromJSONTyped(json, false);
}

export function AssetChangedRuleTriggerDtoFromJSONTyped(json: any, _ignoreDiscriminator: boolean): AssetChangedRuleTriggerDto {
    if (json == null) {
        return json;
    }
    return {
        ...RuleTriggerDtoFromJSONTyped(json, _ignoreDiscriminator),
        'condition': json['condition'] == null ? undefined : json['condition'],
    };
}

export function AssetChangedRuleTriggerDtoToJSON(value?: AssetChangedRuleTriggerDto | null, _ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        ...RuleTriggerDtoToJSON(value, true),
        'condition': value['condition'],
    };
}
