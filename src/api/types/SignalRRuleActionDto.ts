/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Squidex from "..";

export interface SignalRRuleActionDto {
    /** The connection string to the Azure SignalR. */
    connectionString?: string;
    /** The name of the hub. */
    hubName?: string;
    action?: Squidex.ActionTypeEnum;
    /** Set the Name of the hub method received by the customer. */
    methodName?: string;
    /** Define target users or groups by id or name. One item per line. Not needed for Broadcast action. */
    target?: string;
    /** Leave it empty to use the full event as body. */
    payload?: string;
}