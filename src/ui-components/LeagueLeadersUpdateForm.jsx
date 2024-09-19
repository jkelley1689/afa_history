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
import { getLeagueLeaders } from "../graphql/queries";
import { updateLeagueLeaders } from "../graphql/mutations";
const client = generateClient();
export default function LeagueLeadersUpdateForm(props) {
  const {
    id: idProp,
    leagueLeaders: leagueLeadersModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    passingYards: "",
    passingTDs: "",
    completions: "",
    passingAttempts: "",
    qbInts: "",
    mostSacked: "",
    rushingYards: "",
    rushingTDs: "",
    rushingAvg: "",
    yardsAFH: "",
    rushingFumbles: "",
    catches: "",
    recYards: "",
    recTDs: "",
    yardsAfterCatch: "",
    drops: "",
    pancakes: "",
    mostSacksAllowed: "",
    tackles: "",
    defTDs: "",
    tfls: "",
    forcedFumbles: "",
    sacks: "",
    passDeflections: "",
    ints: "",
    catchAllowed: "",
  };
  const [passingYards, setPassingYards] = React.useState(
    initialValues.passingYards
  );
  const [passingTDs, setPassingTDs] = React.useState(initialValues.passingTDs);
  const [completions, setCompletions] = React.useState(
    initialValues.completions
  );
  const [passingAttempts, setPassingAttempts] = React.useState(
    initialValues.passingAttempts
  );
  const [qbInts, setQbInts] = React.useState(initialValues.qbInts);
  const [mostSacked, setMostSacked] = React.useState(initialValues.mostSacked);
  const [rushingYards, setRushingYards] = React.useState(
    initialValues.rushingYards
  );
  const [rushingTDs, setRushingTDs] = React.useState(initialValues.rushingTDs);
  const [rushingAvg, setRushingAvg] = React.useState(initialValues.rushingAvg);
  const [yardsAFH, setYardsAFH] = React.useState(initialValues.yardsAFH);
  const [rushingFumbles, setRushingFumbles] = React.useState(
    initialValues.rushingFumbles
  );
  const [catches, setCatches] = React.useState(initialValues.catches);
  const [recYards, setRecYards] = React.useState(initialValues.recYards);
  const [recTDs, setRecTDs] = React.useState(initialValues.recTDs);
  const [yardsAfterCatch, setYardsAfterCatch] = React.useState(
    initialValues.yardsAfterCatch
  );
  const [drops, setDrops] = React.useState(initialValues.drops);
  const [pancakes, setPancakes] = React.useState(initialValues.pancakes);
  const [mostSacksAllowed, setMostSacksAllowed] = React.useState(
    initialValues.mostSacksAllowed
  );
  const [tackles, setTackles] = React.useState(initialValues.tackles);
  const [defTDs, setDefTDs] = React.useState(initialValues.defTDs);
  const [tfls, setTfls] = React.useState(initialValues.tfls);
  const [forcedFumbles, setForcedFumbles] = React.useState(
    initialValues.forcedFumbles
  );
  const [sacks, setSacks] = React.useState(initialValues.sacks);
  const [passDeflections, setPassDeflections] = React.useState(
    initialValues.passDeflections
  );
  const [ints, setInts] = React.useState(initialValues.ints);
  const [catchAllowed, setCatchAllowed] = React.useState(
    initialValues.catchAllowed
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = leagueLeadersRecord
      ? { ...initialValues, ...leagueLeadersRecord }
      : initialValues;
    setPassingYards(cleanValues.passingYards);
    setPassingTDs(cleanValues.passingTDs);
    setCompletions(cleanValues.completions);
    setPassingAttempts(cleanValues.passingAttempts);
    setQbInts(cleanValues.qbInts);
    setMostSacked(cleanValues.mostSacked);
    setRushingYards(cleanValues.rushingYards);
    setRushingTDs(cleanValues.rushingTDs);
    setRushingAvg(cleanValues.rushingAvg);
    setYardsAFH(cleanValues.yardsAFH);
    setRushingFumbles(cleanValues.rushingFumbles);
    setCatches(cleanValues.catches);
    setRecYards(cleanValues.recYards);
    setRecTDs(cleanValues.recTDs);
    setYardsAfterCatch(cleanValues.yardsAfterCatch);
    setDrops(cleanValues.drops);
    setPancakes(cleanValues.pancakes);
    setMostSacksAllowed(cleanValues.mostSacksAllowed);
    setTackles(cleanValues.tackles);
    setDefTDs(cleanValues.defTDs);
    setTfls(cleanValues.tfls);
    setForcedFumbles(cleanValues.forcedFumbles);
    setSacks(cleanValues.sacks);
    setPassDeflections(cleanValues.passDeflections);
    setInts(cleanValues.ints);
    setCatchAllowed(cleanValues.catchAllowed);
    setErrors({});
  };
  const [leagueLeadersRecord, setLeagueLeadersRecord] = React.useState(
    leagueLeadersModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getLeagueLeaders.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getLeagueLeaders
        : leagueLeadersModelProp;
      setLeagueLeadersRecord(record);
    };
    queryData();
  }, [idProp, leagueLeadersModelProp]);
  React.useEffect(resetStateValues, [leagueLeadersRecord]);
  const validations = {
    passingYards: [],
    passingTDs: [],
    completions: [],
    passingAttempts: [],
    qbInts: [],
    mostSacked: [],
    rushingYards: [],
    rushingTDs: [],
    rushingAvg: [],
    yardsAFH: [],
    rushingFumbles: [],
    catches: [],
    recYards: [],
    recTDs: [],
    yardsAfterCatch: [],
    drops: [],
    pancakes: [],
    mostSacksAllowed: [],
    tackles: [],
    defTDs: [],
    tfls: [],
    forcedFumbles: [],
    sacks: [],
    passDeflections: [],
    ints: [],
    catchAllowed: [],
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
          passingYards: passingYards ?? null,
          passingTDs: passingTDs ?? null,
          completions: completions ?? null,
          passingAttempts: passingAttempts ?? null,
          qbInts: qbInts ?? null,
          mostSacked: mostSacked ?? null,
          rushingYards: rushingYards ?? null,
          rushingTDs: rushingTDs ?? null,
          rushingAvg: rushingAvg ?? null,
          yardsAFH: yardsAFH ?? null,
          rushingFumbles: rushingFumbles ?? null,
          catches: catches ?? null,
          recYards: recYards ?? null,
          recTDs: recTDs ?? null,
          yardsAfterCatch: yardsAfterCatch ?? null,
          drops: drops ?? null,
          pancakes: pancakes ?? null,
          mostSacksAllowed: mostSacksAllowed ?? null,
          tackles: tackles ?? null,
          defTDs: defTDs ?? null,
          tfls: tfls ?? null,
          forcedFumbles: forcedFumbles ?? null,
          sacks: sacks ?? null,
          passDeflections: passDeflections ?? null,
          ints: ints ?? null,
          catchAllowed: catchAllowed ?? null,
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
            query: updateLeagueLeaders.replaceAll("__typename", ""),
            variables: {
              input: {
                id: leagueLeadersRecord.id,
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
      {...getOverrideProps(overrides, "LeagueLeadersUpdateForm")}
      {...rest}
    >
      <TextField
        label="Passing yards"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={passingYards}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              passingYards: value,
              passingTDs,
              completions,
              passingAttempts,
              qbInts,
              mostSacked,
              rushingYards,
              rushingTDs,
              rushingAvg,
              yardsAFH,
              rushingFumbles,
              catches,
              recYards,
              recTDs,
              yardsAfterCatch,
              drops,
              pancakes,
              mostSacksAllowed,
              tackles,
              defTDs,
              tfls,
              forcedFumbles,
              sacks,
              passDeflections,
              ints,
              catchAllowed,
            };
            const result = onChange(modelFields);
            value = result?.passingYards ?? value;
          }
          if (errors.passingYards?.hasError) {
            runValidationTasks("passingYards", value);
          }
          setPassingYards(value);
        }}
        onBlur={() => runValidationTasks("passingYards", passingYards)}
        errorMessage={errors.passingYards?.errorMessage}
        hasError={errors.passingYards?.hasError}
        {...getOverrideProps(overrides, "passingYards")}
      ></TextField>
      <TextField
        label="Passing t ds"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={passingTDs}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              passingYards,
              passingTDs: value,
              completions,
              passingAttempts,
              qbInts,
              mostSacked,
              rushingYards,
              rushingTDs,
              rushingAvg,
              yardsAFH,
              rushingFumbles,
              catches,
              recYards,
              recTDs,
              yardsAfterCatch,
              drops,
              pancakes,
              mostSacksAllowed,
              tackles,
              defTDs,
              tfls,
              forcedFumbles,
              sacks,
              passDeflections,
              ints,
              catchAllowed,
            };
            const result = onChange(modelFields);
            value = result?.passingTDs ?? value;
          }
          if (errors.passingTDs?.hasError) {
            runValidationTasks("passingTDs", value);
          }
          setPassingTDs(value);
        }}
        onBlur={() => runValidationTasks("passingTDs", passingTDs)}
        errorMessage={errors.passingTDs?.errorMessage}
        hasError={errors.passingTDs?.hasError}
        {...getOverrideProps(overrides, "passingTDs")}
      ></TextField>
      <TextField
        label="Completions"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={completions}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              passingYards,
              passingTDs,
              completions: value,
              passingAttempts,
              qbInts,
              mostSacked,
              rushingYards,
              rushingTDs,
              rushingAvg,
              yardsAFH,
              rushingFumbles,
              catches,
              recYards,
              recTDs,
              yardsAfterCatch,
              drops,
              pancakes,
              mostSacksAllowed,
              tackles,
              defTDs,
              tfls,
              forcedFumbles,
              sacks,
              passDeflections,
              ints,
              catchAllowed,
            };
            const result = onChange(modelFields);
            value = result?.completions ?? value;
          }
          if (errors.completions?.hasError) {
            runValidationTasks("completions", value);
          }
          setCompletions(value);
        }}
        onBlur={() => runValidationTasks("completions", completions)}
        errorMessage={errors.completions?.errorMessage}
        hasError={errors.completions?.hasError}
        {...getOverrideProps(overrides, "completions")}
      ></TextField>
      <TextField
        label="Passing attempts"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={passingAttempts}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              passingYards,
              passingTDs,
              completions,
              passingAttempts: value,
              qbInts,
              mostSacked,
              rushingYards,
              rushingTDs,
              rushingAvg,
              yardsAFH,
              rushingFumbles,
              catches,
              recYards,
              recTDs,
              yardsAfterCatch,
              drops,
              pancakes,
              mostSacksAllowed,
              tackles,
              defTDs,
              tfls,
              forcedFumbles,
              sacks,
              passDeflections,
              ints,
              catchAllowed,
            };
            const result = onChange(modelFields);
            value = result?.passingAttempts ?? value;
          }
          if (errors.passingAttempts?.hasError) {
            runValidationTasks("passingAttempts", value);
          }
          setPassingAttempts(value);
        }}
        onBlur={() => runValidationTasks("passingAttempts", passingAttempts)}
        errorMessage={errors.passingAttempts?.errorMessage}
        hasError={errors.passingAttempts?.hasError}
        {...getOverrideProps(overrides, "passingAttempts")}
      ></TextField>
      <TextField
        label="Qb ints"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={qbInts}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              passingYards,
              passingTDs,
              completions,
              passingAttempts,
              qbInts: value,
              mostSacked,
              rushingYards,
              rushingTDs,
              rushingAvg,
              yardsAFH,
              rushingFumbles,
              catches,
              recYards,
              recTDs,
              yardsAfterCatch,
              drops,
              pancakes,
              mostSacksAllowed,
              tackles,
              defTDs,
              tfls,
              forcedFumbles,
              sacks,
              passDeflections,
              ints,
              catchAllowed,
            };
            const result = onChange(modelFields);
            value = result?.qbInts ?? value;
          }
          if (errors.qbInts?.hasError) {
            runValidationTasks("qbInts", value);
          }
          setQbInts(value);
        }}
        onBlur={() => runValidationTasks("qbInts", qbInts)}
        errorMessage={errors.qbInts?.errorMessage}
        hasError={errors.qbInts?.hasError}
        {...getOverrideProps(overrides, "qbInts")}
      ></TextField>
      <TextField
        label="Most sacked"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={mostSacked}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              passingYards,
              passingTDs,
              completions,
              passingAttempts,
              qbInts,
              mostSacked: value,
              rushingYards,
              rushingTDs,
              rushingAvg,
              yardsAFH,
              rushingFumbles,
              catches,
              recYards,
              recTDs,
              yardsAfterCatch,
              drops,
              pancakes,
              mostSacksAllowed,
              tackles,
              defTDs,
              tfls,
              forcedFumbles,
              sacks,
              passDeflections,
              ints,
              catchAllowed,
            };
            const result = onChange(modelFields);
            value = result?.mostSacked ?? value;
          }
          if (errors.mostSacked?.hasError) {
            runValidationTasks("mostSacked", value);
          }
          setMostSacked(value);
        }}
        onBlur={() => runValidationTasks("mostSacked", mostSacked)}
        errorMessage={errors.mostSacked?.errorMessage}
        hasError={errors.mostSacked?.hasError}
        {...getOverrideProps(overrides, "mostSacked")}
      ></TextField>
      <TextField
        label="Rushing yards"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={rushingYards}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              passingYards,
              passingTDs,
              completions,
              passingAttempts,
              qbInts,
              mostSacked,
              rushingYards: value,
              rushingTDs,
              rushingAvg,
              yardsAFH,
              rushingFumbles,
              catches,
              recYards,
              recTDs,
              yardsAfterCatch,
              drops,
              pancakes,
              mostSacksAllowed,
              tackles,
              defTDs,
              tfls,
              forcedFumbles,
              sacks,
              passDeflections,
              ints,
              catchAllowed,
            };
            const result = onChange(modelFields);
            value = result?.rushingYards ?? value;
          }
          if (errors.rushingYards?.hasError) {
            runValidationTasks("rushingYards", value);
          }
          setRushingYards(value);
        }}
        onBlur={() => runValidationTasks("rushingYards", rushingYards)}
        errorMessage={errors.rushingYards?.errorMessage}
        hasError={errors.rushingYards?.hasError}
        {...getOverrideProps(overrides, "rushingYards")}
      ></TextField>
      <TextField
        label="Rushing t ds"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={rushingTDs}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              passingYards,
              passingTDs,
              completions,
              passingAttempts,
              qbInts,
              mostSacked,
              rushingYards,
              rushingTDs: value,
              rushingAvg,
              yardsAFH,
              rushingFumbles,
              catches,
              recYards,
              recTDs,
              yardsAfterCatch,
              drops,
              pancakes,
              mostSacksAllowed,
              tackles,
              defTDs,
              tfls,
              forcedFumbles,
              sacks,
              passDeflections,
              ints,
              catchAllowed,
            };
            const result = onChange(modelFields);
            value = result?.rushingTDs ?? value;
          }
          if (errors.rushingTDs?.hasError) {
            runValidationTasks("rushingTDs", value);
          }
          setRushingTDs(value);
        }}
        onBlur={() => runValidationTasks("rushingTDs", rushingTDs)}
        errorMessage={errors.rushingTDs?.errorMessage}
        hasError={errors.rushingTDs?.hasError}
        {...getOverrideProps(overrides, "rushingTDs")}
      ></TextField>
      <TextField
        label="Rushing avg"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={rushingAvg}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              passingYards,
              passingTDs,
              completions,
              passingAttempts,
              qbInts,
              mostSacked,
              rushingYards,
              rushingTDs,
              rushingAvg: value,
              yardsAFH,
              rushingFumbles,
              catches,
              recYards,
              recTDs,
              yardsAfterCatch,
              drops,
              pancakes,
              mostSacksAllowed,
              tackles,
              defTDs,
              tfls,
              forcedFumbles,
              sacks,
              passDeflections,
              ints,
              catchAllowed,
            };
            const result = onChange(modelFields);
            value = result?.rushingAvg ?? value;
          }
          if (errors.rushingAvg?.hasError) {
            runValidationTasks("rushingAvg", value);
          }
          setRushingAvg(value);
        }}
        onBlur={() => runValidationTasks("rushingAvg", rushingAvg)}
        errorMessage={errors.rushingAvg?.errorMessage}
        hasError={errors.rushingAvg?.hasError}
        {...getOverrideProps(overrides, "rushingAvg")}
      ></TextField>
      <TextField
        label="Yards afh"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={yardsAFH}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              passingYards,
              passingTDs,
              completions,
              passingAttempts,
              qbInts,
              mostSacked,
              rushingYards,
              rushingTDs,
              rushingAvg,
              yardsAFH: value,
              rushingFumbles,
              catches,
              recYards,
              recTDs,
              yardsAfterCatch,
              drops,
              pancakes,
              mostSacksAllowed,
              tackles,
              defTDs,
              tfls,
              forcedFumbles,
              sacks,
              passDeflections,
              ints,
              catchAllowed,
            };
            const result = onChange(modelFields);
            value = result?.yardsAFH ?? value;
          }
          if (errors.yardsAFH?.hasError) {
            runValidationTasks("yardsAFH", value);
          }
          setYardsAFH(value);
        }}
        onBlur={() => runValidationTasks("yardsAFH", yardsAFH)}
        errorMessage={errors.yardsAFH?.errorMessage}
        hasError={errors.yardsAFH?.hasError}
        {...getOverrideProps(overrides, "yardsAFH")}
      ></TextField>
      <TextField
        label="Rushing fumbles"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={rushingFumbles}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              passingYards,
              passingTDs,
              completions,
              passingAttempts,
              qbInts,
              mostSacked,
              rushingYards,
              rushingTDs,
              rushingAvg,
              yardsAFH,
              rushingFumbles: value,
              catches,
              recYards,
              recTDs,
              yardsAfterCatch,
              drops,
              pancakes,
              mostSacksAllowed,
              tackles,
              defTDs,
              tfls,
              forcedFumbles,
              sacks,
              passDeflections,
              ints,
              catchAllowed,
            };
            const result = onChange(modelFields);
            value = result?.rushingFumbles ?? value;
          }
          if (errors.rushingFumbles?.hasError) {
            runValidationTasks("rushingFumbles", value);
          }
          setRushingFumbles(value);
        }}
        onBlur={() => runValidationTasks("rushingFumbles", rushingFumbles)}
        errorMessage={errors.rushingFumbles?.errorMessage}
        hasError={errors.rushingFumbles?.hasError}
        {...getOverrideProps(overrides, "rushingFumbles")}
      ></TextField>
      <TextField
        label="Catches"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={catches}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              passingYards,
              passingTDs,
              completions,
              passingAttempts,
              qbInts,
              mostSacked,
              rushingYards,
              rushingTDs,
              rushingAvg,
              yardsAFH,
              rushingFumbles,
              catches: value,
              recYards,
              recTDs,
              yardsAfterCatch,
              drops,
              pancakes,
              mostSacksAllowed,
              tackles,
              defTDs,
              tfls,
              forcedFumbles,
              sacks,
              passDeflections,
              ints,
              catchAllowed,
            };
            const result = onChange(modelFields);
            value = result?.catches ?? value;
          }
          if (errors.catches?.hasError) {
            runValidationTasks("catches", value);
          }
          setCatches(value);
        }}
        onBlur={() => runValidationTasks("catches", catches)}
        errorMessage={errors.catches?.errorMessage}
        hasError={errors.catches?.hasError}
        {...getOverrideProps(overrides, "catches")}
      ></TextField>
      <TextField
        label="Rec yards"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={recYards}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              passingYards,
              passingTDs,
              completions,
              passingAttempts,
              qbInts,
              mostSacked,
              rushingYards,
              rushingTDs,
              rushingAvg,
              yardsAFH,
              rushingFumbles,
              catches,
              recYards: value,
              recTDs,
              yardsAfterCatch,
              drops,
              pancakes,
              mostSacksAllowed,
              tackles,
              defTDs,
              tfls,
              forcedFumbles,
              sacks,
              passDeflections,
              ints,
              catchAllowed,
            };
            const result = onChange(modelFields);
            value = result?.recYards ?? value;
          }
          if (errors.recYards?.hasError) {
            runValidationTasks("recYards", value);
          }
          setRecYards(value);
        }}
        onBlur={() => runValidationTasks("recYards", recYards)}
        errorMessage={errors.recYards?.errorMessage}
        hasError={errors.recYards?.hasError}
        {...getOverrideProps(overrides, "recYards")}
      ></TextField>
      <TextField
        label="Rec t ds"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={recTDs}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              passingYards,
              passingTDs,
              completions,
              passingAttempts,
              qbInts,
              mostSacked,
              rushingYards,
              rushingTDs,
              rushingAvg,
              yardsAFH,
              rushingFumbles,
              catches,
              recYards,
              recTDs: value,
              yardsAfterCatch,
              drops,
              pancakes,
              mostSacksAllowed,
              tackles,
              defTDs,
              tfls,
              forcedFumbles,
              sacks,
              passDeflections,
              ints,
              catchAllowed,
            };
            const result = onChange(modelFields);
            value = result?.recTDs ?? value;
          }
          if (errors.recTDs?.hasError) {
            runValidationTasks("recTDs", value);
          }
          setRecTDs(value);
        }}
        onBlur={() => runValidationTasks("recTDs", recTDs)}
        errorMessage={errors.recTDs?.errorMessage}
        hasError={errors.recTDs?.hasError}
        {...getOverrideProps(overrides, "recTDs")}
      ></TextField>
      <TextField
        label="Yards after catch"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={yardsAfterCatch}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              passingYards,
              passingTDs,
              completions,
              passingAttempts,
              qbInts,
              mostSacked,
              rushingYards,
              rushingTDs,
              rushingAvg,
              yardsAFH,
              rushingFumbles,
              catches,
              recYards,
              recTDs,
              yardsAfterCatch: value,
              drops,
              pancakes,
              mostSacksAllowed,
              tackles,
              defTDs,
              tfls,
              forcedFumbles,
              sacks,
              passDeflections,
              ints,
              catchAllowed,
            };
            const result = onChange(modelFields);
            value = result?.yardsAfterCatch ?? value;
          }
          if (errors.yardsAfterCatch?.hasError) {
            runValidationTasks("yardsAfterCatch", value);
          }
          setYardsAfterCatch(value);
        }}
        onBlur={() => runValidationTasks("yardsAfterCatch", yardsAfterCatch)}
        errorMessage={errors.yardsAfterCatch?.errorMessage}
        hasError={errors.yardsAfterCatch?.hasError}
        {...getOverrideProps(overrides, "yardsAfterCatch")}
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
              passingYards,
              passingTDs,
              completions,
              passingAttempts,
              qbInts,
              mostSacked,
              rushingYards,
              rushingTDs,
              rushingAvg,
              yardsAFH,
              rushingFumbles,
              catches,
              recYards,
              recTDs,
              yardsAfterCatch,
              drops: value,
              pancakes,
              mostSacksAllowed,
              tackles,
              defTDs,
              tfls,
              forcedFumbles,
              sacks,
              passDeflections,
              ints,
              catchAllowed,
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
              passingYards,
              passingTDs,
              completions,
              passingAttempts,
              qbInts,
              mostSacked,
              rushingYards,
              rushingTDs,
              rushingAvg,
              yardsAFH,
              rushingFumbles,
              catches,
              recYards,
              recTDs,
              yardsAfterCatch,
              drops,
              pancakes: value,
              mostSacksAllowed,
              tackles,
              defTDs,
              tfls,
              forcedFumbles,
              sacks,
              passDeflections,
              ints,
              catchAllowed,
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
        label="Most sacks allowed"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={mostSacksAllowed}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              passingYards,
              passingTDs,
              completions,
              passingAttempts,
              qbInts,
              mostSacked,
              rushingYards,
              rushingTDs,
              rushingAvg,
              yardsAFH,
              rushingFumbles,
              catches,
              recYards,
              recTDs,
              yardsAfterCatch,
              drops,
              pancakes,
              mostSacksAllowed: value,
              tackles,
              defTDs,
              tfls,
              forcedFumbles,
              sacks,
              passDeflections,
              ints,
              catchAllowed,
            };
            const result = onChange(modelFields);
            value = result?.mostSacksAllowed ?? value;
          }
          if (errors.mostSacksAllowed?.hasError) {
            runValidationTasks("mostSacksAllowed", value);
          }
          setMostSacksAllowed(value);
        }}
        onBlur={() => runValidationTasks("mostSacksAllowed", mostSacksAllowed)}
        errorMessage={errors.mostSacksAllowed?.errorMessage}
        hasError={errors.mostSacksAllowed?.hasError}
        {...getOverrideProps(overrides, "mostSacksAllowed")}
      ></TextField>
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
              passingYards,
              passingTDs,
              completions,
              passingAttempts,
              qbInts,
              mostSacked,
              rushingYards,
              rushingTDs,
              rushingAvg,
              yardsAFH,
              rushingFumbles,
              catches,
              recYards,
              recTDs,
              yardsAfterCatch,
              drops,
              pancakes,
              mostSacksAllowed,
              tackles: value,
              defTDs,
              tfls,
              forcedFumbles,
              sacks,
              passDeflections,
              ints,
              catchAllowed,
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
        label="Def t ds"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={defTDs}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              passingYards,
              passingTDs,
              completions,
              passingAttempts,
              qbInts,
              mostSacked,
              rushingYards,
              rushingTDs,
              rushingAvg,
              yardsAFH,
              rushingFumbles,
              catches,
              recYards,
              recTDs,
              yardsAfterCatch,
              drops,
              pancakes,
              mostSacksAllowed,
              tackles,
              defTDs: value,
              tfls,
              forcedFumbles,
              sacks,
              passDeflections,
              ints,
              catchAllowed,
            };
            const result = onChange(modelFields);
            value = result?.defTDs ?? value;
          }
          if (errors.defTDs?.hasError) {
            runValidationTasks("defTDs", value);
          }
          setDefTDs(value);
        }}
        onBlur={() => runValidationTasks("defTDs", defTDs)}
        errorMessage={errors.defTDs?.errorMessage}
        hasError={errors.defTDs?.hasError}
        {...getOverrideProps(overrides, "defTDs")}
      ></TextField>
      <TextField
        label="Tfls"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={tfls}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              passingYards,
              passingTDs,
              completions,
              passingAttempts,
              qbInts,
              mostSacked,
              rushingYards,
              rushingTDs,
              rushingAvg,
              yardsAFH,
              rushingFumbles,
              catches,
              recYards,
              recTDs,
              yardsAfterCatch,
              drops,
              pancakes,
              mostSacksAllowed,
              tackles,
              defTDs,
              tfls: value,
              forcedFumbles,
              sacks,
              passDeflections,
              ints,
              catchAllowed,
            };
            const result = onChange(modelFields);
            value = result?.tfls ?? value;
          }
          if (errors.tfls?.hasError) {
            runValidationTasks("tfls", value);
          }
          setTfls(value);
        }}
        onBlur={() => runValidationTasks("tfls", tfls)}
        errorMessage={errors.tfls?.errorMessage}
        hasError={errors.tfls?.hasError}
        {...getOverrideProps(overrides, "tfls")}
      ></TextField>
      <TextField
        label="Forced fumbles"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={forcedFumbles}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              passingYards,
              passingTDs,
              completions,
              passingAttempts,
              qbInts,
              mostSacked,
              rushingYards,
              rushingTDs,
              rushingAvg,
              yardsAFH,
              rushingFumbles,
              catches,
              recYards,
              recTDs,
              yardsAfterCatch,
              drops,
              pancakes,
              mostSacksAllowed,
              tackles,
              defTDs,
              tfls,
              forcedFumbles: value,
              sacks,
              passDeflections,
              ints,
              catchAllowed,
            };
            const result = onChange(modelFields);
            value = result?.forcedFumbles ?? value;
          }
          if (errors.forcedFumbles?.hasError) {
            runValidationTasks("forcedFumbles", value);
          }
          setForcedFumbles(value);
        }}
        onBlur={() => runValidationTasks("forcedFumbles", forcedFumbles)}
        errorMessage={errors.forcedFumbles?.errorMessage}
        hasError={errors.forcedFumbles?.hasError}
        {...getOverrideProps(overrides, "forcedFumbles")}
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
              passingYards,
              passingTDs,
              completions,
              passingAttempts,
              qbInts,
              mostSacked,
              rushingYards,
              rushingTDs,
              rushingAvg,
              yardsAFH,
              rushingFumbles,
              catches,
              recYards,
              recTDs,
              yardsAfterCatch,
              drops,
              pancakes,
              mostSacksAllowed,
              tackles,
              defTDs,
              tfls,
              forcedFumbles,
              sacks: value,
              passDeflections,
              ints,
              catchAllowed,
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
        label="Pass deflections"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={passDeflections}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              passingYards,
              passingTDs,
              completions,
              passingAttempts,
              qbInts,
              mostSacked,
              rushingYards,
              rushingTDs,
              rushingAvg,
              yardsAFH,
              rushingFumbles,
              catches,
              recYards,
              recTDs,
              yardsAfterCatch,
              drops,
              pancakes,
              mostSacksAllowed,
              tackles,
              defTDs,
              tfls,
              forcedFumbles,
              sacks,
              passDeflections: value,
              ints,
              catchAllowed,
            };
            const result = onChange(modelFields);
            value = result?.passDeflections ?? value;
          }
          if (errors.passDeflections?.hasError) {
            runValidationTasks("passDeflections", value);
          }
          setPassDeflections(value);
        }}
        onBlur={() => runValidationTasks("passDeflections", passDeflections)}
        errorMessage={errors.passDeflections?.errorMessage}
        hasError={errors.passDeflections?.hasError}
        {...getOverrideProps(overrides, "passDeflections")}
      ></TextField>
      <TextField
        label="Ints"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={ints}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              passingYards,
              passingTDs,
              completions,
              passingAttempts,
              qbInts,
              mostSacked,
              rushingYards,
              rushingTDs,
              rushingAvg,
              yardsAFH,
              rushingFumbles,
              catches,
              recYards,
              recTDs,
              yardsAfterCatch,
              drops,
              pancakes,
              mostSacksAllowed,
              tackles,
              defTDs,
              tfls,
              forcedFumbles,
              sacks,
              passDeflections,
              ints: value,
              catchAllowed,
            };
            const result = onChange(modelFields);
            value = result?.ints ?? value;
          }
          if (errors.ints?.hasError) {
            runValidationTasks("ints", value);
          }
          setInts(value);
        }}
        onBlur={() => runValidationTasks("ints", ints)}
        errorMessage={errors.ints?.errorMessage}
        hasError={errors.ints?.hasError}
        {...getOverrideProps(overrides, "ints")}
      ></TextField>
      <TextField
        label="Catch allowed"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={catchAllowed}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              passingYards,
              passingTDs,
              completions,
              passingAttempts,
              qbInts,
              mostSacked,
              rushingYards,
              rushingTDs,
              rushingAvg,
              yardsAFH,
              rushingFumbles,
              catches,
              recYards,
              recTDs,
              yardsAfterCatch,
              drops,
              pancakes,
              mostSacksAllowed,
              tackles,
              defTDs,
              tfls,
              forcedFumbles,
              sacks,
              passDeflections,
              ints,
              catchAllowed: value,
            };
            const result = onChange(modelFields);
            value = result?.catchAllowed ?? value;
          }
          if (errors.catchAllowed?.hasError) {
            runValidationTasks("catchAllowed", value);
          }
          setCatchAllowed(value);
        }}
        onBlur={() => runValidationTasks("catchAllowed", catchAllowed)}
        errorMessage={errors.catchAllowed?.errorMessage}
        hasError={errors.catchAllowed?.hasError}
        {...getOverrideProps(overrides, "catchAllowed")}
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
          isDisabled={!(idProp || leagueLeadersModelProp)}
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
              !(idProp || leagueLeadersModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
