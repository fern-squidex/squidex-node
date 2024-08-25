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
import type { FieldPropertiesDto } from './FieldPropertiesDto';
import {
    FieldPropertiesDtoFromJSON,
    FieldPropertiesDtoFromJSONTyped,
    FieldPropertiesDtoToJSON,
} from './FieldPropertiesDto';
import type { ArrayCalculatedDefaultValue } from './ArrayCalculatedDefaultValue';
import {
    ArrayCalculatedDefaultValueFromJSON,
    ArrayCalculatedDefaultValueFromJSONTyped,
    ArrayCalculatedDefaultValueToJSON,
} from './ArrayCalculatedDefaultValue';

/**
 * 
 * @export
 * @interface ComponentsFieldPropertiesDto
 */
export interface ComponentsFieldPropertiesDto extends FieldPropertiesDto {
    /**
     * The minimum allowed items for the field value.
     * @type {number}
     * @memberof ComponentsFieldPropertiesDto
     */
    minItems?: number | null;
    /**
     * The maximum allowed items for the field value.
     * @type {number}
     * @memberof ComponentsFieldPropertiesDto
     */
    maxItems?: number | null;
    /**
     * 
     * @type {ArrayCalculatedDefaultValue}
     * @memberof ComponentsFieldPropertiesDto
     */
    calculatedDefaultValue?: ArrayCalculatedDefaultValue;
    /**
     * The ID of the embedded schemas.
     * @type {Array<string>}
     * @memberof ComponentsFieldPropertiesDto
     */
    schemaIds?: Array<string> | null;
    /**
     * The fields that must be unique.
     * @type {Array<string>}
     * @memberof ComponentsFieldPropertiesDto
     */
    uniqueFields?: Array<string> | null;
}




/**
 * Check if a given object implements the ComponentsFieldPropertiesDto interface.
 */
export function instanceOfComponentsFieldPropertiesDto(value: object): value is ComponentsFieldPropertiesDto {
    return true;
}

export function ComponentsFieldPropertiesDtoFromJSON(json: any): ComponentsFieldPropertiesDto {
    return ComponentsFieldPropertiesDtoFromJSONTyped(json, false);
}

export function ComponentsFieldPropertiesDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComponentsFieldPropertiesDto {
    if (json == null) {
        return json;
    }
    return {
        ...FieldPropertiesDtoFromJSONTyped(json, ignoreDiscriminator),
        'minItems': json['minItems'] == null ? undefined : json['minItems'],
        'maxItems': json['maxItems'] == null ? undefined : json['maxItems'],
        'calculatedDefaultValue': json['calculatedDefaultValue'] == null ? undefined : ArrayCalculatedDefaultValueFromJSON(json['calculatedDefaultValue']),
        'schemaIds': json['schemaIds'] == null ? undefined : json['schemaIds'],
        'uniqueFields': json['uniqueFields'] == null ? undefined : json['uniqueFields'],
    };
}

export function ComponentsFieldPropertiesDtoToJSON(value?: ComponentsFieldPropertiesDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        ...FieldPropertiesDtoToJSON(value, true),
        'minItems': value['minItems'],
        'maxItems': value['maxItems'],
        'calculatedDefaultValue': ArrayCalculatedDefaultValueToJSON(value['calculatedDefaultValue']),
        'schemaIds': value['schemaIds'],
        'uniqueFields': value['uniqueFields'],
    };
}
