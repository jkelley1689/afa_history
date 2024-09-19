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
export declare type DefensiveStatUpdateFormInputValues = {
    tackles?: number;
    tfl?: number;
    sacks?: number;
    ff?: number;
    td?: number;
    int?: number;
    pass_deflection?: number;
    catch_allowed?: number;
    deflection_rate?: number;
};
export declare type DefensiveStatUpdateFormValidationValues = {
    tackles?: ValidationFunction<number>;
    tfl?: ValidationFunction<number>;
    sacks?: ValidationFunction<number>;
    ff?: ValidationFunction<number>;
    td?: ValidationFunction<number>;
    int?: ValidationFunction<number>;
    pass_deflection?: ValidationFunction<number>;
    catch_allowed?: ValidationFunction<number>;
    deflection_rate?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DefensiveStatUpdateFormOverridesProps = {
    DefensiveStatUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    tackles?: PrimitiveOverrideProps<TextFieldProps>;
    tfl?: PrimitiveOverrideProps<TextFieldProps>;
    sacks?: PrimitiveOverrideProps<TextFieldProps>;
    ff?: PrimitiveOverrideProps<TextFieldProps>;
    td?: PrimitiveOverrideProps<TextFieldProps>;
    int?: PrimitiveOverrideProps<TextFieldProps>;
    pass_deflection?: PrimitiveOverrideProps<TextFieldProps>;
    catch_allowed?: PrimitiveOverrideProps<TextFieldProps>;
    deflection_rate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DefensiveStatUpdateFormProps = React.PropsWithChildren<{
    overrides?: DefensiveStatUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    defensiveStat?: any;
    onSubmit?: (fields: DefensiveStatUpdateFormInputValues) => DefensiveStatUpdateFormInputValues;
    onSuccess?: (fields: DefensiveStatUpdateFormInputValues) => void;
    onError?: (fields: DefensiveStatUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DefensiveStatUpdateFormInputValues) => DefensiveStatUpdateFormInputValues;
    onValidate?: DefensiveStatUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DefensiveStatUpdateForm(props: DefensiveStatUpdateFormProps): React.ReactElement;
