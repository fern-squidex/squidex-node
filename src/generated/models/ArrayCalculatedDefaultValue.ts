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


/**
 * 
 * @export
 */
export const ArrayCalculatedDefaultValue = {
    EmptyArray: 'EmptyArray',
    Null: 'Null'
} as const;
export type ArrayCalculatedDefaultValue = typeof ArrayCalculatedDefaultValue[keyof typeof ArrayCalculatedDefaultValue];


export function instanceOfArrayCalculatedDefaultValue(value: any): boolean {
    for (const key in ArrayCalculatedDefaultValue) {
        if (Object.prototype.hasOwnProperty.call(ArrayCalculatedDefaultValue, key)) {
            if (ArrayCalculatedDefaultValue[key as keyof typeof ArrayCalculatedDefaultValue] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ArrayCalculatedDefaultValueFromJSON(json: any): ArrayCalculatedDefaultValue {
    return ArrayCalculatedDefaultValueFromJSONTyped(json, false);
}

export function ArrayCalculatedDefaultValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArrayCalculatedDefaultValue {
    return json as ArrayCalculatedDefaultValue;
}

export function ArrayCalculatedDefaultValueToJSON(value?: ArrayCalculatedDefaultValue | null): any {
    return value as any;
}
