/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Squidex from "..";

export interface QueryJsonDto {
    filter?: unknown;
    fullText?: string;
    skip: number;
    take: number;
    random: number;
    top: number;
    sort?: Squidex.SortNode[];
}
