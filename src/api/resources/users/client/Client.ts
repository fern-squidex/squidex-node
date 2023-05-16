/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Squidex from "../../..";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";
import URLSearchParams from "@ungap/url-search-params";
import * as stream from "stream";

export declare namespace Users {
    interface Options {
        environment?: environments.SquidexEnvironment | string;
        appName: string;
        token: core.Supplier<core.BearerToken>;
    }
}

export class Users {
    constructor(protected readonly options: Users.Options) {}

    /**
     * @throws {@link Squidex.InternalServerError}
     */
    public async getUserResources(): Promise<Squidex.ResourcesDto> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.SquidexEnvironment.Default, "api"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@squidex/squidex",
                "X-Fern-SDK-Version": "1.0.0-rc0",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.ResourcesDto.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 500:
                    throw new Squidex.InternalServerError(
                        await serializers.ErrorDto.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.SquidexError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SquidexError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SquidexTimeoutError();
            case "unknown":
                throw new errors.SquidexError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Search the user by query that contains the email address or the part of the email address.
     * @throws {@link Squidex.InternalServerError}
     */
    public async getUsers(request: Squidex.UsersGetUsersRequest = {}): Promise<Squidex.UserDto[]> {
        const { query } = request;
        const _queryParams = new URLSearchParams();
        if (query != null) {
            _queryParams.append("query", query);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.SquidexEnvironment.Default, "api/users"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@squidex/squidex",
                "X-Fern-SDK-Version": "1.0.0-rc0",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.users.getUsers.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 500:
                    throw new Squidex.InternalServerError(
                        await serializers.ErrorDto.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.SquidexError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SquidexError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SquidexTimeoutError();
            case "unknown":
                throw new errors.SquidexError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @throws {@link Squidex.NotFoundError}
     * @throws {@link Squidex.InternalServerError}
     */
    public async getUser(id: string): Promise<Squidex.UserDto> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.SquidexEnvironment.Default, `api/users/${id}`),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@squidex/squidex",
                "X-Fern-SDK-Version": "1.0.0-rc0",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.UserDto.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new Squidex.NotFoundError(_response.error.body);
                case 500:
                    throw new Squidex.InternalServerError(
                        await serializers.ErrorDto.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.SquidexError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SquidexError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SquidexTimeoutError();
            case "unknown":
                throw new errors.SquidexError({
                    message: _response.error.errorMessage,
                });
        }
    }

    public async getUserPicture(id: string): Promise<stream.Readable> {
        return await core.streamingFetcher({
            url: urlJoin(
                this.options.environment ?? environments.SquidexEnvironment.Default,
                `api/users/${id}/picture`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@squidex/squidex",
                "X-Fern-SDK-Version": "1.0.0-rc0",
            },
            timeoutMs: 60000,
            onError: (error) => {
                throw new errors.SquidexError({
                    message: (error as any)?.message,
                });
            },
        });
    }

    protected async _getAuthorizationHeader() {
        return `Bearer ${await core.Supplier.get(this.options.token)}`;
    }
}
