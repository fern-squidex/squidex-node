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
import type { RuleActionDto } from './RuleActionDto';
import {
    RuleActionDtoFromJSON,
    RuleActionDtoFromJSONTyped,
    RuleActionDtoToJSON,
} from './RuleActionDto';

/**
 * 
 * @export
 * @interface AlgoliaRuleActionDto
 */
export interface AlgoliaRuleActionDto extends RuleActionDto {
    /**
     * The application ID.
     * @type {string}
     * @memberof AlgoliaRuleActionDto
     */
    appId: string;
    /**
     * The API key to grant access to Squidex.
     * @type {string}
     * @memberof AlgoliaRuleActionDto
     */
    apiKey: string;
    /**
     * The name of the index.
     * @type {string}
     * @memberof AlgoliaRuleActionDto
     */
    indexName: string;
    /**
     * The optional custom document.
     * @type {string}
     * @memberof AlgoliaRuleActionDto
     */
    document?: string | null;
    /**
     * The condition when to delete the entry.
     * @type {string}
     * @memberof AlgoliaRuleActionDto
     */
    _delete?: string | null;
}

/**
 * Check if a given object implements the AlgoliaRuleActionDto interface.
 */
export function instanceOfAlgoliaRuleActionDto(value: object): value is AlgoliaRuleActionDto {
    if (!('appId' in value) || value['appId'] === undefined) return false;
    if (!('apiKey' in value) || value['apiKey'] === undefined) return false;
    if (!('indexName' in value) || value['indexName'] === undefined) return false;
    return true;
}

export function AlgoliaRuleActionDtoFromJSON(json: any): AlgoliaRuleActionDto {
    return AlgoliaRuleActionDtoFromJSONTyped(json, false);
}

export function AlgoliaRuleActionDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlgoliaRuleActionDto {
    if (json == null) {
        return json;
    }
    return {
        ...RuleActionDtoFromJSONTyped(json, ignoreDiscriminator),
        'appId': json['appId'],
        'apiKey': json['apiKey'],
        'indexName': json['indexName'],
        'document': json['document'] == null ? undefined : json['document'],
        '_delete': json['delete'] == null ? undefined : json['delete'],
    };
}

export function AlgoliaRuleActionDtoToJSON(value?: AlgoliaRuleActionDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        ...RuleActionDtoToJSON(value, true),
        'appId': value['appId'],
        'apiKey': value['apiKey'],
        'indexName': value['indexName'],
        'document': value['document'],
        'delete': value['_delete'],
    };
}