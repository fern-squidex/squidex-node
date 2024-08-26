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

import type { WebhookMethod } from './WebhookMethod';
import {
    WebhookMethodFromJSON,
    WebhookMethodToJSON,
} from './WebhookMethod';
import type { RuleActionDto } from './RuleActionDto';
import {
    RuleActionDtoFromJSONTyped,
    RuleActionDtoToJSON,
} from './RuleActionDto';

/**
 * 
 * @export
 * @interface WebhookRuleActionDto
 */
export interface WebhookRuleActionDto extends RuleActionDto {
    /**
     * The url to the webhook.
     * @type {string}
     * @memberof WebhookRuleActionDto
     */
    url: string;
    /**
     * 
     * @type {WebhookMethod}
     * @memberof WebhookRuleActionDto
     */
    method: WebhookMethod;
    /**
     * Leave it empty to use the full event as body.
     * @type {string}
     * @memberof WebhookRuleActionDto
     */
    payload?: string | null;
    /**
     * The mime type of the payload.
     * @type {string}
     * @memberof WebhookRuleActionDto
     */
    payloadType?: string | null;
    /**
     * The message headers in the format '[Key]=[Value]', one entry per line.
     * @type {string}
     * @memberof WebhookRuleActionDto
     */
    headers?: string | null;
    /**
     * The shared secret that is used to calculate the payload signature.
     * @type {string}
     * @memberof WebhookRuleActionDto
     */
    sharedSecret?: string | null;
}




/**
 * Check if a given object implements the WebhookRuleActionDto interface.
 */
export function instanceOfWebhookRuleActionDto(value: any): value is WebhookRuleActionDto {
    if (!value) {
        return false;
    }
    if (!('url' in value) || value['url'] === undefined) return false;
    if (!('method' in value) || value['method'] === undefined) return false;
    return true;
}

export function WebhookRuleActionDtoFromJSON(json: any): WebhookRuleActionDto {
    return WebhookRuleActionDtoFromJSONTyped(json, false);
}

export function WebhookRuleActionDtoFromJSONTyped(json: any, _ignoreDiscriminator: boolean): WebhookRuleActionDto {
    if (json == null) {
        return json;
    }
    return {
        ...RuleActionDtoFromJSONTyped(json, _ignoreDiscriminator),
        'url': json['url'],
        'method': WebhookMethodFromJSON(json['method']),
        'payload': json['payload'] == null ? undefined : json['payload'],
        'payloadType': json['payloadType'] == null ? undefined : json['payloadType'],
        'headers': json['headers'] == null ? undefined : json['headers'],
        'sharedSecret': json['sharedSecret'] == null ? undefined : json['sharedSecret'],
    };
}

export function WebhookRuleActionDtoToJSON(value?: WebhookRuleActionDto | null, _ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        ...RuleActionDtoToJSON(value, true),
        'url': value['url'],
        'method': WebhookMethodToJSON(value['method']),
        'payload': value['payload'],
        'payloadType': value['payloadType'],
        'headers': value['headers'],
        'sharedSecret': value['sharedSecret'],
    };
}
