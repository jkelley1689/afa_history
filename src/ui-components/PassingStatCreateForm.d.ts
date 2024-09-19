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
export declare type PassingStatCreateFormInputValues = {
    cmp?: number;
    att?: number;
    yds?: number;
    pct?: number;
    ypa?: number;
    sack?: number;
    td?: number;
    int?: number;
    long?: number;
    rating?: number;
};
export declare type PassingStatCreateFormValidationValues = {
    cmp?: ValidationFunction<number>;
    att?: ValidationFunction<number>;
    yds?: ValidationFunction<number>;
    pct?: ValidationFunction<number>;
    ypa?: ValidationFunction<number>;
    sack?: ValidationFunction<number>;
    td?: ValidationFunction<number>;
    int?: ValidationFunction<number>;
    long?: ValidationFunction<number>;
    rating?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PassingStatCreateFormOverridesProps = {
    PassingStatCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    cmp?: PrimitiveOverrideProps<TextFieldProps>;
    att?: PrimitiveOverrideProps<TextFieldProps>;
    yds?: PrimitiveOverrideProps<TextFieldProps>;
    pct?: PrimitiveOverrideProps<TextFieldProps>;
    ypa?: PrimitiveOverrideProps<TextFieldProps>;
    sack?: PrimitiveOverrideProps<TextFieldProps>;
    td?: PrimitiveOverrideProps<TextFieldProps>;
    int?: PrimitiveOverrideProps<TextFieldProps>;
    long?: PrimitiveOverrideProps<TextFieldProps>;
    rating?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PassingStatCreateFormProps = React.PropsWithChildren<{
    overrides?: PassingStatCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PassingStatCreateFormInputValues) => PassingStatCreateFormInputValues;
    onSuccess?: (fields: PassingStatCreateFormInputValues) => void;
    onError?: (fields: PassingStatCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PassingStatCreateFormInputValues) => PassingStatCreateFormInputValues;
    onValidate?: PassingStatCreateFormValidationValues;
} & React.CSSProperties>;
export default function PassingStatCreateForm(props: PassingStatCreateFormProps): React.ReactElement;
