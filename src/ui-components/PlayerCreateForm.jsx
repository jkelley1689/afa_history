/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createPlayer } from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function PlayerCreateForm(props) {
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
    fName: "",
    lName: "",
    age: "",
    speed: "",
    acceleration: "",
    strength: "",
    awareness: "",
    agility: "",
    catch: "",
    carry: "",
    jump: "",
    breakTackle: "",
    tackle: "",
    throwPower: "",
    throwAcc: "",
    passBlock: "",
    runBlock: "",
    kickPower: "",
    kickAcc: "",
    importance: "",
    stamina: "",
    kickReturn: "",
    injury: "",
    toughness: "",
    ego: "",
    position: "",
    wgt: "",
    height: "",
    playerTendency: "",
    roleWeapon: [],
    year: "",
    team: "",
  };
  const [fName, setFName] = React.useState(initialValues.fName);
  const [lName, setLName] = React.useState(initialValues.lName);
  const [age, setAge] = React.useState(initialValues.age);
  const [speed, setSpeed] = React.useState(initialValues.speed);
  const [acceleration, setAcceleration] = React.useState(
    initialValues.acceleration
  );
  const [strength, setStrength] = React.useState(initialValues.strength);
  const [awareness, setAwareness] = React.useState(initialValues.awareness);
  const [agility, setAgility] = React.useState(initialValues.agility);
  const [catch1, setCatch1] = React.useState(initialValues.catch);
  const [carry, setCarry] = React.useState(initialValues.carry);
  const [jump, setJump] = React.useState(initialValues.jump);
  const [breakTackle, setBreakTackle] = React.useState(
    initialValues.breakTackle
  );
  const [tackle, setTackle] = React.useState(initialValues.tackle);
  const [throwPower, setThrowPower] = React.useState(initialValues.throwPower);
  const [throwAcc, setThrowAcc] = React.useState(initialValues.throwAcc);
  const [passBlock, setPassBlock] = React.useState(initialValues.passBlock);
  const [runBlock, setRunBlock] = React.useState(initialValues.runBlock);
  const [kickPower, setKickPower] = React.useState(initialValues.kickPower);
  const [kickAcc, setKickAcc] = React.useState(initialValues.kickAcc);
  const [importance, setImportance] = React.useState(initialValues.importance);
  const [stamina, setStamina] = React.useState(initialValues.stamina);
  const [kickReturn, setKickReturn] = React.useState(initialValues.kickReturn);
  const [injury, setInjury] = React.useState(initialValues.injury);
  const [toughness, setToughness] = React.useState(initialValues.toughness);
  const [ego, setEgo] = React.useState(initialValues.ego);
  const [position, setPosition] = React.useState(initialValues.position);
  const [wgt, setWgt] = React.useState(initialValues.wgt);
  const [height, setHeight] = React.useState(initialValues.height);
  const [playerTendency, setPlayerTendency] = React.useState(
    initialValues.playerTendency
  );
  const [roleWeapon, setRoleWeapon] = React.useState(initialValues.roleWeapon);
  const [year, setYear] = React.useState(initialValues.year);
  const [team, setTeam] = React.useState(initialValues.team);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFName(initialValues.fName);
    setLName(initialValues.lName);
    setAge(initialValues.age);
    setSpeed(initialValues.speed);
    setAcceleration(initialValues.acceleration);
    setStrength(initialValues.strength);
    setAwareness(initialValues.awareness);
    setAgility(initialValues.agility);
    setCatch1(initialValues.catch);
    setCarry(initialValues.carry);
    setJump(initialValues.jump);
    setBreakTackle(initialValues.breakTackle);
    setTackle(initialValues.tackle);
    setThrowPower(initialValues.throwPower);
    setThrowAcc(initialValues.throwAcc);
    setPassBlock(initialValues.passBlock);
    setRunBlock(initialValues.runBlock);
    setKickPower(initialValues.kickPower);
    setKickAcc(initialValues.kickAcc);
    setImportance(initialValues.importance);
    setStamina(initialValues.stamina);
    setKickReturn(initialValues.kickReturn);
    setInjury(initialValues.injury);
    setToughness(initialValues.toughness);
    setEgo(initialValues.ego);
    setPosition(initialValues.position);
    setWgt(initialValues.wgt);
    setHeight(initialValues.height);
    setPlayerTendency(initialValues.playerTendency);
    setRoleWeapon(initialValues.roleWeapon);
    setCurrentRoleWeaponValue("");
    setYear(initialValues.year);
    setTeam(initialValues.team);
    setErrors({});
  };
  const [currentRoleWeaponValue, setCurrentRoleWeaponValue] =
    React.useState("");
  const roleWeaponRef = React.createRef();
  const validations = {
    fName: [],
    lName: [],
    age: [],
    speed: [],
    acceleration: [],
    strength: [],
    awareness: [],
    agility: [],
    catch: [],
    carry: [],
    jump: [],
    breakTackle: [],
    tackle: [],
    throwPower: [],
    throwAcc: [],
    passBlock: [],
    runBlock: [],
    kickPower: [],
    kickAcc: [],
    importance: [],
    stamina: [],
    kickReturn: [],
    injury: [],
    toughness: [],
    ego: [],
    position: [],
    wgt: [],
    height: [],
    playerTendency: [],
    roleWeapon: [],
    year: [],
    team: [],
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
          fName,
          lName,
          age,
          speed,
          acceleration,
          strength,
          awareness,
          agility,
          catch: catch1,
          carry,
          jump,
          breakTackle,
          tackle,
          throwPower,
          throwAcc,
          passBlock,
          runBlock,
          kickPower,
          kickAcc,
          importance,
          stamina,
          kickReturn,
          injury,
          toughness,
          ego,
          position,
          wgt,
          height,
          playerTendency,
          roleWeapon,
          year,
          team,
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
            query: createPlayer.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "PlayerCreateForm")}
      {...rest}
    >
      <TextField
        label="F name"
        isRequired={false}
        isReadOnly={false}
        value={fName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fName: value,
              lName,
              age,
              speed,
              acceleration,
              strength,
              awareness,
              agility,
              catch: catch1,
              carry,
              jump,
              breakTackle,
              tackle,
              throwPower,
              throwAcc,
              passBlock,
              runBlock,
              kickPower,
              kickAcc,
              importance,
              stamina,
              kickReturn,
              injury,
              toughness,
              ego,
              position,
              wgt,
              height,
              playerTendency,
              roleWeapon,
              year,
              team,
            };
            const result = onChange(modelFields);
            value = result?.fName ?? value;
          }
          if (errors.fName?.hasError) {
            runValidationTasks("fName", value);
          }
          setFName(value);
        }}
        onBlur={() => runValidationTasks("fName", fName)}
        errorMessage={errors.fName?.errorMessage}
        hasError={errors.fName?.hasError}
        {...getOverrideProps(overrides, "fName")}
      ></TextField>
      <TextField
        label="L name"
        isRequired={false}
        isReadOnly={false}
        value={lName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fName,
              lName: value,
              age,
              speed,
              acceleration,
              strength,
              awareness,
              agility,
              catch: catch1,
              carry,
              jump,
              breakTackle,
              tackle,
              throwPower,
              throwAcc,
              passBlock,
              runBlock,
              kickPower,
              kickAcc,
              importance,
              stamina,
              kickReturn,
              injury,
              toughness,
              ego,
              position,
              wgt,
              height,
              playerTendency,
              roleWeapon,
              year,
              team,
            };
            const result = onChange(modelFields);
            value = result?.lName ?? value;
          }
          if (errors.lName?.hasError) {
            runValidationTasks("lName", value);
          }
          setLName(value);
        }}
        onBlur={() => runValidationTasks("lName", lName)}
        errorMessage={errors.lName?.errorMessage}
        hasError={errors.lName?.hasError}
        {...getOverrideProps(overrides, "lName")}
      ></TextField>
      <TextField
        label="Age"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={age}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              age: value,
              speed,
              acceleration,
              strength,
              awareness,
              agility,
              catch: catch1,
              carry,
              jump,
              breakTackle,
              tackle,
              throwPower,
              throwAcc,
              passBlock,
              runBlock,
              kickPower,
              kickAcc,
              importance,
              stamina,
              kickReturn,
              injury,
              toughness,
              ego,
              position,
              wgt,
              height,
              playerTendency,
              roleWeapon,
              year,
              team,
            };
            const result = onChange(modelFields);
            value = result?.age ?? value;
          }
          if (errors.age?.hasError) {
            runValidationTasks("age", value);
          }
          setAge(value);
        }}
        onBlur={() => runValidationTasks("age", age)}
        errorMessage={errors.age?.errorMessage}
        hasError={errors.age?.hasError}
        {...getOverrideProps(overrides, "age")}
      ></TextField>
      <TextField
        label="Speed"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={speed}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              age,
              speed: value,
              acceleration,
              strength,
              awareness,
              agility,
              catch: catch1,
              carry,
              jump,
              breakTackle,
              tackle,
              throwPower,
              throwAcc,
              passBlock,
              runBlock,
              kickPower,
              kickAcc,
              importance,
              stamina,
              kickReturn,
              injury,
              toughness,
              ego,
              position,
              wgt,
              height,
              playerTendency,
              roleWeapon,
              year,
              team,
            };
            const result = onChange(modelFields);
            value = result?.speed ?? value;
          }
          if (errors.speed?.hasError) {
            runValidationTasks("speed", value);
          }
          setSpeed(value);
        }}
        onBlur={() => runValidationTasks("speed", speed)}
        errorMessage={errors.speed?.errorMessage}
        hasError={errors.speed?.hasError}
        {...getOverrideProps(overrides, "speed")}
      ></TextField>
      <TextField
        label="Acceleration"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={acceleration}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              age,
              speed,
              acceleration: value,
              strength,
              awareness,
              agility,
              catch: catch1,
              carry,
              jump,
              breakTackle,
              tackle,
              throwPower,
              throwAcc,
              passBlock,
              runBlock,
              kickPower,
              kickAcc,
              importance,
              stamina,
              kickReturn,
              injury,
              toughness,
              ego,
              position,
              wgt,
              height,
              playerTendency,
              roleWeapon,
              year,
              team,
            };
            const result = onChange(modelFields);
            value = result?.acceleration ?? value;
          }
          if (errors.acceleration?.hasError) {
            runValidationTasks("acceleration", value);
          }
          setAcceleration(value);
        }}
        onBlur={() => runValidationTasks("acceleration", acceleration)}
        errorMessage={errors.acceleration?.errorMessage}
        hasError={errors.acceleration?.hasError}
        {...getOverrideProps(overrides, "acceleration")}
      ></TextField>
      <TextField
        label="Strength"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={strength}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              age,
              speed,
              acceleration,
              strength: value,
              awareness,
              agility,
              catch: catch1,
              carry,
              jump,
              breakTackle,
              tackle,
              throwPower,
              throwAcc,
              passBlock,
              runBlock,
              kickPower,
              kickAcc,
              importance,
              stamina,
              kickReturn,
              injury,
              toughness,
              ego,
              position,
              wgt,
              height,
              playerTendency,
              roleWeapon,
              year,
              team,
            };
            const result = onChange(modelFields);
            value = result?.strength ?? value;
          }
          if (errors.strength?.hasError) {
            runValidationTasks("strength", value);
          }
          setStrength(value);
        }}
        onBlur={() => runValidationTasks("strength", strength)}
        errorMessage={errors.strength?.errorMessage}
        hasError={errors.strength?.hasError}
        {...getOverrideProps(overrides, "strength")}
      ></TextField>
      <TextField
        label="Awareness"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={awareness}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              age,
              speed,
              acceleration,
              strength,
              awareness: value,
              agility,
              catch: catch1,
              carry,
              jump,
              breakTackle,
              tackle,
              throwPower,
              throwAcc,
              passBlock,
              runBlock,
              kickPower,
              kickAcc,
              importance,
              stamina,
              kickReturn,
              injury,
              toughness,
              ego,
              position,
              wgt,
              height,
              playerTendency,
              roleWeapon,
              year,
              team,
            };
            const result = onChange(modelFields);
            value = result?.awareness ?? value;
          }
          if (errors.awareness?.hasError) {
            runValidationTasks("awareness", value);
          }
          setAwareness(value);
        }}
        onBlur={() => runValidationTasks("awareness", awareness)}
        errorMessage={errors.awareness?.errorMessage}
        hasError={errors.awareness?.hasError}
        {...getOverrideProps(overrides, "awareness")}
      ></TextField>
      <TextField
        label="Agility"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={agility}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              age,
              speed,
              acceleration,
              strength,
              awareness,
              agility: value,
              catch: catch1,
              carry,
              jump,
              breakTackle,
              tackle,
              throwPower,
              throwAcc,
              passBlock,
              runBlock,
              kickPower,
              kickAcc,
              importance,
              stamina,
              kickReturn,
              injury,
              toughness,
              ego,
              position,
              wgt,
              height,
              playerTendency,
              roleWeapon,
              year,
              team,
            };
            const result = onChange(modelFields);
            value = result?.agility ?? value;
          }
          if (errors.agility?.hasError) {
            runValidationTasks("agility", value);
          }
          setAgility(value);
        }}
        onBlur={() => runValidationTasks("agility", agility)}
        errorMessage={errors.agility?.errorMessage}
        hasError={errors.agility?.hasError}
        {...getOverrideProps(overrides, "agility")}
      ></TextField>
      <TextField
        label="Catch"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={catch1}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              age,
              speed,
              acceleration,
              strength,
              awareness,
              agility,
              catch: value,
              carry,
              jump,
              breakTackle,
              tackle,
              throwPower,
              throwAcc,
              passBlock,
              runBlock,
              kickPower,
              kickAcc,
              importance,
              stamina,
              kickReturn,
              injury,
              toughness,
              ego,
              position,
              wgt,
              height,
              playerTendency,
              roleWeapon,
              year,
              team,
            };
            const result = onChange(modelFields);
            value = result?.catch ?? value;
          }
          if (errors.catch?.hasError) {
            runValidationTasks("catch", value);
          }
          setCatch1(value);
        }}
        onBlur={() => runValidationTasks("catch", catch1)}
        errorMessage={errors.catch?.errorMessage}
        hasError={errors.catch?.hasError}
        {...getOverrideProps(overrides, "catch")}
      ></TextField>
      <TextField
        label="Carry"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={carry}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              age,
              speed,
              acceleration,
              strength,
              awareness,
              agility,
              catch: catch1,
              carry: value,
              jump,
              breakTackle,
              tackle,
              throwPower,
              throwAcc,
              passBlock,
              runBlock,
              kickPower,
              kickAcc,
              importance,
              stamina,
              kickReturn,
              injury,
              toughness,
              ego,
              position,
              wgt,
              height,
              playerTendency,
              roleWeapon,
              year,
              team,
            };
            const result = onChange(modelFields);
            value = result?.carry ?? value;
          }
          if (errors.carry?.hasError) {
            runValidationTasks("carry", value);
          }
          setCarry(value);
        }}
        onBlur={() => runValidationTasks("carry", carry)}
        errorMessage={errors.carry?.errorMessage}
        hasError={errors.carry?.hasError}
        {...getOverrideProps(overrides, "carry")}
      ></TextField>
      <TextField
        label="Jump"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={jump}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              age,
              speed,
              acceleration,
              strength,
              awareness,
              agility,
              catch: catch1,
              carry,
              jump: value,
              breakTackle,
              tackle,
              throwPower,
              throwAcc,
              passBlock,
              runBlock,
              kickPower,
              kickAcc,
              importance,
              stamina,
              kickReturn,
              injury,
              toughness,
              ego,
              position,
              wgt,
              height,
              playerTendency,
              roleWeapon,
              year,
              team,
            };
            const result = onChange(modelFields);
            value = result?.jump ?? value;
          }
          if (errors.jump?.hasError) {
            runValidationTasks("jump", value);
          }
          setJump(value);
        }}
        onBlur={() => runValidationTasks("jump", jump)}
        errorMessage={errors.jump?.errorMessage}
        hasError={errors.jump?.hasError}
        {...getOverrideProps(overrides, "jump")}
      ></TextField>
      <TextField
        label="Break tackle"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={breakTackle}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              age,
              speed,
              acceleration,
              strength,
              awareness,
              agility,
              catch: catch1,
              carry,
              jump,
              breakTackle: value,
              tackle,
              throwPower,
              throwAcc,
              passBlock,
              runBlock,
              kickPower,
              kickAcc,
              importance,
              stamina,
              kickReturn,
              injury,
              toughness,
              ego,
              position,
              wgt,
              height,
              playerTendency,
              roleWeapon,
              year,
              team,
            };
            const result = onChange(modelFields);
            value = result?.breakTackle ?? value;
          }
          if (errors.breakTackle?.hasError) {
            runValidationTasks("breakTackle", value);
          }
          setBreakTackle(value);
        }}
        onBlur={() => runValidationTasks("breakTackle", breakTackle)}
        errorMessage={errors.breakTackle?.errorMessage}
        hasError={errors.breakTackle?.hasError}
        {...getOverrideProps(overrides, "breakTackle")}
      ></TextField>
      <TextField
        label="Tackle"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={tackle}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              age,
              speed,
              acceleration,
              strength,
              awareness,
              agility,
              catch: catch1,
              carry,
              jump,
              breakTackle,
              tackle: value,
              throwPower,
              throwAcc,
              passBlock,
              runBlock,
              kickPower,
              kickAcc,
              importance,
              stamina,
              kickReturn,
              injury,
              toughness,
              ego,
              position,
              wgt,
              height,
              playerTendency,
              roleWeapon,
              year,
              team,
            };
            const result = onChange(modelFields);
            value = result?.tackle ?? value;
          }
          if (errors.tackle?.hasError) {
            runValidationTasks("tackle", value);
          }
          setTackle(value);
        }}
        onBlur={() => runValidationTasks("tackle", tackle)}
        errorMessage={errors.tackle?.errorMessage}
        hasError={errors.tackle?.hasError}
        {...getOverrideProps(overrides, "tackle")}
      ></TextField>
      <TextField
        label="Throw power"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={throwPower}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              age,
              speed,
              acceleration,
              strength,
              awareness,
              agility,
              catch: catch1,
              carry,
              jump,
              breakTackle,
              tackle,
              throwPower: value,
              throwAcc,
              passBlock,
              runBlock,
              kickPower,
              kickAcc,
              importance,
              stamina,
              kickReturn,
              injury,
              toughness,
              ego,
              position,
              wgt,
              height,
              playerTendency,
              roleWeapon,
              year,
              team,
            };
            const result = onChange(modelFields);
            value = result?.throwPower ?? value;
          }
          if (errors.throwPower?.hasError) {
            runValidationTasks("throwPower", value);
          }
          setThrowPower(value);
        }}
        onBlur={() => runValidationTasks("throwPower", throwPower)}
        errorMessage={errors.throwPower?.errorMessage}
        hasError={errors.throwPower?.hasError}
        {...getOverrideProps(overrides, "throwPower")}
      ></TextField>
      <TextField
        label="Throw acc"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={throwAcc}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              age,
              speed,
              acceleration,
              strength,
              awareness,
              agility,
              catch: catch1,
              carry,
              jump,
              breakTackle,
              tackle,
              throwPower,
              throwAcc: value,
              passBlock,
              runBlock,
              kickPower,
              kickAcc,
              importance,
              stamina,
              kickReturn,
              injury,
              toughness,
              ego,
              position,
              wgt,
              height,
              playerTendency,
              roleWeapon,
              year,
              team,
            };
            const result = onChange(modelFields);
            value = result?.throwAcc ?? value;
          }
          if (errors.throwAcc?.hasError) {
            runValidationTasks("throwAcc", value);
          }
          setThrowAcc(value);
        }}
        onBlur={() => runValidationTasks("throwAcc", throwAcc)}
        errorMessage={errors.throwAcc?.errorMessage}
        hasError={errors.throwAcc?.hasError}
        {...getOverrideProps(overrides, "throwAcc")}
      ></TextField>
      <TextField
        label="Pass block"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={passBlock}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              age,
              speed,
              acceleration,
              strength,
              awareness,
              agility,
              catch: catch1,
              carry,
              jump,
              breakTackle,
              tackle,
              throwPower,
              throwAcc,
              passBlock: value,
              runBlock,
              kickPower,
              kickAcc,
              importance,
              stamina,
              kickReturn,
              injury,
              toughness,
              ego,
              position,
              wgt,
              height,
              playerTendency,
              roleWeapon,
              year,
              team,
            };
            const result = onChange(modelFields);
            value = result?.passBlock ?? value;
          }
          if (errors.passBlock?.hasError) {
            runValidationTasks("passBlock", value);
          }
          setPassBlock(value);
        }}
        onBlur={() => runValidationTasks("passBlock", passBlock)}
        errorMessage={errors.passBlock?.errorMessage}
        hasError={errors.passBlock?.hasError}
        {...getOverrideProps(overrides, "passBlock")}
      ></TextField>
      <TextField
        label="Run block"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={runBlock}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              age,
              speed,
              acceleration,
              strength,
              awareness,
              agility,
              catch: catch1,
              carry,
              jump,
              breakTackle,
              tackle,
              throwPower,
              throwAcc,
              passBlock,
              runBlock: value,
              kickPower,
              kickAcc,
              importance,
              stamina,
              kickReturn,
              injury,
              toughness,
              ego,
              position,
              wgt,
              height,
              playerTendency,
              roleWeapon,
              year,
              team,
            };
            const result = onChange(modelFields);
            value = result?.runBlock ?? value;
          }
          if (errors.runBlock?.hasError) {
            runValidationTasks("runBlock", value);
          }
          setRunBlock(value);
        }}
        onBlur={() => runValidationTasks("runBlock", runBlock)}
        errorMessage={errors.runBlock?.errorMessage}
        hasError={errors.runBlock?.hasError}
        {...getOverrideProps(overrides, "runBlock")}
      ></TextField>
      <TextField
        label="Kick power"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={kickPower}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              age,
              speed,
              acceleration,
              strength,
              awareness,
              agility,
              catch: catch1,
              carry,
              jump,
              breakTackle,
              tackle,
              throwPower,
              throwAcc,
              passBlock,
              runBlock,
              kickPower: value,
              kickAcc,
              importance,
              stamina,
              kickReturn,
              injury,
              toughness,
              ego,
              position,
              wgt,
              height,
              playerTendency,
              roleWeapon,
              year,
              team,
            };
            const result = onChange(modelFields);
            value = result?.kickPower ?? value;
          }
          if (errors.kickPower?.hasError) {
            runValidationTasks("kickPower", value);
          }
          setKickPower(value);
        }}
        onBlur={() => runValidationTasks("kickPower", kickPower)}
        errorMessage={errors.kickPower?.errorMessage}
        hasError={errors.kickPower?.hasError}
        {...getOverrideProps(overrides, "kickPower")}
      ></TextField>
      <TextField
        label="Kick acc"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={kickAcc}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              age,
              speed,
              acceleration,
              strength,
              awareness,
              agility,
              catch: catch1,
              carry,
              jump,
              breakTackle,
              tackle,
              throwPower,
              throwAcc,
              passBlock,
              runBlock,
              kickPower,
              kickAcc: value,
              importance,
              stamina,
              kickReturn,
              injury,
              toughness,
              ego,
              position,
              wgt,
              height,
              playerTendency,
              roleWeapon,
              year,
              team,
            };
            const result = onChange(modelFields);
            value = result?.kickAcc ?? value;
          }
          if (errors.kickAcc?.hasError) {
            runValidationTasks("kickAcc", value);
          }
          setKickAcc(value);
        }}
        onBlur={() => runValidationTasks("kickAcc", kickAcc)}
        errorMessage={errors.kickAcc?.errorMessage}
        hasError={errors.kickAcc?.hasError}
        {...getOverrideProps(overrides, "kickAcc")}
      ></TextField>
      <TextField
        label="Importance"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={importance}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              age,
              speed,
              acceleration,
              strength,
              awareness,
              agility,
              catch: catch1,
              carry,
              jump,
              breakTackle,
              tackle,
              throwPower,
              throwAcc,
              passBlock,
              runBlock,
              kickPower,
              kickAcc,
              importance: value,
              stamina,
              kickReturn,
              injury,
              toughness,
              ego,
              position,
              wgt,
              height,
              playerTendency,
              roleWeapon,
              year,
              team,
            };
            const result = onChange(modelFields);
            value = result?.importance ?? value;
          }
          if (errors.importance?.hasError) {
            runValidationTasks("importance", value);
          }
          setImportance(value);
        }}
        onBlur={() => runValidationTasks("importance", importance)}
        errorMessage={errors.importance?.errorMessage}
        hasError={errors.importance?.hasError}
        {...getOverrideProps(overrides, "importance")}
      ></TextField>
      <TextField
        label="Stamina"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={stamina}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              age,
              speed,
              acceleration,
              strength,
              awareness,
              agility,
              catch: catch1,
              carry,
              jump,
              breakTackle,
              tackle,
              throwPower,
              throwAcc,
              passBlock,
              runBlock,
              kickPower,
              kickAcc,
              importance,
              stamina: value,
              kickReturn,
              injury,
              toughness,
              ego,
              position,
              wgt,
              height,
              playerTendency,
              roleWeapon,
              year,
              team,
            };
            const result = onChange(modelFields);
            value = result?.stamina ?? value;
          }
          if (errors.stamina?.hasError) {
            runValidationTasks("stamina", value);
          }
          setStamina(value);
        }}
        onBlur={() => runValidationTasks("stamina", stamina)}
        errorMessage={errors.stamina?.errorMessage}
        hasError={errors.stamina?.hasError}
        {...getOverrideProps(overrides, "stamina")}
      ></TextField>
      <TextField
        label="Kick return"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={kickReturn}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              age,
              speed,
              acceleration,
              strength,
              awareness,
              agility,
              catch: catch1,
              carry,
              jump,
              breakTackle,
              tackle,
              throwPower,
              throwAcc,
              passBlock,
              runBlock,
              kickPower,
              kickAcc,
              importance,
              stamina,
              kickReturn: value,
              injury,
              toughness,
              ego,
              position,
              wgt,
              height,
              playerTendency,
              roleWeapon,
              year,
              team,
            };
            const result = onChange(modelFields);
            value = result?.kickReturn ?? value;
          }
          if (errors.kickReturn?.hasError) {
            runValidationTasks("kickReturn", value);
          }
          setKickReturn(value);
        }}
        onBlur={() => runValidationTasks("kickReturn", kickReturn)}
        errorMessage={errors.kickReturn?.errorMessage}
        hasError={errors.kickReturn?.hasError}
        {...getOverrideProps(overrides, "kickReturn")}
      ></TextField>
      <TextField
        label="Injury"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={injury}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              age,
              speed,
              acceleration,
              strength,
              awareness,
              agility,
              catch: catch1,
              carry,
              jump,
              breakTackle,
              tackle,
              throwPower,
              throwAcc,
              passBlock,
              runBlock,
              kickPower,
              kickAcc,
              importance,
              stamina,
              kickReturn,
              injury: value,
              toughness,
              ego,
              position,
              wgt,
              height,
              playerTendency,
              roleWeapon,
              year,
              team,
            };
            const result = onChange(modelFields);
            value = result?.injury ?? value;
          }
          if (errors.injury?.hasError) {
            runValidationTasks("injury", value);
          }
          setInjury(value);
        }}
        onBlur={() => runValidationTasks("injury", injury)}
        errorMessage={errors.injury?.errorMessage}
        hasError={errors.injury?.hasError}
        {...getOverrideProps(overrides, "injury")}
      ></TextField>
      <TextField
        label="Toughness"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={toughness}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              age,
              speed,
              acceleration,
              strength,
              awareness,
              agility,
              catch: catch1,
              carry,
              jump,
              breakTackle,
              tackle,
              throwPower,
              throwAcc,
              passBlock,
              runBlock,
              kickPower,
              kickAcc,
              importance,
              stamina,
              kickReturn,
              injury,
              toughness: value,
              ego,
              position,
              wgt,
              height,
              playerTendency,
              roleWeapon,
              year,
              team,
            };
            const result = onChange(modelFields);
            value = result?.toughness ?? value;
          }
          if (errors.toughness?.hasError) {
            runValidationTasks("toughness", value);
          }
          setToughness(value);
        }}
        onBlur={() => runValidationTasks("toughness", toughness)}
        errorMessage={errors.toughness?.errorMessage}
        hasError={errors.toughness?.hasError}
        {...getOverrideProps(overrides, "toughness")}
      ></TextField>
      <TextField
        label="Ego"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={ego}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              age,
              speed,
              acceleration,
              strength,
              awareness,
              agility,
              catch: catch1,
              carry,
              jump,
              breakTackle,
              tackle,
              throwPower,
              throwAcc,
              passBlock,
              runBlock,
              kickPower,
              kickAcc,
              importance,
              stamina,
              kickReturn,
              injury,
              toughness,
              ego: value,
              position,
              wgt,
              height,
              playerTendency,
              roleWeapon,
              year,
              team,
            };
            const result = onChange(modelFields);
            value = result?.ego ?? value;
          }
          if (errors.ego?.hasError) {
            runValidationTasks("ego", value);
          }
          setEgo(value);
        }}
        onBlur={() => runValidationTasks("ego", ego)}
        errorMessage={errors.ego?.errorMessage}
        hasError={errors.ego?.hasError}
        {...getOverrideProps(overrides, "ego")}
      ></TextField>
      <TextField
        label="Position"
        isRequired={false}
        isReadOnly={false}
        value={position}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              age,
              speed,
              acceleration,
              strength,
              awareness,
              agility,
              catch: catch1,
              carry,
              jump,
              breakTackle,
              tackle,
              throwPower,
              throwAcc,
              passBlock,
              runBlock,
              kickPower,
              kickAcc,
              importance,
              stamina,
              kickReturn,
              injury,
              toughness,
              ego,
              position: value,
              wgt,
              height,
              playerTendency,
              roleWeapon,
              year,
              team,
            };
            const result = onChange(modelFields);
            value = result?.position ?? value;
          }
          if (errors.position?.hasError) {
            runValidationTasks("position", value);
          }
          setPosition(value);
        }}
        onBlur={() => runValidationTasks("position", position)}
        errorMessage={errors.position?.errorMessage}
        hasError={errors.position?.hasError}
        {...getOverrideProps(overrides, "position")}
      ></TextField>
      <TextField
        label="Wgt"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={wgt}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              age,
              speed,
              acceleration,
              strength,
              awareness,
              agility,
              catch: catch1,
              carry,
              jump,
              breakTackle,
              tackle,
              throwPower,
              throwAcc,
              passBlock,
              runBlock,
              kickPower,
              kickAcc,
              importance,
              stamina,
              kickReturn,
              injury,
              toughness,
              ego,
              position,
              wgt: value,
              height,
              playerTendency,
              roleWeapon,
              year,
              team,
            };
            const result = onChange(modelFields);
            value = result?.wgt ?? value;
          }
          if (errors.wgt?.hasError) {
            runValidationTasks("wgt", value);
          }
          setWgt(value);
        }}
        onBlur={() => runValidationTasks("wgt", wgt)}
        errorMessage={errors.wgt?.errorMessage}
        hasError={errors.wgt?.hasError}
        {...getOverrideProps(overrides, "wgt")}
      ></TextField>
      <TextField
        label="Height"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={height}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              age,
              speed,
              acceleration,
              strength,
              awareness,
              agility,
              catch: catch1,
              carry,
              jump,
              breakTackle,
              tackle,
              throwPower,
              throwAcc,
              passBlock,
              runBlock,
              kickPower,
              kickAcc,
              importance,
              stamina,
              kickReturn,
              injury,
              toughness,
              ego,
              position,
              wgt,
              height: value,
              playerTendency,
              roleWeapon,
              year,
              team,
            };
            const result = onChange(modelFields);
            value = result?.height ?? value;
          }
          if (errors.height?.hasError) {
            runValidationTasks("height", value);
          }
          setHeight(value);
        }}
        onBlur={() => runValidationTasks("height", height)}
        errorMessage={errors.height?.errorMessage}
        hasError={errors.height?.hasError}
        {...getOverrideProps(overrides, "height")}
      ></TextField>
      <TextField
        label="Player tendency"
        isRequired={false}
        isReadOnly={false}
        value={playerTendency}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              age,
              speed,
              acceleration,
              strength,
              awareness,
              agility,
              catch: catch1,
              carry,
              jump,
              breakTackle,
              tackle,
              throwPower,
              throwAcc,
              passBlock,
              runBlock,
              kickPower,
              kickAcc,
              importance,
              stamina,
              kickReturn,
              injury,
              toughness,
              ego,
              position,
              wgt,
              height,
              playerTendency: value,
              roleWeapon,
              year,
              team,
            };
            const result = onChange(modelFields);
            value = result?.playerTendency ?? value;
          }
          if (errors.playerTendency?.hasError) {
            runValidationTasks("playerTendency", value);
          }
          setPlayerTendency(value);
        }}
        onBlur={() => runValidationTasks("playerTendency", playerTendency)}
        errorMessage={errors.playerTendency?.errorMessage}
        hasError={errors.playerTendency?.hasError}
        {...getOverrideProps(overrides, "playerTendency")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              age,
              speed,
              acceleration,
              strength,
              awareness,
              agility,
              catch: catch1,
              carry,
              jump,
              breakTackle,
              tackle,
              throwPower,
              throwAcc,
              passBlock,
              runBlock,
              kickPower,
              kickAcc,
              importance,
              stamina,
              kickReturn,
              injury,
              toughness,
              ego,
              position,
              wgt,
              height,
              playerTendency,
              roleWeapon: values,
              year,
              team,
            };
            const result = onChange(modelFields);
            values = result?.roleWeapon ?? values;
          }
          setRoleWeapon(values);
          setCurrentRoleWeaponValue("");
        }}
        currentFieldValue={currentRoleWeaponValue}
        label={"Role weapon"}
        items={roleWeapon}
        hasError={errors?.roleWeapon?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("roleWeapon", currentRoleWeaponValue)
        }
        errorMessage={errors?.roleWeapon?.errorMessage}
        setFieldValue={setCurrentRoleWeaponValue}
        inputFieldRef={roleWeaponRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Role weapon"
          isRequired={false}
          isReadOnly={false}
          value={currentRoleWeaponValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.roleWeapon?.hasError) {
              runValidationTasks("roleWeapon", value);
            }
            setCurrentRoleWeaponValue(value);
          }}
          onBlur={() =>
            runValidationTasks("roleWeapon", currentRoleWeaponValue)
          }
          errorMessage={errors.roleWeapon?.errorMessage}
          hasError={errors.roleWeapon?.hasError}
          ref={roleWeaponRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "roleWeapon")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Year"
        isRequired={false}
        isReadOnly={false}
        value={year}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              age,
              speed,
              acceleration,
              strength,
              awareness,
              agility,
              catch: catch1,
              carry,
              jump,
              breakTackle,
              tackle,
              throwPower,
              throwAcc,
              passBlock,
              runBlock,
              kickPower,
              kickAcc,
              importance,
              stamina,
              kickReturn,
              injury,
              toughness,
              ego,
              position,
              wgt,
              height,
              playerTendency,
              roleWeapon,
              year: value,
              team,
            };
            const result = onChange(modelFields);
            value = result?.year ?? value;
          }
          if (errors.year?.hasError) {
            runValidationTasks("year", value);
          }
          setYear(value);
        }}
        onBlur={() => runValidationTasks("year", year)}
        errorMessage={errors.year?.errorMessage}
        hasError={errors.year?.hasError}
        {...getOverrideProps(overrides, "year")}
      ></TextField>
      <TextField
        label="Team"
        isRequired={false}
        isReadOnly={false}
        value={team}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              age,
              speed,
              acceleration,
              strength,
              awareness,
              agility,
              catch: catch1,
              carry,
              jump,
              breakTackle,
              tackle,
              throwPower,
              throwAcc,
              passBlock,
              runBlock,
              kickPower,
              kickAcc,
              importance,
              stamina,
              kickReturn,
              injury,
              toughness,
              ego,
              position,
              wgt,
              height,
              playerTendency,
              roleWeapon,
              year,
              team: value,
            };
            const result = onChange(modelFields);
            value = result?.team ?? value;
          }
          if (errors.team?.hasError) {
            runValidationTasks("team", value);
          }
          setTeam(value);
        }}
        onBlur={() => runValidationTasks("team", team)}
        errorMessage={errors.team?.errorMessage}
        hasError={errors.team?.hasError}
        {...getOverrideProps(overrides, "team")}
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
