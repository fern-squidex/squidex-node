/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Squidex from "../../..";
import * as serializers from "../../../../serialization";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace Translations {
    interface Options {
        environment?: environments.SquidexEnvironment | string;
        appName: string;
        token: core.Supplier<core.BearerToken>;
    }
}

export class Translations {
    constructor(protected readonly options: Translations.Options) {}

    /**
     * @throws {Squidex.BadRequestError}
     * @throws {Squidex.InternalServerError}
     */
    public async postTranslation(request: Squidex.TranslateDto): Promise<Squidex.TranslationDto> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SquidexEnvironment.Default,
                `api/apps/${this.options.appName}/translations`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@squidex/squidex",
                "X-Fern-SDK-Version": "0.0.24",
            },
            contentType: "application/json",
            body: await serializers.TranslateDto.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.TranslationDto.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Squidex.BadRequestError(
                        await serializers.ErrorDto.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 500:
                    throw new Squidex.InternalServerError(
                        await serializers.ErrorDto.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
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

    protected async _getAuthorizationHeader() {
        const bearer = await core.Supplier.get(this.options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
