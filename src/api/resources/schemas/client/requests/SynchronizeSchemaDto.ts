/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface SynchronizeSchemaDto {
    /** True, when fields should not be deleted. */
    noFieldDeletion?: boolean;
    /** True, when fields with different types should not be recreated. */
    noFieldRecreation?: boolean;
}
