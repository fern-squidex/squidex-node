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
 * @interface CommentRuleActionDto
 */
export interface CommentRuleActionDto extends RuleActionDto {
    /**
     * The comment text.
     * @type {string}
     * @memberof CommentRuleActionDto
     */
    text: string;
    /**
     * An optional client name.
     * @type {string}
     * @memberof CommentRuleActionDto
     */
    client?: string | null;
}


/**
 * Check if a given object implements the CommentRuleActionDto interface.
 */
export function instanceOfCommentRuleActionDto(value: object): value is CommentRuleActionDto {
    if (!('text' in value) || value['text'] === undefined) return false;
    return true;
}

export function CommentRuleActionDtoFromJSON(json: any): CommentRuleActionDto {
    return CommentRuleActionDtoFromJSONTyped(json, false);
}

export function CommentRuleActionDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommentRuleActionDto {
    if (json == null) {
        return json;
    }
    return {
        ...RuleActionDtoFromJSONTyped(json, ignoreDiscriminator),
        'text': json['text'],
        'client': json['client'] == null ? undefined : json['client'],
    };
}

export function CommentRuleActionDtoToJSON(value?: CommentRuleActionDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        ...RuleActionDtoToJSON(value, true),
        'text': value['text'],
        'client': value['client'],
    };
}
