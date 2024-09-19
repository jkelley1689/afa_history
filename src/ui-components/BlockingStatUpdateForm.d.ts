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
export declare type BlockingStatUpdateFormInputValues = {
    pancakes?: number;
    sacks_allowed?: number;
};
export declare type BlockingStatUpdateFormValidationValues = {
    pancakes?: ValidationFunction<number>;
    sacks_allowed?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BlockingStatUpdateFormOverridesProps = {
    BlockingStatUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    pancakes?: PrimitiveOverrideProps<TextFieldProps>;
    sacks_allowed?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BlockingStatUpdateFormProps = React.PropsWithChildren<{
    overrides?: BlockingStatUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    blockingStat?: any;
    onSubmit?: (fields: BlockingStatUpdateFormInputValues) => BlockingStatUpdateFormInputValues;
    onSuccess?: (fields: BlockingStatUpdateFormInputValues) => void;
    onError?: (fields: BlockingStatUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BlockingStatUpdateFormInputValues) => BlockingStatUpdateFormInputValues;
    onValidate?: BlockingStatUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BlockingStatUpdateForm(props: BlockingStatUpdateFormProps): React.ReactElement;
