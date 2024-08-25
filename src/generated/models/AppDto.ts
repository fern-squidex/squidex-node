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
import type { ResourceLink } from './ResourceLink';
import {
    ResourceLinkFromJSON,
    ResourceLinkFromJSONTyped,
    ResourceLinkToJSON,
} from './ResourceLink';

/**
 * 
 * @export
 * @interface AppDto
 */
export interface AppDto {
    /**
     * The links.
     * @type {{ [key: string]: ResourceLink; }}
     * @memberof AppDto
     */
    links: { [key: string]: ResourceLink; };
    /**
     * The ID of the app.
     * @type {string}
     * @memberof AppDto
     */
    id: string;
    /**
     * The name of the app.
     * @type {string}
     * @memberof AppDto
     */
    name: string;
    /**
     * The optional label of the app.
     * @type {string}
     * @memberof AppDto
     */
    label?: string | null;
    /**
     * The optional description of the app.
     * @type {string}
     * @memberof AppDto
     */
    description?: string | null;
    /**
     * The version of the app.
     * @type {number}
     * @memberof AppDto
     */
    version: number;
    /**
     * The timestamp when the app has been created.
     * @type {Date}
     * @memberof AppDto
     */
    created: Date;
    /**
     * The timestamp when the app has been modified last.
     * @type {Date}
     * @memberof AppDto
     */
    lastModified: Date;
    /**
     * The ID of the team.
     * @type {string}
     * @memberof AppDto
     */
    teamId?: string | null;
    /**
     * The permission level of the user.
     * @type {Array<string>}
     * @memberof AppDto
     */
    permissions: Array<string>;
    /**
     * Indicates if the user can access the api.
     * @type {boolean}
     * @memberof AppDto
     * @deprecated
     */
    canAccessApi: boolean;
    /**
     * Indicates if the user can access at least one content.
     * @type {boolean}
     * @memberof AppDto
     */
    canAccessContent: boolean;
    /**
     * The role name of the user.
     * @type {string}
     * @memberof AppDto
     */
    roleName?: string | null;
    /**
     * The properties from the role.
     * @type {{ [key: string]: any; }}
     * @memberof AppDto
     */
    roleProperties: { [key: string]: any; };
}

/**
 * Check if a given object implements the AppDto interface.
 */
export function instanceOfAppDto(value: object): value is AppDto {
    if (!('links' in value) || value['links'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('version' in value) || value['version'] === undefined) return false;
    if (!('created' in value) || value['created'] === undefined) return false;
    if (!('lastModified' in value) || value['lastModified'] === undefined) return false;
    if (!('permissions' in value) || value['permissions'] === undefined) return false;
    if (!('canAccessApi' in value) || value['canAccessApi'] === undefined) return false;
    if (!('canAccessContent' in value) || value['canAccessContent'] === undefined) return false;
    if (!('roleProperties' in value) || value['roleProperties'] === undefined) return false;
    return true;
}

export function AppDtoFromJSON(json: any): AppDto {
    return AppDtoFromJSONTyped(json, false);
}

export function AppDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppDto {
    if (json == null) {
        return json;
    }
    return {
        
        'links': (mapValues(json['_links'], ResourceLinkFromJSON)),
        'id': json['id'],
        'name': json['name'],
        'label': json['label'] == null ? undefined : json['label'],
        'description': json['description'] == null ? undefined : json['description'],
        'version': json['version'],
        'created': (new Date(json['created'])),
        'lastModified': (new Date(json['lastModified'])),
        'teamId': json['teamId'] == null ? undefined : json['teamId'],
        'permissions': json['permissions'],
        'canAccessApi': json['canAccessApi'],
        'canAccessContent': json['canAccessContent'],
        'roleName': json['roleName'] == null ? undefined : json['roleName'],
        'roleProperties': json['roleProperties'],
    };
}

export function AppDtoToJSON(value?: AppDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        '_links': (mapValues(value['links'], ResourceLinkToJSON)),
        'id': value['id'],
        'name': value['name'],
        'label': value['label'],
        'description': value['description'],
        'version': value['version'],
        'created': ((value['created']).toISOString()),
        'lastModified': ((value['lastModified']).toISOString()),
        'teamId': value['teamId'],
        'permissions': value['permissions'],
        'canAccessApi': value['canAccessApi'],
        'canAccessContent': value['canAccessContent'],
        'roleName': value['roleName'],
        'roleProperties': value['roleProperties'],
    };
}