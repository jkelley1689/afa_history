/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LeagueLeadersCreateFormInputValues = {
    passingYards?: number;
    passingTDs?: number;
    completions?: number;
    passingAttempts?: number;
    qbInts?: number;
    mostSacked?: number;
    rushingYards?: number;
    rushingTDs?: number;
    rushingAvg?: number;
    yardsAFH?: number;
    rushingFumbles?: number;
    catches?: number;
    recYards?: number;
    recTDs?: number;
    yardsAfterCatch?: number;
    drops?: number;
    pancakes?: number;
    mostSacksAllowed?: number;
    tackles?: number;
    defTDs?: number;
    tfls?: number;
    forcedFumbles?: number;
    sacks?: number;
    passDeflections?: number;
    ints?: number;
    catchAllowed?: number;
};
export declare type LeagueLeadersCreateFormValidationValues = {
    passingYards?: ValidationFunction<number>;
    passingTDs?: ValidationFunction<number>;
    completions?: ValidationFunction<number>;
    passingAttempts?: ValidationFunction<number>;
    qbInts?: ValidationFunction<number>;
    mostSacked?: ValidationFunction<number>;
    rushingYards?: ValidationFunction<number>;
    rushingTDs?: ValidationFunction<number>;
    rushingAvg?: ValidationFunction<number>;
    yardsAFH?: ValidationFunction<number>;
    rushingFumbles?: ValidationFunction<number>;
    catches?: ValidationFunction<number>;
    recYards?: ValidationFunction<number>;
    recTDs?: ValidationFunction<number>;
    yardsAfterCatch?: ValidationFunction<number>;
    drops?: ValidationFunction<number>;
    pancakes?: ValidationFunction<number>;
    mostSacksAllowed?: ValidationFunction<number>;
    tackles?: ValidationFunction<number>;
    defTDs?: ValidationFunction<number>;
    tfls?: ValidationFunction<number>;
    forcedFumbles?: ValidationFunction<number>;
    sacks?: ValidationFunction<number>;
    passDeflections?: ValidationFunction<number>;
    ints?: ValidationFunction<number>;
    catchAllowed?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LeagueLeadersCreateFormOverridesProps = {
    LeagueLeadersCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    passingYards?: PrimitiveOverrideProps<TextFieldProps>;
    passingTDs?: PrimitiveOverrideProps<TextFieldProps>;
    completions?: PrimitiveOverrideProps<TextFieldProps>;
    passingAttempts?: PrimitiveOverrideProps<TextFieldProps>;
    qbInts?: PrimitiveOverrideProps<TextFieldProps>;
    mostSacked?: PrimitiveOverrideProps<TextFieldProps>;
    rushingYards?: PrimitiveOverrideProps<TextFieldProps>;
    rushingTDs?: PrimitiveOverrideProps<TextFieldProps>;
    rushingAvg?: PrimitiveOverrideProps<TextFieldProps>;
    yardsAFH?: PrimitiveOverrideProps<TextFieldProps>;
    rushingFumbles?: PrimitiveOverrideProps<TextFieldProps>;
    catches?: PrimitiveOverrideProps<TextFieldProps>;
    recYards?: PrimitiveOverrideProps<TextFieldProps>;
    recTDs?: PrimitiveOverrideProps<TextFieldProps>;
    yardsAfterCatch?: PrimitiveOverrideProps<TextFieldProps>;
    drops?: PrimitiveOverrideProps<TextFieldProps>;
    pancakes?: PrimitiveOverrideProps<TextFieldProps>;
    mostSacksAllowed?: PrimitiveOverrideProps<TextFieldProps>;
    tackles?: PrimitiveOverrideProps<TextFieldProps>;
    defTDs?: PrimitiveOverrideProps<TextFieldProps>;
    tfls?: PrimitiveOverrideProps<TextFieldProps>;
    forcedFumbles?: PrimitiveOverrideProps<TextFieldProps>;
    sacks?: PrimitiveOverrideProps<TextFieldProps>;
    passDeflections?: PrimitiveOverrideProps<TextFieldProps>;
    ints?: PrimitiveOverrideProps<TextFieldProps>;
    catchAllowed?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LeagueLeadersCreateFormProps = React.PropsWithChildren<{
    overrides?: LeagueLeadersCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LeagueLeadersCreateFormInputValues) => LeagueLeadersCreateFormInputValues;
    onSuccess?: (fields: LeagueLeadersCreateFormInputValues) => void;
    onError?: (fields: LeagueLeadersCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LeagueLeadersCreateFormInputValues) => LeagueLeadersCreateFormInputValues;
    onValidate?: LeagueLeadersCreateFormValidationValues;
} & React.CSSProperties>;
export default function LeagueLeadersCreateForm(props: LeagueLeadersCreateFormProps): React.ReactElement;
