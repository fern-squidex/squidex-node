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

import type { FieldPropertiesDto } from './FieldPropertiesDto';
import {
    FieldPropertiesDtoFromJSONTyped,
    FieldPropertiesDtoToJSON,
} from './FieldPropertiesDto';
import type { BooleanFieldEditor } from './BooleanFieldEditor';
import {
    BooleanFieldEditorFromJSON,
    BooleanFieldEditorToJSON,
} from './BooleanFieldEditor';

/**
 * 
 * @export
 * @interface BooleanFieldPropertiesDto
 */
export interface BooleanFieldPropertiesDto extends FieldPropertiesDto {
    /**
     * 
     * @type {{ [key: string]: boolean | null; }}
     * @memberof BooleanFieldPropertiesDto
     */
    defaultValues?: { [key: string]: boolean | null; };
    /**
     * The default value for the field value.
     * @type {boolean}
     * @memberof BooleanFieldPropertiesDto
     */
    defaultValue?: boolean | null;
    /**
     * Indicates that the inline editor is enabled for this field.
     * @type {boolean}
     * @memberof BooleanFieldPropertiesDto
     */
    inlineEditable?: boolean;
    /**
     * 
     * @type {BooleanFieldEditor}
     * @memberof BooleanFieldPropertiesDto
     */
    editor?: BooleanFieldEditor;
}




/**
 * Check if a given object implements the BooleanFieldPropertiesDto interface.
 */
export function instanceOfBooleanFieldPropertiesDto(value: any): value is BooleanFieldPropertiesDto {
    if (!value) {
        return false;
    }
    return true;
}

export function BooleanFieldPropertiesDtoFromJSON(json: any): BooleanFieldPropertiesDto {
    return BooleanFieldPropertiesDtoFromJSONTyped(json, false);
}

export function BooleanFieldPropertiesDtoFromJSONTyped(json: any, _ignoreDiscriminator: boolean): BooleanFieldPropertiesDto {
    if (json == null) {
        return json;
    }
    return {
        ...FieldPropertiesDtoFromJSONTyped(json, _ignoreDiscriminator),
        'defaultValues': json['defaultValues'] == null ? undefined : json['defaultValues'],
        'defaultValue': json['defaultValue'] == null ? undefined : json['defaultValue'],
        'inlineEditable': json['inlineEditable'] == null ? undefined : json['inlineEditable'],
        'editor': json['editor'] == null ? undefined : BooleanFieldEditorFromJSON(json['editor']),
    };
}

export function BooleanFieldPropertiesDtoToJSON(value?: BooleanFieldPropertiesDto | null, _ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        ...FieldPropertiesDtoToJSON(value, true),
        'defaultValues': value['defaultValues'],
        'defaultValue': value['defaultValue'],
        'inlineEditable': value['inlineEditable'],
        'editor': BooleanFieldEditorToJSON(value['editor']),
    };
}
