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

import type { SchemaPropertiesDto } from './SchemaPropertiesDto';
import {
    SchemaPropertiesDtoFromJSON,
    SchemaPropertiesDtoToJSON,
} from './SchemaPropertiesDto';
import type { SchemaScriptsDto } from './SchemaScriptsDto';
import {
    SchemaScriptsDtoFromJSON,
    SchemaScriptsDtoToJSON,
} from './SchemaScriptsDto';
import type { UpsertSchemaFieldDto } from './UpsertSchemaFieldDto';
import {
    UpsertSchemaFieldDtoFromJSON,
    UpsertSchemaFieldDtoToJSON,
} from './UpsertSchemaFieldDto';
import type { FieldRuleDto } from './FieldRuleDto';
import {
    FieldRuleDtoFromJSON,
    FieldRuleDtoToJSON,
} from './FieldRuleDto';
import type { SchemaType } from './SchemaType';
import {
    SchemaTypeFromJSON,
    SchemaTypeToJSON,
} from './SchemaType';

/**
 * 
 * @export
 * @interface CreateSchemaDto
 */
export interface CreateSchemaDto {
    /**
     * 
     * @type {SchemaPropertiesDto}
     * @memberof CreateSchemaDto
     */
    properties?: SchemaPropertiesDto;
    /**
     * 
     * @type {SchemaScriptsDto}
     * @memberof CreateSchemaDto
     */
    scripts?: SchemaScriptsDto;
    /**
     * The names of the fields that should be used in references.
     * @type {Array<string>}
     * @memberof CreateSchemaDto
     */
    fieldsInReferences?: Array<string> | null;
    /**
     * The names of the fields that should be shown in lists, including meta fields.
     * @type {Array<string>}
     * @memberof CreateSchemaDto
     */
    fieldsInLists?: Array<string> | null;
    /**
     * Optional fields.
     * @type {Array<UpsertSchemaFieldDto>}
     * @memberof CreateSchemaDto
     */
    fields?: Array<UpsertSchemaFieldDto> | null;
    /**
     * The optional preview urls.
     * @type {{ [key: string]: string; }}
     * @memberof CreateSchemaDto
     */
    previewUrls?: { [key: string]: string; } | null;
    /**
     * The optional field Rules.
     * @type {Array<FieldRuleDto>}
     * @memberof CreateSchemaDto
     */
    fieldRules?: Array<FieldRuleDto> | null;
    /**
     * The category.
     * @type {string}
     * @memberof CreateSchemaDto
     */
    category?: string | null;
    /**
     * Set it to true to autopublish the schema.
     * @type {boolean}
     * @memberof CreateSchemaDto
     */
    isPublished?: boolean;
    /**
     * The name of the schema.
     * @type {string}
     * @memberof CreateSchemaDto
     */
    name: string;
    /**
     * 
     * @type {SchemaType}
     * @memberof CreateSchemaDto
     */
    type?: SchemaType;
    /**
     * Set to true to allow a single content item only.
     * @type {boolean}
     * @memberof CreateSchemaDto
     * @deprecated
     */
    isSingleton?: boolean;
}




/**
 * Check if a given object implements the CreateSchemaDto interface.
 */
export function instanceOfCreateSchemaDto(value: any): value is CreateSchemaDto {
    if (!value) {
        return false;
    }
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function CreateSchemaDtoFromJSON(json: any): CreateSchemaDto {
    return CreateSchemaDtoFromJSONTyped(json, false);
}

export function CreateSchemaDtoFromJSONTyped(json: any, _ignoreDiscriminator: boolean): CreateSchemaDto {
    if (json == null) {
        return json;
    }
    return {
        
        'properties': json['properties'] == null ? undefined : SchemaPropertiesDtoFromJSON(json['properties']),
        'scripts': json['scripts'] == null ? undefined : SchemaScriptsDtoFromJSON(json['scripts']),
        'fieldsInReferences': json['fieldsInReferences'] == null ? undefined : json['fieldsInReferences'],
        'fieldsInLists': json['fieldsInLists'] == null ? undefined : json['fieldsInLists'],
        'fields': json['fields'] == null ? undefined : ((json['fields'] as Array<any>).map(UpsertSchemaFieldDtoFromJSON)),
        'previewUrls': json['previewUrls'] == null ? undefined : json['previewUrls'],
        'fieldRules': json['fieldRules'] == null ? undefined : ((json['fieldRules'] as Array<any>).map(FieldRuleDtoFromJSON)),
        'category': json['category'] == null ? undefined : json['category'],
        'isPublished': json['isPublished'] == null ? undefined : json['isPublished'],
        'name': json['name'],
        'type': json['type'] == null ? undefined : SchemaTypeFromJSON(json['type']),
        'isSingleton': json['isSingleton'] == null ? undefined : json['isSingleton'],
    };
}

export function CreateSchemaDtoToJSON(value?: CreateSchemaDto | null, _ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'properties': SchemaPropertiesDtoToJSON(value['properties']),
        'scripts': SchemaScriptsDtoToJSON(value['scripts']),
        'fieldsInReferences': value['fieldsInReferences'],
        'fieldsInLists': value['fieldsInLists'],
        'fields': value['fields'] == null ? undefined : ((value['fields'] as Array<any>).map(x => UpsertSchemaFieldDtoToJSON(x))),
        'previewUrls': value['previewUrls'],
        'fieldRules': value['fieldRules'] == null ? undefined : ((value['fieldRules'] as Array<any>).map(x => FieldRuleDtoToJSON(x))),
        'category': value['category'],
        'isPublished': value['isPublished'],
        'name': value['name'],
        'type': SchemaTypeToJSON(value['type']),
        'isSingleton': value['isSingleton'],
    };
}
