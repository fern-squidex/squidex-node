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
import type { FieldPropertiesDto } from './FieldPropertiesDto';
import {
    FieldPropertiesDtoFromJSON,
    FieldPropertiesDtoToJSON,
} from './FieldPropertiesDto';
import type { ResourceLink } from './ResourceLink';
import {
    ResourceLinkFromJSON,
    ResourceLinkToJSON,
} from './ResourceLink';
import type { NestedFieldDto } from './NestedFieldDto';
import {
    NestedFieldDtoFromJSON,
    NestedFieldDtoToJSON,
} from './NestedFieldDto';

/**
 * 
 * @export
 * @interface FieldDto
 */
export interface FieldDto {
    /**
     * The links.
     * @type {{ [key: string]: ResourceLink; }}
     * @memberof FieldDto
     */
    links: { [key: string]: ResourceLink; };
    /**
     * The ID of the field.
     * @type {number}
     * @memberof FieldDto
     */
    fieldId: number;
    /**
     * The name of the field. Must be unique within the schema.
     * @type {string}
     * @memberof FieldDto
     */
    name: string;
    /**
     * Defines if the field is hidden.
     * @type {boolean}
     * @memberof FieldDto
     */
    isHidden: boolean;
    /**
     * Defines if the field is locked.
     * @type {boolean}
     * @memberof FieldDto
     */
    isLocked: boolean;
    /**
     * Defines if the field is disabled.
     * @type {boolean}
     * @memberof FieldDto
     */
    isDisabled: boolean;
    /**
     * Defines the partitioning of the field.
     * @type {string}
     * @memberof FieldDto
     */
    partitioning: string;
    /**
     * 
     * @type {FieldPropertiesDto}
     * @memberof FieldDto
     */
    properties: FieldPropertiesDto;
    /**
     * The nested fields.
     * @type {Array<NestedFieldDto>}
     * @memberof FieldDto
     */
    nested?: Array<NestedFieldDto> | null;
}


/**
 * Check if a given object implements the FieldDto interface.
 */
export function instanceOfFieldDto(value: any): value is FieldDto {
    if (!value) {
        return false;
    }
    if (!('links' in value) || value['links'] === undefined) return false;
    if (!('fieldId' in value) || value['fieldId'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('isHidden' in value) || value['isHidden'] === undefined) return false;
    if (!('isLocked' in value) || value['isLocked'] === undefined) return false;
    if (!('isDisabled' in value) || value['isDisabled'] === undefined) return false;
    if (!('partitioning' in value) || value['partitioning'] === undefined) return false;
    if (!('properties' in value) || value['properties'] === undefined) return false;
    return true;
}

export function FieldDtoFromJSON(json: any): FieldDto {
    return FieldDtoFromJSONTyped(json, false);
}

export function FieldDtoFromJSONTyped(json: any, _ignoreDiscriminator: boolean): FieldDto {
    if (json == null) {
        return json;
    }
    return {
        
        'links': (mapValues(json['_links'], ResourceLinkFromJSON)),
        'fieldId': json['fieldId'],
        'name': json['name'],
        'isHidden': json['isHidden'],
        'isLocked': json['isLocked'],
        'isDisabled': json['isDisabled'],
        'partitioning': json['partitioning'],
        'properties': FieldPropertiesDtoFromJSON(json['properties']),
        'nested': json['nested'] == null ? undefined : ((json['nested'] as Array<any>).map(NestedFieldDtoFromJSON)),
    };
}

export function FieldDtoToJSON(value?: FieldDto | null, _ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        '_links': (mapValues(value['links'], x => ResourceLinkToJSON(x))),
        'fieldId': value['fieldId'],
        'name': value['name'],
        'isHidden': value['isHidden'],
        'isLocked': value['isLocked'],
        'isDisabled': value['isDisabled'],
        'partitioning': value['partitioning'],
        'properties': FieldPropertiesDtoToJSON(value['properties']),
        'nested': value['nested'] == null ? undefined : ((value['nested'] as Array<any>).map(x => NestedFieldDtoToJSON(x))),
    };
}
