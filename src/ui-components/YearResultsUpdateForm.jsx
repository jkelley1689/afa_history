/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getYearResults } from "../graphql/queries";
import { updateYearResults } from "../graphql/mutations";
const client = generateClient();
export default function YearResultsUpdateForm(props) {
  const {
    id: idProp,
    yearResults: yearResultsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    americanBowlChamp: "",
    americanBowlRunnerUp: "",
  };
  const [americanBowlChamp, setAmericanBowlChamp] = React.useState(
    initialValues.americanBowlChamp
  );
  const [americanBowlRunnerUp, setAmericanBowlRunnerUp] = React.useState(
    initialValues.americanBowlRunnerUp
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = yearResultsRecord
      ? { ...initialValues, ...yearResultsRecord }
      : initialValues;
    setAmericanBowlChamp(cleanValues.americanBowlChamp);
    setAmericanBowlRunnerUp(cleanValues.americanBowlRunnerUp);
    setErrors({});
  };
  const [yearResultsRecord, setYearResultsRecord] =
    React.useState(yearResultsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getYearResults.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getYearResults
        : yearResultsModelProp;
      setYearResultsRecord(record);
    };
    queryData();
  }, [idProp, yearResultsModelProp]);
  React.useEffect(resetStateValues, [yearResultsRecord]);
  const validations = {
    americanBowlChamp: [],
    americanBowlRunnerUp: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          americanBowlChamp: americanBowlChamp ?? null,
          americanBowlRunnerUp: americanBowlRunnerUp ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateYearResults.replaceAll("__typename", ""),
            variables: {
              input: {
                id: yearResultsRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "YearResultsUpdateForm")}
      {...rest}
    >
      <TextField
        label="American bowl champ"
        isRequired={false}
        isReadOnly={false}
        value={americanBowlChamp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              americanBowlChamp: value,
              americanBowlRunnerUp,
            };
            const result = onChange(modelFields);
            value = result?.americanBowlChamp ?? value;
          }
          if (errors.americanBowlChamp?.hasError) {
            runValidationTasks("americanBowlChamp", value);
          }
          setAmericanBowlChamp(value);
        }}
        onBlur={() =>
          runValidationTasks("americanBowlChamp", americanBowlChamp)
        }
        errorMessage={errors.americanBowlChamp?.errorMessage}
        hasError={errors.americanBowlChamp?.hasError}
        {...getOverrideProps(overrides, "americanBowlChamp")}
      ></TextField>
      <TextField
        label="American bowl runner up"
        isRequired={false}
        isReadOnly={false}
        value={americanBowlRunnerUp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              americanBowlChamp,
              americanBowlRunnerUp: value,
            };
            const result = onChange(modelFields);
            value = result?.americanBowlRunnerUp ?? value;
          }
          if (errors.americanBowlRunnerUp?.hasError) {
            runValidationTasks("americanBowlRunnerUp", value);
          }
          setAmericanBowlRunnerUp(value);
        }}
        onBlur={() =>
          runValidationTasks("americanBowlRunnerUp", americanBowlRunnerUp)
        }
        errorMessage={errors.americanBowlRunnerUp?.errorMessage}
        hasError={errors.americanBowlRunnerUp?.hasError}
        {...getOverrideProps(overrides, "americanBowlRunnerUp")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || yearResultsModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || yearResultsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
