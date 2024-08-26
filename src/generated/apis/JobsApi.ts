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


import * as runtime from '../runtime';
import type {
  JobsDto,
} from '../models/index';
import {
    JobsDtoFromJSON,
} from '../models/index';

export interface JobsContentGetJobContentRequest {
    appId?: string;
}

export interface JobsContentGetJobContentRequestRaw {
    id: string;
    appId?: string;
}

export interface JobsDeleteJobRequestRaw {
    id: string;
}

/**
 * JobsApi - interface
 * 
 * @export
 * @interface JobsApiInterface
 */
export interface JobsApiInterface {
    /**
     * 
     * @summary Get the job content.
     * @param {string} id The ID of the job.
     * @param {string} [appId] The ID of the app.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApiInterface
     */
    getJobContentRaw(id: string, requestParameters?: JobsContentGetJobContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Blob>>;

    /**
     * Get the job content.
     */
    getJobContent(id: string, requestParameters?: JobsContentGetJobContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blob>;

    /**
     * 
     * @summary Delete a job.
     * @param {string} id The ID of the jobs to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApiInterface
     */
    deleteJobRaw(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete a job.
     */
    deleteJob(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @summary Get all jobs.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApiInterface
     */
    getJobsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JobsDto>>;

    /**
     * Get all jobs.
     */
    getJobs(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JobsDto>;

}

/**
 * 
 */
export class JobsApi extends runtime.BaseAPI implements JobsApiInterface {

    /**
     * Get the job content.
     */
    async getJobContentRaw(id: string, requestParameters: JobsContentGetJobContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Blob>> {
        const _id = id;
        const _appId = requestParameters?.['appId'];

        if (_id == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling ().'
            );
        }

        const queryParameters: any = {};

        if (_appId != null) {
            queryParameters['appId'] = _appId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/apps/jobs/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(_id))).replace("$app$", encodeURIComponent(this.appName)),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.BlobApiResponse(response);
    }

    /**
     * Get the job content.
     */
    async getJobContent(id: string, requestParameters: JobsContentGetJobContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blob> {
        const response = await this.getJobContentRaw(id, requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a job.
     */
    async deleteJobRaw(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const _id = id;

        if (_id == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling ().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/apps/$app$/jobs/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(_id))).replace("$app$", encodeURIComponent(this.appName)),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a job.
     */
    async deleteJob(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteJobRaw(id, initOverrides);
    }

    /**
     * Get all jobs.
     */
    async getJobsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JobsDto>> {

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/apps/$app$/jobs`.replace("$app$", encodeURIComponent(this.appName)),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JobsDtoFromJSON(jsonValue));
    }

    /**
     * Get all jobs.
     */
    async getJobs(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JobsDto> {
        const response = await this.getJobsRaw(initOverrides);
        return await response.value();
    }

}
