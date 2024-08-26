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

import type { QueryJsonDto } from './QueryJsonDto';
import {
    QueryJsonDtoFromJSON,
    QueryJsonDtoToJSON,
} from './QueryJsonDto';
import type { BulkUpdateContentType } from './BulkUpdateContentType';
import {
    BulkUpdateContentTypeFromJSON,
    BulkUpdateContentTypeToJSON,
} from './BulkUpdateContentType';

/**
 * 
 * @export
 * @interface BulkUpdateContentsJobDto
 */
export interface BulkUpdateContentsJobDto {
    /**
     * 
     * @type {QueryJsonDto}
     * @memberof BulkUpdateContentsJobDto
     */
    query?: QueryJsonDto;
    /**
     * An optional ID of the content to update.
     * @type {string}
     * @memberof BulkUpdateContentsJobDto
     */
    id?: string | null;
    /**
     * 
     * @type {{ [key: string]: { [key: string]: any; }; }}
     * @memberof BulkUpdateContentsJobDto
     */
    data?: { [key: string]: { [key: string]: any; }; };
    /**
     * The new status when the type is set to 'ChangeStatus' or 'Upsert'.
     * @type {string}
     * @memberof BulkUpdateContentsJobDto
     */
    status?: string | null;
    /**
     * The due time.
     * @type {Date}
     * @memberof BulkUpdateContentsJobDto
     */
    dueTime?: Date | null;
    /**
     * 
     * @type {BulkUpdateContentType}
     * @memberof BulkUpdateContentsJobDto
     */
    type?: BulkUpdateContentType;
    /**
     * The optional schema id or name.
     * @type {string}
     * @memberof BulkUpdateContentsJobDto
     */
    schema?: string | null;
    /**
     * Makes the update as patch.
     * @type {boolean}
     * @memberof BulkUpdateContentsJobDto
     */
    patch?: boolean;
    /**
     * True to delete the content permanently.
     * @type {boolean}
     * @memberof BulkUpdateContentsJobDto
     */
    permanent?: boolean;
    /**
     * Enrich the data with the default values when updating a content item.
     * @type {boolean}
     * @memberof BulkUpdateContentsJobDto
     */
    enrichDefaults?: boolean;
    /**
     * The number of expected items. Set it to a higher number to update multiple items when a query is defined.
     * @type {number}
     * @memberof BulkUpdateContentsJobDto
     */
    expectedCount?: number;
    /**
     * The expected version.
     * @type {number}
     * @memberof BulkUpdateContentsJobDto
     */
    expectedVersion?: number;
}




/**
 * Check if a given object implements the BulkUpdateContentsJobDto interface.
 */
export function instanceOfBulkUpdateContentsJobDto(value: any): value is BulkUpdateContentsJobDto {
    if (!value) {
        return false;
    }
    return true;
}

export function BulkUpdateContentsJobDtoFromJSON(json: any): BulkUpdateContentsJobDto {
    return BulkUpdateContentsJobDtoFromJSONTyped(json, false);
}

export function BulkUpdateContentsJobDtoFromJSONTyped(json: any, _ignoreDiscriminator: boolean): BulkUpdateContentsJobDto {
    if (json == null) {
        return json;
    }
    return {
        
        'query': json['query'] == null ? undefined : QueryJsonDtoFromJSON(json['query']),
        'id': json['id'] == null ? undefined : json['id'],
        'data': json['data'] == null ? undefined : json['data'],
        'status': json['status'] == null ? undefined : json['status'],
        'dueTime': json['dueTime'] == null ? undefined : (new Date(json['dueTime'])),
        'type': json['type'] == null ? undefined : BulkUpdateContentTypeFromJSON(json['type']),
        'schema': json['schema'] == null ? undefined : json['schema'],
        'patch': json['patch'] == null ? undefined : json['patch'],
        'permanent': json['permanent'] == null ? undefined : json['permanent'],
        'enrichDefaults': json['enrichDefaults'] == null ? undefined : json['enrichDefaults'],
        'expectedCount': json['expectedCount'] == null ? undefined : json['expectedCount'],
        'expectedVersion': json['expectedVersion'] == null ? undefined : json['expectedVersion'],
    };
}

export function BulkUpdateContentsJobDtoToJSON(value?: BulkUpdateContentsJobDto | null, _ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'query': QueryJsonDtoToJSON(value['query']),
        'id': value['id'],
        'data': value['data'],
        'status': value['status'],
        'dueTime': value['dueTime'] == null ? undefined : ((value['dueTime'] as any).toISOString()),
        'type': BulkUpdateContentTypeToJSON(value['type']),
        'schema': value['schema'],
        'patch': value['patch'],
        'permanent': value['permanent'],
        'enrichDefaults': value['enrichDefaults'],
        'expectedCount': value['expectedCount'],
        'expectedVersion': value['expectedVersion'],
    };
}
