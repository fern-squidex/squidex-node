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
  HistoryEventDto,
} from '../models/index';
import {
    HistoryEventDtoFromJSON,
} from '../models/index';

export interface HistoryGetAppHistoryRequest {
    channel?: string;
}

export interface HistoryGetTeamHistoryRequest {
    team: string;
    channel?: string;
}

/**
 * HistoryApi - interface
 * 
 * @export
 * @interface HistoryApiInterface
 */
export interface HistoryApiInterface {
    /**
     * 
     * @summary Get the app history.
     * @param {string} [channel] The name of the channel.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HistoryApiInterface
     */
    getAppHistoryRaw(requestParameters: HistoryGetAppHistoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<HistoryEventDto>>>;

    /**
     * Get the app history.
     */
    getAppHistory(requestParameters: HistoryGetAppHistoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<HistoryEventDto>>;

    /**
     * 
     * @summary Get the team history.
     * @param {string} team The ID of the team.
     * @param {string} [channel] The name of the channel.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HistoryApiInterface
     */
    getTeamHistoryRaw(requestParameters: HistoryGetTeamHistoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<HistoryEventDto>>>;

    /**
     * Get the team history.
     */
    getTeamHistory(requestParameters: HistoryGetTeamHistoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<HistoryEventDto>>;

}

/**
 * 
 */
export class HistoryApi extends runtime.BaseAPI implements HistoryApiInterface {

    /**
     * Get the app history.
     */
    async getAppHistoryRaw(requestParameters: HistoryGetAppHistoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<HistoryEventDto>>> {
        const queryParameters: any = {};

        if (requestParameters['channel'] != null) {
            queryParameters['channel'] = requestParameters['channel'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/apps/$app$/history`.replace("$app$", encodeURIComponent(this.appName)),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(HistoryEventDtoFromJSON));
    }

    /**
     * Get the app history.
     */
    async getAppHistory(requestParameters: HistoryGetAppHistoryRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<HistoryEventDto>> {
        const response = await this.getAppHistoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get the team history.
     */
    async getTeamHistoryRaw(requestParameters: HistoryGetTeamHistoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<HistoryEventDto>>> {
        if (requestParameters['team'] == null) {
            throw new runtime.RequiredError(
                'team',
                'Required parameter "team" was null or undefined when calling ().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['channel'] != null) {
            queryParameters['channel'] = requestParameters['channel'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/teams/{team}/history`.replace(`{${"team"}}`, encodeURIComponent(String((requestParameters as any)['team']))).replace("$app$", encodeURIComponent(this.appName)),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(HistoryEventDtoFromJSON));
    }

    /**
     * Get the team history.
     */
    async getTeamHistory(requestParameters: HistoryGetTeamHistoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<HistoryEventDto>> {
        const response = await this.getTeamHistoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
