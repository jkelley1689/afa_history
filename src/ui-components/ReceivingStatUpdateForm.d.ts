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
export declare type ReceivingStatUpdateFormInputValues = {
    rec?: number;
    yds?: number;
    avg?: number;
    long?: number;
    td?: number;
    drops?: number;
    yac?: number;
};
export declare type ReceivingStatUpdateFormValidationValues = {
    rec?: ValidationFunction<number>;
    yds?: ValidationFunction<number>;
    avg?: ValidationFunction<number>;
    long?: ValidationFunction<number>;
    td?: ValidationFunction<number>;
    drops?: ValidationFunction<number>;
    yac?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReceivingStatUpdateFormOverridesProps = {
    ReceivingStatUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    rec?: PrimitiveOverrideProps<TextFieldProps>;
    yds?: PrimitiveOverrideProps<TextFieldProps>;
    avg?: PrimitiveOverrideProps<TextFieldProps>;
    long?: PrimitiveOverrideProps<TextFieldProps>;
    td?: PrimitiveOverrideProps<TextFieldProps>;
    drops?: PrimitiveOverrideProps<TextFieldProps>;
    yac?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReceivingStatUpdateFormProps = React.PropsWithChildren<{
    overrides?: ReceivingStatUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    receivingStat?: any;
    onSubmit?: (fields: ReceivingStatUpdateFormInputValues) => ReceivingStatUpdateFormInputValues;
    onSuccess?: (fields: ReceivingStatUpdateFormInputValues) => void;
    onError?: (fields: ReceivingStatUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReceivingStatUpdateFormInputValues) => ReceivingStatUpdateFormInputValues;
    onValidate?: ReceivingStatUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ReceivingStatUpdateForm(props: ReceivingStatUpdateFormProps): React.ReactElement;
