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
export declare type AwardsCreateFormInputValues = {
    OPOY?: string;
    DPOY?: string;
    ROTY?: string;
    GOTY?: string;
    americanBowlMVP?: string;
    CBPOTY?: string;
    SGAward?: string;
};
export declare type AwardsCreateFormValidationValues = {
    OPOY?: ValidationFunction<string>;
    DPOY?: ValidationFunction<string>;
    ROTY?: ValidationFunction<string>;
    GOTY?: ValidationFunction<string>;
    americanBowlMVP?: ValidationFunction<string>;
    CBPOTY?: ValidationFunction<string>;
    SGAward?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AwardsCreateFormOverridesProps = {
    AwardsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    OPOY?: PrimitiveOverrideProps<TextFieldProps>;
    DPOY?: PrimitiveOverrideProps<TextFieldProps>;
    ROTY?: PrimitiveOverrideProps<TextFieldProps>;
    GOTY?: PrimitiveOverrideProps<TextFieldProps>;
    americanBowlMVP?: PrimitiveOverrideProps<TextFieldProps>;
    CBPOTY?: PrimitiveOverrideProps<TextFieldProps>;
    SGAward?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AwardsCreateFormProps = React.PropsWithChildren<{
    overrides?: AwardsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AwardsCreateFormInputValues) => AwardsCreateFormInputValues;
    onSuccess?: (fields: AwardsCreateFormInputValues) => void;
    onError?: (fields: AwardsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AwardsCreateFormInputValues) => AwardsCreateFormInputValues;
    onValidate?: AwardsCreateFormValidationValues;
} & React.CSSProperties>;
export default function AwardsCreateForm(props: AwardsCreateFormProps): React.ReactElement;
