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
 * @interface UserProperty
 */
export interface UserProperty {
    /**
     * 
     * @type {string}
     * @memberof UserProperty
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof UserProperty
     */
    value: string;
}


/**
 * Check if a given object implements the UserProperty interface.
 */
export function instanceOfUserProperty(value: any): value is UserProperty {
    if (!value) {
        return false;
    }
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('value' in value) || value['value'] === undefined) return false;
    return true;
}

export function UserPropertyFromJSON(json: any): UserProperty {
    return UserPropertyFromJSONTyped(json, false);
}

export function UserPropertyFromJSONTyped(json: any, _ignoreDiscriminator: boolean): UserProperty {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'value': json['value'],
    };
}

export function UserPropertyToJSON(value?: UserProperty | null, _ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'value': value['value'],
    };
}
