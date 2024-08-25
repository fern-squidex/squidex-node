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
import type { JobStatus } from './JobStatus';
import {
    JobStatusFromJSON,
    JobStatusFromJSONTyped,
    JobStatusToJSON,
} from './JobStatus';
import type { ResourceLink } from './ResourceLink';
import {
    ResourceLinkFromJSON,
    ResourceLinkFromJSONTyped,
    ResourceLinkToJSON,
} from './ResourceLink';
import type { JobLogMessageDto } from './JobLogMessageDto';
import {
    JobLogMessageDtoFromJSON,
    JobLogMessageDtoFromJSONTyped,
    JobLogMessageDtoToJSON,
} from './JobLogMessageDto';

/**
 * 
 * @export
 * @interface JobDto
 */
export interface JobDto {
    /**
     * The links.
     * @type {{ [key: string]: ResourceLink; }}
     * @memberof JobDto
     */
    links: { [key: string]: ResourceLink; };
    /**
     * The ID of the job.
     * @type {string}
     * @memberof JobDto
     */
    id: string;
    /**
     * The time when the job has been started.
     * @type {Date}
     * @memberof JobDto
     */
    started: Date;
    /**
     * The time when the job has been stopped.
     * @type {Date}
     * @memberof JobDto
     */
    stopped?: Date | null;
    /**
     * 
     * @type {JobStatus}
     * @memberof JobDto
     */
    status: JobStatus;
    /**
     * The name of the task.
     * @type {string}
     * @memberof JobDto
     */
    taskName: string;
    /**
     * The description of the job.
     * @type {string}
     * @memberof JobDto
     */
    description: string;
    /**
     * The arguments for the job.
     * @type {{ [key: string]: string; }}
     * @memberof JobDto
     */
    taskArguments: { [key: string]: string; };
    /**
     * The list of log items.
     * @type {Array<JobLogMessageDto>}
     * @memberof JobDto
     */
    log: Array<JobLogMessageDto>;
    /**
     * Indicates whether the job can be downloaded.
     * @type {boolean}
     * @memberof JobDto
     */
    canDownload: boolean;
}




/**
 * Check if a given object implements the JobDto interface.
 */
export function instanceOfJobDto(value: object): value is JobDto {
    if (!('links' in value) || value['links'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('started' in value) || value['started'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('taskName' in value) || value['taskName'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('taskArguments' in value) || value['taskArguments'] === undefined) return false;
    if (!('log' in value) || value['log'] === undefined) return false;
    if (!('canDownload' in value) || value['canDownload'] === undefined) return false;
    return true;
}

export function JobDtoFromJSON(json: any): JobDto {
    return JobDtoFromJSONTyped(json, false);
}

export function JobDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobDto {
    if (json == null) {
        return json;
    }
    return {
        
        'links': (mapValues(json['_links'], ResourceLinkFromJSON)),
        'id': json['id'],
        'started': (new Date(json['started'])),
        'stopped': json['stopped'] == null ? undefined : (new Date(json['stopped'])),
        'status': JobStatusFromJSON(json['status']),
        'taskName': json['taskName'],
        'description': json['description'],
        'taskArguments': json['taskArguments'],
        'log': ((json['log'] as Array<any>).map(JobLogMessageDtoFromJSON)),
        'canDownload': json['canDownload'],
    };
}

export function JobDtoToJSON(value?: JobDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        '_links': (mapValues(value['links'], ResourceLinkToJSON)),
        'id': value['id'],
        'started': ((value['started']).toISOString()),
        'stopped': value['stopped'] == null ? undefined : ((value['stopped'] as any).toISOString()),
        'status': JobStatusToJSON(value['status']),
        'taskName': value['taskName'],
        'description': value['description'],
        'taskArguments': value['taskArguments'],
        'log': ((value['log'] as Array<any>).map(JobLogMessageDtoToJSON)),
        'canDownload': value['canDownload'],
    };
}
