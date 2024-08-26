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

import type { FieldPropertiesDto } from './FieldPropertiesDto';
import {
    FieldPropertiesDtoFromJSON,
    FieldPropertiesDtoToJSON,
} from './FieldPropertiesDto';
import type { UpsertSchemaNestedFieldDto } from './UpsertSchemaNestedFieldDto';
import {
    UpsertSchemaNestedFieldDtoFromJSON,
    UpsertSchemaNestedFieldDtoToJSON,
} from './UpsertSchemaNestedFieldDto';

/**
 * 
 * @export
 * @interface UpsertSchemaFieldDto
 */
export interface UpsertSchemaFieldDto {
    /**
     * The name of the field. Must be unique within the schema.
     * @type {string}
     * @memberof UpsertSchemaFieldDto
     */
    name: string;
    /**
     * Defines if the field is hidden.
     * @type {boolean}
     * @memberof UpsertSchemaFieldDto
     */
    isHidden?: boolean;
    /**
     * Defines if the field is locked.
     * @type {boolean}
     * @memberof UpsertSchemaFieldDto
     */
    isLocked?: boolean;
    /**
     * Defines if the field is disabled.
     * @type {boolean}
     * @memberof UpsertSchemaFieldDto
     */
    isDisabled?: boolean;
    /**
     * Determines the optional partitioning of the field.
     * @type {string}
     * @memberof UpsertSchemaFieldDto
     */
    partitioning?: string | null;
    /**
     * 
     * @type {FieldPropertiesDto}
     * @memberof UpsertSchemaFieldDto
     */
    properties: FieldPropertiesDto;
    /**
     * The nested fields.
     * @type {Array<UpsertSchemaNestedFieldDto>}
     * @memberof UpsertSchemaFieldDto
     */
    nested?: Array<UpsertSchemaNestedFieldDto> | null;
}


/**
 * Check if a given object implements the UpsertSchemaFieldDto interface.
 */
export function instanceOfUpsertSchemaFieldDto(value: any): value is UpsertSchemaFieldDto {
    if (!value) {
        return false;
    }
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('properties' in value) || value['properties'] === undefined) return false;
    return true;
}

export function UpsertSchemaFieldDtoFromJSON(json: any): UpsertSchemaFieldDto {
    return UpsertSchemaFieldDtoFromJSONTyped(json, false);
}

export function UpsertSchemaFieldDtoFromJSONTyped(json: any, _ignoreDiscriminator: boolean): UpsertSchemaFieldDto {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'isHidden': json['isHidden'] == null ? undefined : json['isHidden'],
        'isLocked': json['isLocked'] == null ? undefined : json['isLocked'],
        'isDisabled': json['isDisabled'] == null ? undefined : json['isDisabled'],
        'partitioning': json['partitioning'] == null ? undefined : json['partitioning'],
        'properties': FieldPropertiesDtoFromJSON(json['properties']),
        'nested': json['nested'] == null ? undefined : ((json['nested'] as Array<any>).map(UpsertSchemaNestedFieldDtoFromJSON)),
    };
}

export function UpsertSchemaFieldDtoToJSON(value?: UpsertSchemaFieldDto | null, _ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'isHidden': value['isHidden'],
        'isLocked': value['isLocked'],
        'isDisabled': value['isDisabled'],
        'partitioning': value['partitioning'],
        'properties': FieldPropertiesDtoToJSON(value['properties']),
        'nested': value['nested'] == null ? undefined : ((value['nested'] as Array<any>).map(x => UpsertSchemaNestedFieldDtoToJSON(x))),
    };
}
