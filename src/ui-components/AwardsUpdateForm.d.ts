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
export declare type AwardsUpdateFormInputValues = {
    OPOY?: string;
    DPOY?: string;
    ROTY?: string;
    GOTY?: string;
    americanBowlMVP?: string;
    CBPOTY?: string;
    SGAward?: string;
};
export declare type AwardsUpdateFormValidationValues = {
    OPOY?: ValidationFunction<string>;
    DPOY?: ValidationFunction<string>;
    ROTY?: ValidationFunction<string>;
    GOTY?: ValidationFunction<string>;
    americanBowlMVP?: ValidationFunction<string>;
    CBPOTY?: ValidationFunction<string>;
    SGAward?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AwardsUpdateFormOverridesProps = {
    AwardsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    OPOY?: PrimitiveOverrideProps<TextFieldProps>;
    DPOY?: PrimitiveOverrideProps<TextFieldProps>;
    ROTY?: PrimitiveOverrideProps<TextFieldProps>;
    GOTY?: PrimitiveOverrideProps<TextFieldProps>;
    americanBowlMVP?: PrimitiveOverrideProps<TextFieldProps>;
    CBPOTY?: PrimitiveOverrideProps<TextFieldProps>;
    SGAward?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AwardsUpdateFormProps = React.PropsWithChildren<{
    overrides?: AwardsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    awards?: any;
    onSubmit?: (fields: AwardsUpdateFormInputValues) => AwardsUpdateFormInputValues;
    onSuccess?: (fields: AwardsUpdateFormInputValues) => void;
    onError?: (fields: AwardsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AwardsUpdateFormInputValues) => AwardsUpdateFormInputValues;
    onValidate?: AwardsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AwardsUpdateForm(props: AwardsUpdateFormProps): React.ReactElement;
