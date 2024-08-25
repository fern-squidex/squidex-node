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
/**
 * 
 * @export
 * @interface CurrentStorageDto
 */
export interface CurrentStorageDto {
    /**
     * The size in bytes.
     * @type {number}
     * @memberof CurrentStorageDto
     */
    size: number;
    /**
     * The maximum allowed asset size.
     * @type {number}
     * @memberof CurrentStorageDto
     */
    maxAllowed: number;
}


/**
 * Check if a given object implements the CurrentStorageDto interface.
 */
export function instanceOfCurrentStorageDto(value: object): value is CurrentStorageDto {
    if (!('size' in value) || value['size'] === undefined) return false;
    if (!('maxAllowed' in value) || value['maxAllowed'] === undefined) return false;
    return true;
}

export function CurrentStorageDtoFromJSON(json: any): CurrentStorageDto {
    return CurrentStorageDtoFromJSONTyped(json, false);
}

export function CurrentStorageDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CurrentStorageDto {
    if (json == null) {
        return json;
    }
    return {
        
        'size': json['size'],
        'maxAllowed': json['maxAllowed'],
    };
}

export function CurrentStorageDtoToJSON(value?: CurrentStorageDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'size': value['size'],
        'maxAllowed': value['maxAllowed'],
    };
}
