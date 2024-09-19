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
export declare type RushingStatUpdateFormInputValues = {
    att?: number;
    yds?: number;
    td?: number;
    avg?: number;
    fumb?: number;
    btk?: number;
    afh?: number;
    twty_plus?: number;
    long?: number;
};
export declare type RushingStatUpdateFormValidationValues = {
    att?: ValidationFunction<number>;
    yds?: ValidationFunction<number>;
    td?: ValidationFunction<number>;
    avg?: ValidationFunction<number>;
    fumb?: ValidationFunction<number>;
    btk?: ValidationFunction<number>;
    afh?: ValidationFunction<number>;
    twty_plus?: ValidationFunction<number>;
    long?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RushingStatUpdateFormOverridesProps = {
    RushingStatUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    att?: PrimitiveOverrideProps<TextFieldProps>;
    yds?: PrimitiveOverrideProps<TextFieldProps>;
    td?: PrimitiveOverrideProps<TextFieldProps>;
    avg?: PrimitiveOverrideProps<TextFieldProps>;
    fumb?: PrimitiveOverrideProps<TextFieldProps>;
    btk?: PrimitiveOverrideProps<TextFieldProps>;
    afh?: PrimitiveOverrideProps<TextFieldProps>;
    twty_plus?: PrimitiveOverrideProps<TextFieldProps>;
    long?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RushingStatUpdateFormProps = React.PropsWithChildren<{
    overrides?: RushingStatUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    rushingStat?: any;
    onSubmit?: (fields: RushingStatUpdateFormInputValues) => RushingStatUpdateFormInputValues;
    onSuccess?: (fields: RushingStatUpdateFormInputValues) => void;
    onError?: (fields: RushingStatUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RushingStatUpdateFormInputValues) => RushingStatUpdateFormInputValues;
    onValidate?: RushingStatUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RushingStatUpdateForm(props: RushingStatUpdateFormProps): React.ReactElement;
