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
import type { SearchResultType } from './SearchResultType';
import {
    SearchResultTypeFromJSON,
    SearchResultTypeFromJSONTyped,
    SearchResultTypeToJSON,
} from './SearchResultType';

/**
 * 
 * @export
 * @interface SearchResultDto
 */
export interface SearchResultDto {
    /**
     * The links.
     * @type {{ [key: string]: ResourceLink; }}
     * @memberof SearchResultDto
     */
    links: { [key: string]: ResourceLink; };
    /**
     * The name of the search result.
     * @type {string}
     * @memberof SearchResultDto
     */
    name: string;
    /**
     * 
     * @type {SearchResultType}
     * @memberof SearchResultDto
     */
    type: SearchResultType;
    /**
     * An optional label.
     * @type {string}
     * @memberof SearchResultDto
     */
    label?: string | null;
}



/**
 * Check if a given object implements the SearchResultDto interface.
 */
export function instanceOfSearchResultDto(value: object): value is SearchResultDto {
    if (!('links' in value) || value['links'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function SearchResultDtoFromJSON(json: any): SearchResultDto {
    return SearchResultDtoFromJSONTyped(json, false);
}

export function SearchResultDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchResultDto {
    if (json == null) {
        return json;
    }
    return {
        
        'links': (mapValues(json['_links'], ResourceLinkFromJSON)),
        'name': json['name'],
        'type': SearchResultTypeFromJSON(json['type']),
        'label': json['label'] == null ? undefined : json['label'],
    };
}

export function SearchResultDtoToJSON(value?: SearchResultDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        '_links': (mapValues(value['links'], ResourceLinkToJSON)),
        'name': value['name'],
        'type': SearchResultTypeToJSON(value['type']),
        'label': value['label'],
    };
}