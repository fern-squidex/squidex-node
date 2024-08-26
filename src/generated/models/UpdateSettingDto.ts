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
 * @interface UpdateSettingDto
 */
export interface UpdateSettingDto {
    /**
     * The value for the setting.
     * @type {any}
     * @memberof UpdateSettingDto
     */
    value: any | null;
}


/**
 * Check if a given object implements the UpdateSettingDto interface.
 */
export function instanceOfUpdateSettingDto(value: any): value is UpdateSettingDto {
    if (!value) {
        return false;
    }
    if (!('value' in value) || value['value'] === undefined) return false;
    return true;
}

export function UpdateSettingDtoFromJSON(json: any): UpdateSettingDto {
    return UpdateSettingDtoFromJSONTyped(json, false);
}

export function UpdateSettingDtoFromJSONTyped(json: any, _ignoreDiscriminator: boolean): UpdateSettingDto {
    if (json == null) {
        return json;
    }
    return {
        
        'value': json['value'],
    };
}

export function UpdateSettingDtoToJSON(value?: UpdateSettingDto | null, _ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'value': value['value'],
    };
}
