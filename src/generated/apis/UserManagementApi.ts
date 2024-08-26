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
  CreateUserDto,
  UpdateUserDto,
  UserDto,
  UsersDto,
} from '../models/index';
import {
    CreateUserDtoToJSON,
    UpdateUserDtoToJSON,
    UserDtoFromJSON,
    UsersDtoFromJSON,
} from '../models/index';

export interface UserManagementDeleteUserRequest {
    id: string;
}

export interface UserManagementGetUserRequest {
    id: string;
}

export interface UserManagementGetUsersRequest {
    query?: string | null;
    skip?: number;
    take?: number;
}

export interface UserManagementLockUserRequest {
    id: string;
}

export interface UserManagementPostUserRequest {
    createUserDto: CreateUserDto;
}

export interface UserManagementPutUserRequest {
    id: string;
    updateUserDto: UpdateUserDto;
}

export interface UserManagementUnlockUserRequest {
    id: string;
}

/**
 * UserManagementApi - interface
 * 
 * @export
 * @interface UserManagementApiInterface
 */
export interface UserManagementApiInterface {
    /**
     * 
     * @summary Delete a User.
     * @param {string} id The ID of the user to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserManagementApiInterface
     */
    deleteUserRaw(requestParameters: UserManagementDeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete a User.
     */
    deleteUser(requestParameters: UserManagementDeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @summary Get a user by ID.
     * @param {string} id The ID of the user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserManagementApiInterface
     */
    getUserRaw(requestParameters: UserManagementGetUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserDto>>;

    /**
     * Get a user by ID.
     */
    getUser(requestParameters: UserManagementGetUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserDto>;

    /**
     * 
     * @summary Get users by query.
     * @param {string} [query] Optional query to search by email address or username.
     * @param {number} [skip] The number of users to skip.
     * @param {number} [take] The number of users to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserManagementApiInterface
     */
    getUsersRaw(requestParameters: UserManagementGetUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersDto>>;

    /**
     * Get users by query.
     */
    getUsers(requestParameters: UserManagementGetUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersDto>;

    /**
     * 
     * @summary Lock a user.
     * @param {string} id The ID of the user to lock.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserManagementApiInterface
     */
    lockUserRaw(requestParameters: UserManagementLockUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserDto>>;

    /**
     * Lock a user.
     */
    lockUser(requestParameters: UserManagementLockUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserDto>;

    /**
     * 
     * @summary Create a new user.
     * @param {CreateUserDto} createUserDto The user object that needs to be added.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserManagementApiInterface
     */
    postUserRaw(requestParameters: UserManagementPostUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserDto>>;

    /**
     * Create a new user.
     */
    postUser(requestParameters: UserManagementPostUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserDto>;

    /**
     * 
     * @summary Update a user.
     * @param {string} id The ID of the user.
     * @param {UpdateUserDto} updateUserDto The user object that needs to be updated.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserManagementApiInterface
     */
    putUserRaw(requestParameters: UserManagementPutUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserDto>>;

    /**
     * Update a user.
     */
    putUser(requestParameters: UserManagementPutUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserDto>;

    /**
     * 
     * @summary Unlock a user.
     * @param {string} id The ID of the user to unlock.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserManagementApiInterface
     */
    unlockUserRaw(requestParameters: UserManagementUnlockUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserDto>>;

    /**
     * Unlock a user.
     */
    unlockUser(requestParameters: UserManagementUnlockUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserDto>;

}

/**
 * 
 */
export class UserManagementApi extends runtime.BaseAPI implements UserManagementApiInterface {

    /**
     * Delete a User.
     */
    async deleteUserRaw(requestParameters: UserManagementDeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling ().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/user-management/{id}`.replace(`{${"id"}}`, encodeURIComponent(String((requestParameters as any)['id']))).replace("$app$", encodeURIComponent(this.appName)),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a User.
     */
    async deleteUser(requestParameters: UserManagementDeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteUserRaw(requestParameters, initOverrides);
    }

    /**
     * Get a user by ID.
     */
    async getUserRaw(requestParameters: UserManagementGetUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserDto>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling ().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/user-management/{id}`.replace(`{${"id"}}`, encodeURIComponent(String((requestParameters as any)['id']))).replace("$app$", encodeURIComponent(this.appName)),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDtoFromJSON(jsonValue));
    }

    /**
     * Get a user by ID.
     */
    async getUser(requestParameters: UserManagementGetUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserDto> {
        const response = await this.getUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get users by query.
     */
    async getUsersRaw(requestParameters: UserManagementGetUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersDto>> {
        const queryParameters: any = {};

        if (requestParameters['query'] != null) {
            queryParameters['query'] = requestParameters['query'];
        }

        if (requestParameters['skip'] != null) {
            queryParameters['skip'] = requestParameters['skip'];
        }

        if (requestParameters['take'] != null) {
            queryParameters['take'] = requestParameters['take'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/user-management`.replace("$app$", encodeURIComponent(this.appName)),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UsersDtoFromJSON(jsonValue));
    }

    /**
     * Get users by query.
     */
    async getUsers(requestParameters: UserManagementGetUsersRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersDto> {
        const response = await this.getUsersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Lock a user.
     */
    async lockUserRaw(requestParameters: UserManagementLockUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserDto>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling ().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/user-management/{id}/lock`.replace(`{${"id"}}`, encodeURIComponent(String((requestParameters as any)['id']))).replace("$app$", encodeURIComponent(this.appName)),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDtoFromJSON(jsonValue));
    }

    /**
     * Lock a user.
     */
    async lockUser(requestParameters: UserManagementLockUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserDto> {
        const response = await this.lockUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a new user.
     */
    async postUserRaw(requestParameters: UserManagementPostUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserDto>> {
        if (requestParameters['createUserDto'] == null) {
            throw new runtime.RequiredError(
                'createUserDto',
                'Required parameter "createUserDto" was null or undefined when calling ().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/user-management`.replace("$app$", encodeURIComponent(this.appName)),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateUserDtoToJSON(requestParameters['createUserDto']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDtoFromJSON(jsonValue));
    }

    /**
     * Create a new user.
     */
    async postUser(requestParameters: UserManagementPostUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserDto> {
        const response = await this.postUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a user.
     */
    async putUserRaw(requestParameters: UserManagementPutUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserDto>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling ().'
            );
        }

        if (requestParameters['updateUserDto'] == null) {
            throw new runtime.RequiredError(
                'updateUserDto',
                'Required parameter "updateUserDto" was null or undefined when calling ().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/user-management/{id}`.replace(`{${"id"}}`, encodeURIComponent(String((requestParameters as any)['id']))).replace("$app$", encodeURIComponent(this.appName)),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateUserDtoToJSON(requestParameters['updateUserDto']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDtoFromJSON(jsonValue));
    }

    /**
     * Update a user.
     */
    async putUser(requestParameters: UserManagementPutUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserDto> {
        const response = await this.putUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Unlock a user.
     */
    async unlockUserRaw(requestParameters: UserManagementUnlockUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserDto>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling ().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/user-management/{id}/unlock`.replace(`{${"id"}}`, encodeURIComponent(String((requestParameters as any)['id']))).replace("$app$", encodeURIComponent(this.appName)),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDtoFromJSON(jsonValue));
    }

    /**
     * Unlock a user.
     */
    async unlockUser(requestParameters: UserManagementUnlockUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserDto> {
        const response = await this.unlockUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
