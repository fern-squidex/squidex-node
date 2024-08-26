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
 * @interface ReferralInfo
 */
export interface ReferralInfo {
    /**
     * 
     * @type {string}
     * @memberof ReferralInfo
     */
    code: string;
    /**
     * 
     * @type {string}
     * @memberof ReferralInfo
     */
    earned: string;
    /**
     * 
     * @type {string}
     * @memberof ReferralInfo
     */
    condition: string;
}


/**
 * Check if a given object implements the ReferralInfo interface.
 */
export function instanceOfReferralInfo(value: any): value is ReferralInfo {
    if (!value) {
        return false;
    }
    if (!('code' in value) || value['code'] === undefined) return false;
    if (!('earned' in value) || value['earned'] === undefined) return false;
    if (!('condition' in value) || value['condition'] === undefined) return false;
    return true;
}

export function ReferralInfoFromJSON(json: any): ReferralInfo {
    return ReferralInfoFromJSONTyped(json, false);
}

export function ReferralInfoFromJSONTyped(json: any, _ignoreDiscriminator: boolean): ReferralInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'earned': json['earned'],
        'condition': json['condition'],
    };
}

export function ReferralInfoToJSON(value?: ReferralInfo | null, _ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'earned': value['earned'],
        'condition': value['condition'],
    };
}
