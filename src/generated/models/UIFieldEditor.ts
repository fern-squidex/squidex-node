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
export const UIFieldEditor = {
    Separator: 'Separator'
} as const;
export type UIFieldEditor = typeof UIFieldEditor[keyof typeof UIFieldEditor];


export function instanceOfUIFieldEditor(value: any): boolean {
    for (const key in UIFieldEditor) {
        if (Object.prototype.hasOwnProperty.call(UIFieldEditor, key)) {
            if (UIFieldEditor[key as keyof typeof UIFieldEditor] === value) {
                return true;
            }
        }
    }
    return false;
}

export function UIFieldEditorFromJSON(json: any): UIFieldEditor {
    return UIFieldEditorFromJSONTyped(json, false);
}

export function UIFieldEditorFromJSONTyped(json: any, _ignoreDiscriminator: boolean): UIFieldEditor {
    return json as UIFieldEditor;
}

export function UIFieldEditorToJSON(value?: UIFieldEditor | null): any {
    return value as any;
}
