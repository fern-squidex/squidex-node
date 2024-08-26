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
 * @interface TransferToTeamDto
 */
export interface TransferToTeamDto {
    /**
     * The ID of the team.
     * @type {string}
     * @memberof TransferToTeamDto
     */
    teamId?: string | null;
}


/**
 * Check if a given object implements the TransferToTeamDto interface.
 */
export function instanceOfTransferToTeamDto(value: any): value is TransferToTeamDto {
    if (!value) {
        return false;
    }
    return true;
}

export function TransferToTeamDtoFromJSON(json: any): TransferToTeamDto {
    return TransferToTeamDtoFromJSONTyped(json, false);
}

export function TransferToTeamDtoFromJSONTyped(json: any, _ignoreDiscriminator: boolean): TransferToTeamDto {
    if (json == null) {
        return json;
    }
    return {
        
        'teamId': json['teamId'] == null ? undefined : json['teamId'],
    };
}

export function TransferToTeamDtoToJSON(value?: TransferToTeamDto | null, _ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'teamId': value['teamId'],
    };
}
