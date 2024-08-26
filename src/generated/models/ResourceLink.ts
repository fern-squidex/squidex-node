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
 * @interface ResourceLink
 */
export interface ResourceLink {
    /**
     * The link url.
     * @type {string}
     * @memberof ResourceLink
     */
    href: string;
    /**
     * The link method.
     * @type {string}
     * @memberof ResourceLink
     */
    method: string;
    /**
     * Additional data about the link.
     * @type {string}
     * @memberof ResourceLink
     */
    metadata?: string | null;
}


/**
 * Check if a given object implements the ResourceLink interface.
 */
export function instanceOfResourceLink(value: any): value is ResourceLink {
    if (!value) {
        return false;
    }
    if (!('href' in value) || value['href'] === undefined) return false;
    if (!('method' in value) || value['method'] === undefined) return false;
    return true;
}

export function ResourceLinkFromJSON(json: any): ResourceLink {
    return ResourceLinkFromJSONTyped(json, false);
}

export function ResourceLinkFromJSONTyped(json: any, _ignoreDiscriminator: boolean): ResourceLink {
    if (json == null) {
        return json;
    }
    return {
        
        'href': json['href'],
        'method': json['method'],
        'metadata': json['metadata'] == null ? undefined : json['metadata'],
    };
}

export function ResourceLinkToJSON(value?: ResourceLink | null, _ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'href': value['href'],
        'method': value['method'],
        'metadata': value['metadata'],
    };
}
