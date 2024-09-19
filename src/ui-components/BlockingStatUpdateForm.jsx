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
import { getBlockingStat } from "../graphql/queries";
import { updateBlockingStat } from "../graphql/mutations";
const client = generateClient();
export default function BlockingStatUpdateForm(props) {
  const {
    id: idProp,
    blockingStat: blockingStatModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    pancakes: "",
    sacks_allowed: "",
  };
  const [pancakes, setPancakes] = React.useState(initialValues.pancakes);
  const [sacks_allowed, setSacks_allowed] = React.useState(
    initialValues.sacks_allowed
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = blockingStatRecord
      ? { ...initialValues, ...blockingStatRecord }
      : initialValues;
    setPancakes(cleanValues.pancakes);
    setSacks_allowed(cleanValues.sacks_allowed);
    setErrors({});
  };
  const [blockingStatRecord, setBlockingStatRecord] = React.useState(
    blockingStatModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getBlockingStat.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getBlockingStat
        : blockingStatModelProp;
      setBlockingStatRecord(record);
    };
    queryData();
  }, [idProp, blockingStatModelProp]);
  React.useEffect(resetStateValues, [blockingStatRecord]);
  const validations = {
    pancakes: [],
    sacks_allowed: [],
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
          pancakes: pancakes ?? null,
          sacks_allowed: sacks_allowed ?? null,
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
            query: updateBlockingStat.replaceAll("__typename", ""),
            variables: {
              input: {
                id: blockingStatRecord.id,
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
      {...getOverrideProps(overrides, "BlockingStatUpdateForm")}
      {...rest}
    >
      <TextField
        label="Pancakes"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={pancakes}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              pancakes: value,
              sacks_allowed,
            };
            const result = onChange(modelFields);
            value = result?.pancakes ?? value;
          }
          if (errors.pancakes?.hasError) {
            runValidationTasks("pancakes", value);
          }
          setPancakes(value);
        }}
        onBlur={() => runValidationTasks("pancakes", pancakes)}
        errorMessage={errors.pancakes?.errorMessage}
        hasError={errors.pancakes?.hasError}
        {...getOverrideProps(overrides, "pancakes")}
      ></TextField>
      <TextField
        label="Sacks allowed"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={sacks_allowed}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              pancakes,
              sacks_allowed: value,
            };
            const result = onChange(modelFields);
            value = result?.sacks_allowed ?? value;
          }
          if (errors.sacks_allowed?.hasError) {
            runValidationTasks("sacks_allowed", value);
          }
          setSacks_allowed(value);
        }}
        onBlur={() => runValidationTasks("sacks_allowed", sacks_allowed)}
        errorMessage={errors.sacks_allowed?.errorMessage}
        hasError={errors.sacks_allowed?.hasError}
        {...getOverrideProps(overrides, "sacks_allowed")}
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
          isDisabled={!(idProp || blockingStatModelProp)}
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
              !(idProp || blockingStatModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
