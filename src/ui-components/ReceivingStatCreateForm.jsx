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
import { createReceivingStat } from "../graphql/mutations";
const client = generateClient();
export default function ReceivingStatCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    rec: "",
    yds: "",
    avg: "",
    long: "",
    td: "",
    drops: "",
    yac: "",
  };
  const [rec, setRec] = React.useState(initialValues.rec);
  const [yds, setYds] = React.useState(initialValues.yds);
  const [avg, setAvg] = React.useState(initialValues.avg);
  const [long, setLong] = React.useState(initialValues.long);
  const [td, setTd] = React.useState(initialValues.td);
  const [drops, setDrops] = React.useState(initialValues.drops);
  const [yac, setYac] = React.useState(initialValues.yac);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setRec(initialValues.rec);
    setYds(initialValues.yds);
    setAvg(initialValues.avg);
    setLong(initialValues.long);
    setTd(initialValues.td);
    setDrops(initialValues.drops);
    setYac(initialValues.yac);
    setErrors({});
  };
  const validations = {
    rec: [],
    yds: [],
    avg: [],
    long: [],
    td: [],
    drops: [],
    yac: [],
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
          rec,
          yds,
          avg,
          long,
          td,
          drops,
          yac,
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
            query: createReceivingStat.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ReceivingStatCreateForm")}
      {...rest}
    >
      <TextField
        label="Rec"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={rec}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              rec: value,
              yds,
              avg,
              long,
              td,
              drops,
              yac,
            };
            const result = onChange(modelFields);
            value = result?.rec ?? value;
          }
          if (errors.rec?.hasError) {
            runValidationTasks("rec", value);
          }
          setRec(value);
        }}
        onBlur={() => runValidationTasks("rec", rec)}
        errorMessage={errors.rec?.errorMessage}
        hasError={errors.rec?.hasError}
        {...getOverrideProps(overrides, "rec")}
      ></TextField>
      <TextField
        label="Yds"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={yds}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              rec,
              yds: value,
              avg,
              long,
              td,
              drops,
              yac,
            };
            const result = onChange(modelFields);
            value = result?.yds ?? value;
          }
          if (errors.yds?.hasError) {
            runValidationTasks("yds", value);
          }
          setYds(value);
        }}
        onBlur={() => runValidationTasks("yds", yds)}
        errorMessage={errors.yds?.errorMessage}
        hasError={errors.yds?.hasError}
        {...getOverrideProps(overrides, "yds")}
      ></TextField>
      <TextField
        label="Avg"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={avg}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              rec,
              yds,
              avg: value,
              long,
              td,
              drops,
              yac,
            };
            const result = onChange(modelFields);
            value = result?.avg ?? value;
          }
          if (errors.avg?.hasError) {
            runValidationTasks("avg", value);
          }
          setAvg(value);
        }}
        onBlur={() => runValidationTasks("avg", avg)}
        errorMessage={errors.avg?.errorMessage}
        hasError={errors.avg?.hasError}
        {...getOverrideProps(overrides, "avg")}
      ></TextField>
      <TextField
        label="Long"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={long}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              rec,
              yds,
              avg,
              long: value,
              td,
              drops,
              yac,
            };
            const result = onChange(modelFields);
            value = result?.long ?? value;
          }
          if (errors.long?.hasError) {
            runValidationTasks("long", value);
          }
          setLong(value);
        }}
        onBlur={() => runValidationTasks("long", long)}
        errorMessage={errors.long?.errorMessage}
        hasError={errors.long?.hasError}
        {...getOverrideProps(overrides, "long")}
      ></TextField>
      <TextField
        label="Td"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={td}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              rec,
              yds,
              avg,
              long,
              td: value,
              drops,
              yac,
            };
            const result = onChange(modelFields);
            value = result?.td ?? value;
          }
          if (errors.td?.hasError) {
            runValidationTasks("td", value);
          }
          setTd(value);
        }}
        onBlur={() => runValidationTasks("td", td)}
        errorMessage={errors.td?.errorMessage}
        hasError={errors.td?.hasError}
        {...getOverrideProps(overrides, "td")}
      ></TextField>
      <TextField
        label="Drops"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={drops}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              rec,
              yds,
              avg,
              long,
              td,
              drops: value,
              yac,
            };
            const result = onChange(modelFields);
            value = result?.drops ?? value;
          }
          if (errors.drops?.hasError) {
            runValidationTasks("drops", value);
          }
          setDrops(value);
        }}
        onBlur={() => runValidationTasks("drops", drops)}
        errorMessage={errors.drops?.errorMessage}
        hasError={errors.drops?.hasError}
        {...getOverrideProps(overrides, "drops")}
      ></TextField>
      <TextField
        label="Yac"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={yac}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              rec,
              yds,
              avg,
              long,
              td,
              drops,
              yac: value,
            };
            const result = onChange(modelFields);
            value = result?.yac ?? value;
          }
          if (errors.yac?.hasError) {
            runValidationTasks("yac", value);
          }
          setYac(value);
        }}
        onBlur={() => runValidationTasks("yac", yac)}
        errorMessage={errors.yac?.errorMessage}
        hasError={errors.yac?.hasError}
        {...getOverrideProps(overrides, "yac")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
