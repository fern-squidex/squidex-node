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
 * @interface EditorDto
 */
export interface EditorDto {
    /**
     * The name of the editor.
     * @type {string}
     * @memberof EditorDto
     */
    name: string;
    /**
     * The url to the editor.
     * @type {string}
     * @memberof EditorDto
     */
    url: string;
}


/**
 * Check if a given object implements the EditorDto interface.
 */
export function instanceOfEditorDto(value: any): value is EditorDto {
    if (!value) {
        return false;
    }
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('url' in value) || value['url'] === undefined) return false;
    return true;
}

export function EditorDtoFromJSON(json: any): EditorDto {
    return EditorDtoFromJSONTyped(json, false);
}

export function EditorDtoFromJSONTyped(json: any, _ignoreDiscriminator: boolean): EditorDto {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'url': json['url'],
    };
}

export function EditorDtoToJSON(value?: EditorDto | null, _ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'url': value['url'],
    };
}
