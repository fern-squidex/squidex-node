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
import type { JobDto } from './JobDto';
import {
    JobDtoFromJSON,
    JobDtoFromJSONTyped,
    JobDtoToJSON,
} from './JobDto';
import type { ResourceLink } from './ResourceLink';
import {
    ResourceLinkFromJSON,
    ResourceLinkFromJSONTyped,
    ResourceLinkToJSON,
} from './ResourceLink';

/**
 * 
 * @export
 * @interface JobsDto
 */
export interface JobsDto {
    /**
     * The links.
     * @type {{ [key: string]: ResourceLink; }}
     * @memberof JobsDto
     */
    links: { [key: string]: ResourceLink; };
    /**
     * The jobs.
     * @type {Array<JobDto>}
     * @memberof JobsDto
     */
    items: Array<JobDto>;
}


/**
 * Check if a given object implements the JobsDto interface.
 */
export function instanceOfJobsDto(value: object): value is JobsDto {
    if (!('links' in value) || value['links'] === undefined) return false;
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function JobsDtoFromJSON(json: any): JobsDto {
    return JobsDtoFromJSONTyped(json, false);
}

export function JobsDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobsDto {
    if (json == null) {
        return json;
    }
    return {
        
        'links': (mapValues(json['_links'], ResourceLinkFromJSON)),
        'items': ((json['items'] as Array<any>).map(JobDtoFromJSON)),
    };
}

export function JobsDtoToJSON(value?: JobsDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        '_links': (mapValues(value['links'], ResourceLinkToJSON)),
        'items': ((value['items'] as Array<any>).map(JobDtoToJSON)),
    };
}
