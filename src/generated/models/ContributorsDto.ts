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
import type { ContributorDto } from './ContributorDto';
import {
    ContributorDtoFromJSON,
    ContributorDtoFromJSONTyped,
    ContributorDtoToJSON,
} from './ContributorDto';
import type { ContributorsMetadata } from './ContributorsMetadata';
import {
    ContributorsMetadataFromJSON,
    ContributorsMetadataFromJSONTyped,
    ContributorsMetadataToJSON,
} from './ContributorsMetadata';
import type { ResourceLink } from './ResourceLink';
import {
    ResourceLinkFromJSON,
    ResourceLinkFromJSONTyped,
    ResourceLinkToJSON,
} from './ResourceLink';

/**
 * 
 * @export
 * @interface ContributorsDto
 */
export interface ContributorsDto {
    /**
     * The links.
     * @type {{ [key: string]: ResourceLink; }}
     * @memberof ContributorsDto
     */
    links: { [key: string]: ResourceLink; };
    /**
     * The contributors.
     * @type {Array<ContributorDto>}
     * @memberof ContributorsDto
     */
    items: Array<ContributorDto>;
    /**
     * The maximum number of allowed contributors.
     * @type {number}
     * @memberof ContributorsDto
     */
    maxContributors: number;
    /**
     * 
     * @type {ContributorsMetadata}
     * @memberof ContributorsDto
     */
    meta?: ContributorsMetadata;
}

/**
 * Check if a given object implements the ContributorsDto interface.
 */
export function instanceOfContributorsDto(value: object): value is ContributorsDto {
    if (!('links' in value) || value['links'] === undefined) return false;
    if (!('items' in value) || value['items'] === undefined) return false;
    if (!('maxContributors' in value) || value['maxContributors'] === undefined) return false;
    return true;
}

export function ContributorsDtoFromJSON(json: any): ContributorsDto {
    return ContributorsDtoFromJSONTyped(json, false);
}

export function ContributorsDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContributorsDto {
    if (json == null) {
        return json;
    }
    return {
        
        'links': (mapValues(json['_links'], ResourceLinkFromJSON)),
        'items': ((json['items'] as Array<any>).map(ContributorDtoFromJSON)),
        'maxContributors': json['maxContributors'],
        'meta': json['_meta'] == null ? undefined : ContributorsMetadataFromJSON(json['_meta']),
    };
}

export function ContributorsDtoToJSON(value?: ContributorsDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        '_links': (mapValues(value['links'], ResourceLinkToJSON)),
        'items': ((value['items'] as Array<any>).map(ContributorDtoToJSON)),
        'maxContributors': value['maxContributors'],
        '_meta': ContributorsMetadataToJSON(value['meta']),
    };
}