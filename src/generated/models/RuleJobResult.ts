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


/**
 * 
 * @export
 */
export const RuleJobResult = {
    Pending: 'Pending',
    Success: 'Success',
    Retry: 'Retry',
    Failed: 'Failed',
    Cancelled: 'Cancelled'
} as const;
export type RuleJobResult = typeof RuleJobResult[keyof typeof RuleJobResult];


export function instanceOfRuleJobResult(value: any): boolean {
    for (const key in RuleJobResult) {
        if (Object.prototype.hasOwnProperty.call(RuleJobResult, key)) {
            if (RuleJobResult[key as keyof typeof RuleJobResult] === value) {
                return true;
            }
        }
    }
    return false;
}

export function RuleJobResultFromJSON(json: any): RuleJobResult {
    return RuleJobResultFromJSONTyped(json, false);
}

export function RuleJobResultFromJSONTyped(json: any, _ignoreDiscriminator: boolean): RuleJobResult {
    return json as RuleJobResult;
}

export function RuleJobResultToJSON(value?: RuleJobResult | null): any {
    return value as any;
}
