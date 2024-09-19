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
import { createPassingStat } from "../graphql/mutations";
const client = generateClient();
export default function PassingStatCreateForm(props) {
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
    cmp: "",
    att: "",
    yds: "",
    pct: "",
    ypa: "",
    sack: "",
    td: "",
    int: "",
    long: "",
    rating: "",
  };
  const [cmp, setCmp] = React.useState(initialValues.cmp);
  const [att, setAtt] = React.useState(initialValues.att);
  const [yds, setYds] = React.useState(initialValues.yds);
  const [pct, setPct] = React.useState(initialValues.pct);
  const [ypa, setYpa] = React.useState(initialValues.ypa);
  const [sack, setSack] = React.useState(initialValues.sack);
  const [td, setTd] = React.useState(initialValues.td);
  const [int, setInt] = React.useState(initialValues.int);
  const [long, setLong] = React.useState(initialValues.long);
  const [rating, setRating] = React.useState(initialValues.rating);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCmp(initialValues.cmp);
    setAtt(initialValues.att);
    setYds(initialValues.yds);
    setPct(initialValues.pct);
    setYpa(initialValues.ypa);
    setSack(initialValues.sack);
    setTd(initialValues.td);
    setInt(initialValues.int);
    setLong(initialValues.long);
    setRating(initialValues.rating);
    setErrors({});
  };
  const validations = {
    cmp: [],
    att: [],
    yds: [],
    pct: [],
    ypa: [],
    sack: [],
    td: [],
    int: [],
    long: [],
    rating: [],
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
          cmp,
          att,
          yds,
          pct,
          ypa,
          sack,
          td,
          int,
          long,
          rating,
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
            query: createPassingStat.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "PassingStatCreateForm")}
      {...rest}
    >
      <TextField
        label="Cmp"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={cmp}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              cmp: value,
              att,
              yds,
              pct,
              ypa,
              sack,
              td,
              int,
              long,
              rating,
            };
            const result = onChange(modelFields);
            value = result?.cmp ?? value;
          }
          if (errors.cmp?.hasError) {
            runValidationTasks("cmp", value);
          }
          setCmp(value);
        }}
        onBlur={() => runValidationTasks("cmp", cmp)}
        errorMessage={errors.cmp?.errorMessage}
        hasError={errors.cmp?.hasError}
        {...getOverrideProps(overrides, "cmp")}
      ></TextField>
      <TextField
        label="Att"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={att}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              cmp,
              att: value,
              yds,
              pct,
              ypa,
              sack,
              td,
              int,
              long,
              rating,
            };
            const result = onChange(modelFields);
            value = result?.att ?? value;
          }
          if (errors.att?.hasError) {
            runValidationTasks("att", value);
          }
          setAtt(value);
        }}
        onBlur={() => runValidationTasks("att", att)}
        errorMessage={errors.att?.errorMessage}
        hasError={errors.att?.hasError}
        {...getOverrideProps(overrides, "att")}
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
              cmp,
              att,
              yds: value,
              pct,
              ypa,
              sack,
              td,
              int,
              long,
              rating,
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
        label="Pct"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={pct}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              cmp,
              att,
              yds,
              pct: value,
              ypa,
              sack,
              td,
              int,
              long,
              rating,
            };
            const result = onChange(modelFields);
            value = result?.pct ?? value;
          }
          if (errors.pct?.hasError) {
            runValidationTasks("pct", value);
          }
          setPct(value);
        }}
        onBlur={() => runValidationTasks("pct", pct)}
        errorMessage={errors.pct?.errorMessage}
        hasError={errors.pct?.hasError}
        {...getOverrideProps(overrides, "pct")}
      ></TextField>
      <TextField
        label="Ypa"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={ypa}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              cmp,
              att,
              yds,
              pct,
              ypa: value,
              sack,
              td,
              int,
              long,
              rating,
            };
            const result = onChange(modelFields);
            value = result?.ypa ?? value;
          }
          if (errors.ypa?.hasError) {
            runValidationTasks("ypa", value);
          }
          setYpa(value);
        }}
        onBlur={() => runValidationTasks("ypa", ypa)}
        errorMessage={errors.ypa?.errorMessage}
        hasError={errors.ypa?.hasError}
        {...getOverrideProps(overrides, "ypa")}
      ></TextField>
      <TextField
        label="Sack"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={sack}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              cmp,
              att,
              yds,
              pct,
              ypa,
              sack: value,
              td,
              int,
              long,
              rating,
            };
            const result = onChange(modelFields);
            value = result?.sack ?? value;
          }
          if (errors.sack?.hasError) {
            runValidationTasks("sack", value);
          }
          setSack(value);
        }}
        onBlur={() => runValidationTasks("sack", sack)}
        errorMessage={errors.sack?.errorMessage}
        hasError={errors.sack?.hasError}
        {...getOverrideProps(overrides, "sack")}
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
              cmp,
              att,
              yds,
              pct,
              ypa,
              sack,
              td: value,
              int,
              long,
              rating,
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
        label="Int"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={int}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              cmp,
              att,
              yds,
              pct,
              ypa,
              sack,
              td,
              int: value,
              long,
              rating,
            };
            const result = onChange(modelFields);
            value = result?.int ?? value;
          }
          if (errors.int?.hasError) {
            runValidationTasks("int", value);
          }
          setInt(value);
        }}
        onBlur={() => runValidationTasks("int", int)}
        errorMessage={errors.int?.errorMessage}
        hasError={errors.int?.hasError}
        {...getOverrideProps(overrides, "int")}
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
              cmp,
              att,
              yds,
              pct,
              ypa,
              sack,
              td,
              int,
              long: value,
              rating,
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
        label="Rating"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={rating}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              cmp,
              att,
              yds,
              pct,
              ypa,
              sack,
              td,
              int,
              long,
              rating: value,
            };
            const result = onChange(modelFields);
            value = result?.rating ?? value;
          }
          if (errors.rating?.hasError) {
            runValidationTasks("rating", value);
          }
          setRating(value);
        }}
        onBlur={() => runValidationTasks("rating", rating)}
        errorMessage={errors.rating?.errorMessage}
        hasError={errors.rating?.hasError}
        {...getOverrideProps(overrides, "rating")}
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
