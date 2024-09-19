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
export declare type PlayerCreateFormInputValues = {
    fName?: string;
    lName?: string;
    age?: number;
    speed?: number;
    acceleration?: number;
    strength?: number;
    awareness?: number;
    agility?: number;
    catch?: number;
    carry?: number;
    jump?: number;
    breakTackle?: number;
    tackle?: number;
    throwPower?: number;
    throwAcc?: number;
    passBlock?: number;
    runBlock?: number;
    kickPower?: number;
    kickAcc?: number;
    importance?: number;
    stamina?: number;
    kickReturn?: number;
    injury?: number;
    toughness?: number;
    ego?: number;
    position?: string;
    wgt?: number;
    height?: number;
    playerTendency?: string;
    roleWeapon?: string[];
    year?: string;
    team?: string;
};
export declare type PlayerCreateFormValidationValues = {
    fName?: ValidationFunction<string>;
    lName?: ValidationFunction<string>;
    age?: ValidationFunction<number>;
    speed?: ValidationFunction<number>;
    acceleration?: ValidationFunction<number>;
    strength?: ValidationFunction<number>;
    awareness?: ValidationFunction<number>;
    agility?: ValidationFunction<number>;
    catch?: ValidationFunction<number>;
    carry?: ValidationFunction<number>;
    jump?: ValidationFunction<number>;
    breakTackle?: ValidationFunction<number>;
    tackle?: ValidationFunction<number>;
    throwPower?: ValidationFunction<number>;
    throwAcc?: ValidationFunction<number>;
    passBlock?: ValidationFunction<number>;
    runBlock?: ValidationFunction<number>;
    kickPower?: ValidationFunction<number>;
    kickAcc?: ValidationFunction<number>;
    importance?: ValidationFunction<number>;
    stamina?: ValidationFunction<number>;
    kickReturn?: ValidationFunction<number>;
    injury?: ValidationFunction<number>;
    toughness?: ValidationFunction<number>;
    ego?: ValidationFunction<number>;
    position?: ValidationFunction<string>;
    wgt?: ValidationFunction<number>;
    height?: ValidationFunction<number>;
    playerTendency?: ValidationFunction<string>;
    roleWeapon?: ValidationFunction<string>;
    year?: ValidationFunction<string>;
    team?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlayerCreateFormOverridesProps = {
    PlayerCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    fName?: PrimitiveOverrideProps<TextFieldProps>;
    lName?: PrimitiveOverrideProps<TextFieldProps>;
    age?: PrimitiveOverrideProps<TextFieldProps>;
    speed?: PrimitiveOverrideProps<TextFieldProps>;
    acceleration?: PrimitiveOverrideProps<TextFieldProps>;
    strength?: PrimitiveOverrideProps<TextFieldProps>;
    awareness?: PrimitiveOverrideProps<TextFieldProps>;
    agility?: PrimitiveOverrideProps<TextFieldProps>;
    catch?: PrimitiveOverrideProps<TextFieldProps>;
    carry?: PrimitiveOverrideProps<TextFieldProps>;
    jump?: PrimitiveOverrideProps<TextFieldProps>;
    breakTackle?: PrimitiveOverrideProps<TextFieldProps>;
    tackle?: PrimitiveOverrideProps<TextFieldProps>;
    throwPower?: PrimitiveOverrideProps<TextFieldProps>;
    throwAcc?: PrimitiveOverrideProps<TextFieldProps>;
    passBlock?: PrimitiveOverrideProps<TextFieldProps>;
    runBlock?: PrimitiveOverrideProps<TextFieldProps>;
    kickPower?: PrimitiveOverrideProps<TextFieldProps>;
    kickAcc?: PrimitiveOverrideProps<TextFieldProps>;
    importance?: PrimitiveOverrideProps<TextFieldProps>;
    stamina?: PrimitiveOverrideProps<TextFieldProps>;
    kickReturn?: PrimitiveOverrideProps<TextFieldProps>;
    injury?: PrimitiveOverrideProps<TextFieldProps>;
    toughness?: PrimitiveOverrideProps<TextFieldProps>;
    ego?: PrimitiveOverrideProps<TextFieldProps>;
    position?: PrimitiveOverrideProps<TextFieldProps>;
    wgt?: PrimitiveOverrideProps<TextFieldProps>;
    height?: PrimitiveOverrideProps<TextFieldProps>;
    playerTendency?: PrimitiveOverrideProps<TextFieldProps>;
    roleWeapon?: PrimitiveOverrideProps<TextFieldProps>;
    year?: PrimitiveOverrideProps<TextFieldProps>;
    team?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PlayerCreateFormProps = React.PropsWithChildren<{
    overrides?: PlayerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PlayerCreateFormInputValues) => PlayerCreateFormInputValues;
    onSuccess?: (fields: PlayerCreateFormInputValues) => void;
    onError?: (fields: PlayerCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PlayerCreateFormInputValues) => PlayerCreateFormInputValues;
    onValidate?: PlayerCreateFormValidationValues;
} & React.CSSProperties>;
export default function PlayerCreateForm(props: PlayerCreateFormProps): React.ReactElement;
