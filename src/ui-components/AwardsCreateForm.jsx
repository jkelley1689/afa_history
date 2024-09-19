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
import { createAwards } from "../graphql/mutations";
const client = generateClient();
export default function AwardsCreateForm(props) {
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
    OPOY: "",
    DPOY: "",
    ROTY: "",
    GOTY: "",
    americanBowlMVP: "",
    CBPOTY: "",
    SGAward: "",
  };
  const [OPOY, setOPOY] = React.useState(initialValues.OPOY);
  const [DPOY, setDPOY] = React.useState(initialValues.DPOY);
  const [ROTY, setROTY] = React.useState(initialValues.ROTY);
  const [GOTY, setGOTY] = React.useState(initialValues.GOTY);
  const [americanBowlMVP, setAmericanBowlMVP] = React.useState(
    initialValues.americanBowlMVP
  );
  const [CBPOTY, setCBPOTY] = React.useState(initialValues.CBPOTY);
  const [SGAward, setSGAward] = React.useState(initialValues.SGAward);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setOPOY(initialValues.OPOY);
    setDPOY(initialValues.DPOY);
    setROTY(initialValues.ROTY);
    setGOTY(initialValues.GOTY);
    setAmericanBowlMVP(initialValues.americanBowlMVP);
    setCBPOTY(initialValues.CBPOTY);
    setSGAward(initialValues.SGAward);
    setErrors({});
  };
  const validations = {
    OPOY: [],
    DPOY: [],
    ROTY: [],
    GOTY: [],
    americanBowlMVP: [],
    CBPOTY: [],
    SGAward: [],
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
          OPOY,
          DPOY,
          ROTY,
          GOTY,
          americanBowlMVP,
          CBPOTY,
          SGAward,
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
            query: createAwards.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "AwardsCreateForm")}
      {...rest}
    >
      <TextField
        label="Opoy"
        isRequired={false}
        isReadOnly={false}
        value={OPOY}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              OPOY: value,
              DPOY,
              ROTY,
              GOTY,
              americanBowlMVP,
              CBPOTY,
              SGAward,
            };
            const result = onChange(modelFields);
            value = result?.OPOY ?? value;
          }
          if (errors.OPOY?.hasError) {
            runValidationTasks("OPOY", value);
          }
          setOPOY(value);
        }}
        onBlur={() => runValidationTasks("OPOY", OPOY)}
        errorMessage={errors.OPOY?.errorMessage}
        hasError={errors.OPOY?.hasError}
        {...getOverrideProps(overrides, "OPOY")}
      ></TextField>
      <TextField
        label="Dpoy"
        isRequired={false}
        isReadOnly={false}
        value={DPOY}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              OPOY,
              DPOY: value,
              ROTY,
              GOTY,
              americanBowlMVP,
              CBPOTY,
              SGAward,
            };
            const result = onChange(modelFields);
            value = result?.DPOY ?? value;
          }
          if (errors.DPOY?.hasError) {
            runValidationTasks("DPOY", value);
          }
          setDPOY(value);
        }}
        onBlur={() => runValidationTasks("DPOY", DPOY)}
        errorMessage={errors.DPOY?.errorMessage}
        hasError={errors.DPOY?.hasError}
        {...getOverrideProps(overrides, "DPOY")}
      ></TextField>
      <TextField
        label="Roty"
        isRequired={false}
        isReadOnly={false}
        value={ROTY}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              OPOY,
              DPOY,
              ROTY: value,
              GOTY,
              americanBowlMVP,
              CBPOTY,
              SGAward,
            };
            const result = onChange(modelFields);
            value = result?.ROTY ?? value;
          }
          if (errors.ROTY?.hasError) {
            runValidationTasks("ROTY", value);
          }
          setROTY(value);
        }}
        onBlur={() => runValidationTasks("ROTY", ROTY)}
        errorMessage={errors.ROTY?.errorMessage}
        hasError={errors.ROTY?.hasError}
        {...getOverrideProps(overrides, "ROTY")}
      ></TextField>
      <TextField
        label="Goty"
        isRequired={false}
        isReadOnly={false}
        value={GOTY}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              OPOY,
              DPOY,
              ROTY,
              GOTY: value,
              americanBowlMVP,
              CBPOTY,
              SGAward,
            };
            const result = onChange(modelFields);
            value = result?.GOTY ?? value;
          }
          if (errors.GOTY?.hasError) {
            runValidationTasks("GOTY", value);
          }
          setGOTY(value);
        }}
        onBlur={() => runValidationTasks("GOTY", GOTY)}
        errorMessage={errors.GOTY?.errorMessage}
        hasError={errors.GOTY?.hasError}
        {...getOverrideProps(overrides, "GOTY")}
      ></TextField>
      <TextField
        label="American bowl mvp"
        isRequired={false}
        isReadOnly={false}
        value={americanBowlMVP}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              OPOY,
              DPOY,
              ROTY,
              GOTY,
              americanBowlMVP: value,
              CBPOTY,
              SGAward,
            };
            const result = onChange(modelFields);
            value = result?.americanBowlMVP ?? value;
          }
          if (errors.americanBowlMVP?.hasError) {
            runValidationTasks("americanBowlMVP", value);
          }
          setAmericanBowlMVP(value);
        }}
        onBlur={() => runValidationTasks("americanBowlMVP", americanBowlMVP)}
        errorMessage={errors.americanBowlMVP?.errorMessage}
        hasError={errors.americanBowlMVP?.hasError}
        {...getOverrideProps(overrides, "americanBowlMVP")}
      ></TextField>
      <TextField
        label="Cbpoty"
        isRequired={false}
        isReadOnly={false}
        value={CBPOTY}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              OPOY,
              DPOY,
              ROTY,
              GOTY,
              americanBowlMVP,
              CBPOTY: value,
              SGAward,
            };
            const result = onChange(modelFields);
            value = result?.CBPOTY ?? value;
          }
          if (errors.CBPOTY?.hasError) {
            runValidationTasks("CBPOTY", value);
          }
          setCBPOTY(value);
        }}
        onBlur={() => runValidationTasks("CBPOTY", CBPOTY)}
        errorMessage={errors.CBPOTY?.errorMessage}
        hasError={errors.CBPOTY?.hasError}
        {...getOverrideProps(overrides, "CBPOTY")}
      ></TextField>
      <TextField
        label="Sg award"
        isRequired={false}
        isReadOnly={false}
        value={SGAward}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              OPOY,
              DPOY,
              ROTY,
              GOTY,
              americanBowlMVP,
              CBPOTY,
              SGAward: value,
            };
            const result = onChange(modelFields);
            value = result?.SGAward ?? value;
          }
          if (errors.SGAward?.hasError) {
            runValidationTasks("SGAward", value);
          }
          setSGAward(value);
        }}
        onBlur={() => runValidationTasks("SGAward", SGAward)}
        errorMessage={errors.SGAward?.errorMessage}
        hasError={errors.SGAward?.hasError}
        {...getOverrideProps(overrides, "SGAward")}
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
