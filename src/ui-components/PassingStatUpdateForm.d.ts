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
export declare type PassingStatUpdateFormInputValues = {
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
export declare type PassingStatUpdateFormValidationValues = {
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
export declare type PassingStatUpdateFormOverridesProps = {
    PassingStatUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type PassingStatUpdateFormProps = React.PropsWithChildren<{
    overrides?: PassingStatUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    passingStat?: any;
    onSubmit?: (fields: PassingStatUpdateFormInputValues) => PassingStatUpdateFormInputValues;
    onSuccess?: (fields: PassingStatUpdateFormInputValues) => void;
    onError?: (fields: PassingStatUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PassingStatUpdateFormInputValues) => PassingStatUpdateFormInputValues;
    onValidate?: PassingStatUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PassingStatUpdateForm(props: PassingStatUpdateFormProps): React.ReactElement;
