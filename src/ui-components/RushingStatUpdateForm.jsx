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
import { getRushingStat } from "../graphql/queries";
import { updateRushingStat } from "../graphql/mutations";
const client = generateClient();
export default function RushingStatUpdateForm(props) {
  const {
    id: idProp,
    rushingStat: rushingStatModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    att: "",
    yds: "",
    td: "",
    avg: "",
    fumb: "",
    btk: "",
    afh: "",
    twty_plus: "",
    long: "",
  };
  const [att, setAtt] = React.useState(initialValues.att);
  const [yds, setYds] = React.useState(initialValues.yds);
  const [td, setTd] = React.useState(initialValues.td);
  const [avg, setAvg] = React.useState(initialValues.avg);
  const [fumb, setFumb] = React.useState(initialValues.fumb);
  const [btk, setBtk] = React.useState(initialValues.btk);
  const [afh, setAfh] = React.useState(initialValues.afh);
  const [twty_plus, setTwty_plus] = React.useState(initialValues.twty_plus);
  const [long, setLong] = React.useState(initialValues.long);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = rushingStatRecord
      ? { ...initialValues, ...rushingStatRecord }
      : initialValues;
    setAtt(cleanValues.att);
    setYds(cleanValues.yds);
    setTd(cleanValues.td);
    setAvg(cleanValues.avg);
    setFumb(cleanValues.fumb);
    setBtk(cleanValues.btk);
    setAfh(cleanValues.afh);
    setTwty_plus(cleanValues.twty_plus);
    setLong(cleanValues.long);
    setErrors({});
  };
  const [rushingStatRecord, setRushingStatRecord] =
    React.useState(rushingStatModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getRushingStat.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getRushingStat
        : rushingStatModelProp;
      setRushingStatRecord(record);
    };
    queryData();
  }, [idProp, rushingStatModelProp]);
  React.useEffect(resetStateValues, [rushingStatRecord]);
  const validations = {
    att: [],
    yds: [],
    td: [],
    avg: [],
    fumb: [],
    btk: [],
    afh: [],
    twty_plus: [],
    long: [],
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
          att: att ?? null,
          yds: yds ?? null,
          td: td ?? null,
          avg: avg ?? null,
          fumb: fumb ?? null,
          btk: btk ?? null,
          afh: afh ?? null,
          twty_plus: twty_plus ?? null,
          long: long ?? null,
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
            query: updateRushingStat.replaceAll("__typename", ""),
            variables: {
              input: {
                id: rushingStatRecord.id,
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
      {...getOverrideProps(overrides, "RushingStatUpdateForm")}
      {...rest}
    >
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
              att: value,
              yds,
              td,
              avg,
              fumb,
              btk,
              afh,
              twty_plus,
              long,
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
              att,
              yds: value,
              td,
              avg,
              fumb,
              btk,
              afh,
              twty_plus,
              long,
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
              att,
              yds,
              td: value,
              avg,
              fumb,
              btk,
              afh,
              twty_plus,
              long,
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
              att,
              yds,
              td,
              avg: value,
              fumb,
              btk,
              afh,
              twty_plus,
              long,
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
        label="Fumb"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={fumb}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              att,
              yds,
              td,
              avg,
              fumb: value,
              btk,
              afh,
              twty_plus,
              long,
            };
            const result = onChange(modelFields);
            value = result?.fumb ?? value;
          }
          if (errors.fumb?.hasError) {
            runValidationTasks("fumb", value);
          }
          setFumb(value);
        }}
        onBlur={() => runValidationTasks("fumb", fumb)}
        errorMessage={errors.fumb?.errorMessage}
        hasError={errors.fumb?.hasError}
        {...getOverrideProps(overrides, "fumb")}
      ></TextField>
      <TextField
        label="Btk"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={btk}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              att,
              yds,
              td,
              avg,
              fumb,
              btk: value,
              afh,
              twty_plus,
              long,
            };
            const result = onChange(modelFields);
            value = result?.btk ?? value;
          }
          if (errors.btk?.hasError) {
            runValidationTasks("btk", value);
          }
          setBtk(value);
        }}
        onBlur={() => runValidationTasks("btk", btk)}
        errorMessage={errors.btk?.errorMessage}
        hasError={errors.btk?.hasError}
        {...getOverrideProps(overrides, "btk")}
      ></TextField>
      <TextField
        label="Afh"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={afh}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              att,
              yds,
              td,
              avg,
              fumb,
              btk,
              afh: value,
              twty_plus,
              long,
            };
            const result = onChange(modelFields);
            value = result?.afh ?? value;
          }
          if (errors.afh?.hasError) {
            runValidationTasks("afh", value);
          }
          setAfh(value);
        }}
        onBlur={() => runValidationTasks("afh", afh)}
        errorMessage={errors.afh?.errorMessage}
        hasError={errors.afh?.hasError}
        {...getOverrideProps(overrides, "afh")}
      ></TextField>
      <TextField
        label="Twty plus"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={twty_plus}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              att,
              yds,
              td,
              avg,
              fumb,
              btk,
              afh,
              twty_plus: value,
              long,
            };
            const result = onChange(modelFields);
            value = result?.twty_plus ?? value;
          }
          if (errors.twty_plus?.hasError) {
            runValidationTasks("twty_plus", value);
          }
          setTwty_plus(value);
        }}
        onBlur={() => runValidationTasks("twty_plus", twty_plus)}
        errorMessage={errors.twty_plus?.errorMessage}
        hasError={errors.twty_plus?.hasError}
        {...getOverrideProps(overrides, "twty_plus")}
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
              att,
              yds,
              td,
              avg,
              fumb,
              btk,
              afh,
              twty_plus,
              long: value,
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
          isDisabled={!(idProp || rushingStatModelProp)}
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
              !(idProp || rushingStatModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
