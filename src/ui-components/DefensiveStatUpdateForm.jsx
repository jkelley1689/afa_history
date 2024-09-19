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
import { getDefensiveStat } from "../graphql/queries";
import { updateDefensiveStat } from "../graphql/mutations";
const client = generateClient();
export default function DefensiveStatUpdateForm(props) {
  const {
    id: idProp,
    defensiveStat: defensiveStatModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    tackles: "",
    tfl: "",
    sacks: "",
    ff: "",
    td: "",
    int: "",
    pass_deflection: "",
    catch_allowed: "",
    deflection_rate: "",
  };
  const [tackles, setTackles] = React.useState(initialValues.tackles);
  const [tfl, setTfl] = React.useState(initialValues.tfl);
  const [sacks, setSacks] = React.useState(initialValues.sacks);
  const [ff, setFf] = React.useState(initialValues.ff);
  const [td, setTd] = React.useState(initialValues.td);
  const [int, setInt] = React.useState(initialValues.int);
  const [pass_deflection, setPass_deflection] = React.useState(
    initialValues.pass_deflection
  );
  const [catch_allowed, setCatch_allowed] = React.useState(
    initialValues.catch_allowed
  );
  const [deflection_rate, setDeflection_rate] = React.useState(
    initialValues.deflection_rate
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = defensiveStatRecord
      ? { ...initialValues, ...defensiveStatRecord }
      : initialValues;
    setTackles(cleanValues.tackles);
    setTfl(cleanValues.tfl);
    setSacks(cleanValues.sacks);
    setFf(cleanValues.ff);
    setTd(cleanValues.td);
    setInt(cleanValues.int);
    setPass_deflection(cleanValues.pass_deflection);
    setCatch_allowed(cleanValues.catch_allowed);
    setDeflection_rate(cleanValues.deflection_rate);
    setErrors({});
  };
  const [defensiveStatRecord, setDefensiveStatRecord] = React.useState(
    defensiveStatModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getDefensiveStat.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getDefensiveStat
        : defensiveStatModelProp;
      setDefensiveStatRecord(record);
    };
    queryData();
  }, [idProp, defensiveStatModelProp]);
  React.useEffect(resetStateValues, [defensiveStatRecord]);
  const validations = {
    tackles: [],
    tfl: [],
    sacks: [],
    ff: [],
    td: [],
    int: [],
    pass_deflection: [],
    catch_allowed: [],
    deflection_rate: [],
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
          tackles: tackles ?? null,
          tfl: tfl ?? null,
          sacks: sacks ?? null,
          ff: ff ?? null,
          td: td ?? null,
          int: int ?? null,
          pass_deflection: pass_deflection ?? null,
          catch_allowed: catch_allowed ?? null,
          deflection_rate: deflection_rate ?? null,
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
            query: updateDefensiveStat.replaceAll("__typename", ""),
            variables: {
              input: {
                id: defensiveStatRecord.id,
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
      {...getOverrideProps(overrides, "DefensiveStatUpdateForm")}
      {...rest}
    >
      <TextField
        label="Tackles"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={tackles}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              tackles: value,
              tfl,
              sacks,
              ff,
              td,
              int,
              pass_deflection,
              catch_allowed,
              deflection_rate,
            };
            const result = onChange(modelFields);
            value = result?.tackles ?? value;
          }
          if (errors.tackles?.hasError) {
            runValidationTasks("tackles", value);
          }
          setTackles(value);
        }}
        onBlur={() => runValidationTasks("tackles", tackles)}
        errorMessage={errors.tackles?.errorMessage}
        hasError={errors.tackles?.hasError}
        {...getOverrideProps(overrides, "tackles")}
      ></TextField>
      <TextField
        label="Tfl"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={tfl}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              tackles,
              tfl: value,
              sacks,
              ff,
              td,
              int,
              pass_deflection,
              catch_allowed,
              deflection_rate,
            };
            const result = onChange(modelFields);
            value = result?.tfl ?? value;
          }
          if (errors.tfl?.hasError) {
            runValidationTasks("tfl", value);
          }
          setTfl(value);
        }}
        onBlur={() => runValidationTasks("tfl", tfl)}
        errorMessage={errors.tfl?.errorMessage}
        hasError={errors.tfl?.hasError}
        {...getOverrideProps(overrides, "tfl")}
      ></TextField>
      <TextField
        label="Sacks"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={sacks}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              tackles,
              tfl,
              sacks: value,
              ff,
              td,
              int,
              pass_deflection,
              catch_allowed,
              deflection_rate,
            };
            const result = onChange(modelFields);
            value = result?.sacks ?? value;
          }
          if (errors.sacks?.hasError) {
            runValidationTasks("sacks", value);
          }
          setSacks(value);
        }}
        onBlur={() => runValidationTasks("sacks", sacks)}
        errorMessage={errors.sacks?.errorMessage}
        hasError={errors.sacks?.hasError}
        {...getOverrideProps(overrides, "sacks")}
      ></TextField>
      <TextField
        label="Ff"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={ff}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              tackles,
              tfl,
              sacks,
              ff: value,
              td,
              int,
              pass_deflection,
              catch_allowed,
              deflection_rate,
            };
            const result = onChange(modelFields);
            value = result?.ff ?? value;
          }
          if (errors.ff?.hasError) {
            runValidationTasks("ff", value);
          }
          setFf(value);
        }}
        onBlur={() => runValidationTasks("ff", ff)}
        errorMessage={errors.ff?.errorMessage}
        hasError={errors.ff?.hasError}
        {...getOverrideProps(overrides, "ff")}
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
              tackles,
              tfl,
              sacks,
              ff,
              td: value,
              int,
              pass_deflection,
              catch_allowed,
              deflection_rate,
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
              tackles,
              tfl,
              sacks,
              ff,
              td,
              int: value,
              pass_deflection,
              catch_allowed,
              deflection_rate,
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
        label="Pass deflection"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={pass_deflection}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              tackles,
              tfl,
              sacks,
              ff,
              td,
              int,
              pass_deflection: value,
              catch_allowed,
              deflection_rate,
            };
            const result = onChange(modelFields);
            value = result?.pass_deflection ?? value;
          }
          if (errors.pass_deflection?.hasError) {
            runValidationTasks("pass_deflection", value);
          }
          setPass_deflection(value);
        }}
        onBlur={() => runValidationTasks("pass_deflection", pass_deflection)}
        errorMessage={errors.pass_deflection?.errorMessage}
        hasError={errors.pass_deflection?.hasError}
        {...getOverrideProps(overrides, "pass_deflection")}
      ></TextField>
      <TextField
        label="Catch allowed"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={catch_allowed}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              tackles,
              tfl,
              sacks,
              ff,
              td,
              int,
              pass_deflection,
              catch_allowed: value,
              deflection_rate,
            };
            const result = onChange(modelFields);
            value = result?.catch_allowed ?? value;
          }
          if (errors.catch_allowed?.hasError) {
            runValidationTasks("catch_allowed", value);
          }
          setCatch_allowed(value);
        }}
        onBlur={() => runValidationTasks("catch_allowed", catch_allowed)}
        errorMessage={errors.catch_allowed?.errorMessage}
        hasError={errors.catch_allowed?.hasError}
        {...getOverrideProps(overrides, "catch_allowed")}
      ></TextField>
      <TextField
        label="Deflection rate"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={deflection_rate}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              tackles,
              tfl,
              sacks,
              ff,
              td,
              int,
              pass_deflection,
              catch_allowed,
              deflection_rate: value,
            };
            const result = onChange(modelFields);
            value = result?.deflection_rate ?? value;
          }
          if (errors.deflection_rate?.hasError) {
            runValidationTasks("deflection_rate", value);
          }
          setDeflection_rate(value);
        }}
        onBlur={() => runValidationTasks("deflection_rate", deflection_rate)}
        errorMessage={errors.deflection_rate?.errorMessage}
        hasError={errors.deflection_rate?.hasError}
        {...getOverrideProps(overrides, "deflection_rate")}
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
          isDisabled={!(idProp || defensiveStatModelProp)}
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
              !(idProp || defensiveStatModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
