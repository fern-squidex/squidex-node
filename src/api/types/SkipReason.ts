/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export type SkipReason =
    | "None"
    | "ConditionDoesNotMatch"
    | "ConditionPrecheckDoesNotMatch"
    | "Disabled"
    | "Failed"
    | "FromRule"
    | "NoAction"
    | "NoTrigger"
    | "TooOld"
    | "WrongEvent"
    | "WrongEventForTrigger";

export const SkipReason = {
    None: "None",
    ConditionDoesNotMatch: "ConditionDoesNotMatch",
    ConditionPrecheckDoesNotMatch: "ConditionPrecheckDoesNotMatch",
    Disabled: "Disabled",
    Failed: "Failed",
    FromRule: "FromRule",
    NoAction: "NoAction",
    NoTrigger: "NoTrigger",
    TooOld: "TooOld",
    WrongEvent: "WrongEvent",
    WrongEventForTrigger: "WrongEventForTrigger",
} as const;