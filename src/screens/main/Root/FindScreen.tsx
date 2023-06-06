import React from "react";
import { StyleSheet } from "react-native";
import {
  Datepicker,
  Icon,
  IndexPath,
  Select,
  SelectItem,
  useTheme,
} from "@ui-kitten/components";
import {
  NavigationProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useLayout } from "hooks";

import {
  Container,
  Content,
  Text,
  Header,
  NavigationAction,
  HStack,
  LinearButton,
} from "components";
import { Formik } from "formik";
import _ from "lodash";
import dayjs from "dayjs";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { DATA_HOSPITAL, DATA_DOCTOR } from "constants/data";
import { ServiceKey } from "constants/types";
import { DrawerStackParamList } from "navigation/types";

interface FormikForm {
  hospital: string;
  doctor: string;
  date: Date;
}

const FindScreen = React.memo(() => {
  const theme = useTheme();
  const { navigate, goBack } =
    useNavigation<NavigationProp<DrawerStackParamList>>();
  const { width } = useLayout();
  const route = useRoute();
  const CalenderIcon = (props: any) => <Icon {...props} name="calendar" />;

  const handleFind = (values: FormikForm) => {};

  return (
    <Formik
      validateOnMount={true}
      initialValues={{
        hospital: "",
        doctor: "",
        date: new Date(),
      }}
      onSubmit={handleFind}
    >
      {({ handleSubmit, values, setFieldValue }) => {
        const [dataHospital, setDataHospital] = React.useState(DATA_HOSPITAL);
        const [dataDoctor, setDataDoctor] = React.useState(DATA_DOCTOR);

        const [selectedHospital, setSelectedHospital] =
          React.useState<IndexPath>();
        const [selectDoctor, setSelectDoctor] = React.useState<IndexPath>();

        const [isDatePickerVisible, setTineVisibility] = React.useState(false);
        const toggleTimePicker = () => {
          setTineVisibility(!isDatePickerVisible);
        };

        const handleConfirm = (date: Date) => {
          setFieldValue("date", date);
          setTineVisibility(false);
        };

        const displayHospitalName = () => {
          return (
            <Text
              status={selectedHospital ? "primary" : "platinum"}
              numberOfLines={1}
              maxWidth={220 * (width / 375)}
            >
              {selectedHospital
                ? dataHospital[selectedHospital.row].name
                : "Choose Hospital"}
            </Text>
          );
        };
        const displayDoctorName = () => {
          return (
            <Text
              status={selectDoctor ? "primary" : "platinum"}
              numberOfLines={1}
              maxWidth={220 * (width / 375)}
            >
              {selectDoctor
                ? dataDoctor[selectDoctor.row].name
                : "Choose Doctor"}
            </Text>
          );
        };
        React.useEffect(() => {
          if (selectedHospital?.row) {
            setFieldValue("hospital", dataHospital[selectedHospital?.row].name);
          }
          if (selectDoctor?.row) {
            setFieldValue("doctor", dataDoctor[selectDoctor?.row].name);
          }
        }, [selectedHospital, dataHospital]);
        return (
          <Container style={styles.container}>
            <Header
              // @ts-ignore
              title={`${route?.params?.type}`}
              accessoryLeft={
                <NavigationAction status="white" onPress={goBack} />
              }
            />
            <Content contentContainerStyle={styles.contentContainer}>
              <Text uppercase status="platinum" category="t1" marginBottom={40}>
                how can we take care yourself?
              </Text>
              <Select
                style={styles.spaceButton}
                status="basic"
                selectedIndex={selectedHospital}
                value={displayHospitalName}
                // @ts-ignore
                onSelect={(index) => setSelectedHospital(index)}
              >
                {dataHospital.map((data, index) => {
                  return <SelectItem title={data.name} key={index} />;
                })}
              </Select>
              <Select
                style={styles.spaceButton}
                status="basic"
                selectedIndex={selectDoctor}
                value={displayDoctorName}
                // @ts-ignore
                onSelect={(index) => setSelectDoctor(index)}
              >
                {dataDoctor.map((data, index) => {
                  return <SelectItem title={data.name} key={index} />;
                })}
              </Select>
              <Datepicker
                style={styles.spaceButton}
                date={values.date}
                onSelect={(date) => setFieldValue("date", dayjs(date))}
                accessoryRight={CalenderIcon}
              />

              <HStack
                onPress={toggleTimePicker}
                style={[
                  styles.buttonPicktime,
                  { borderColor: theme["text-platinum-color"] },
                ]}
              >
                <Text>{dayjs(values.date).format("HH:mm")}</Text>
                <Icon
                  pack="assets"
                  name="chevron"
                  style={[
                    styles.chevron,
                    isDatePickerVisible
                      ? {
                          tintColor: theme["text-primary-color"],
                          transform: [{ rotate: "180deg" }],
                        }
                      : {
                          tintColor: theme["text-platinum-color"],
                        },
                  ]}
                />
              </HStack>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="time"
                date={values.date}
                onConfirm={handleConfirm}
                onCancel={toggleTimePicker}
              />
            </Content>
            <LinearButton
              title={
                route?.params &&
                // @ts-ignore
                route?.params?.type === ServiceKey.CreateAppointment
                  ? "BOOK APPOINTMENT"
                  : "FIND"
              }
              onPress={() => {
                handleSubmit();
                // @ts-ignore
                navigate("ResultFindScreen", { type: route?.params?.type });
              }}
              style={styles.spaceButton}
            />
          </Container>
        );
      }}
    </Formik>
  );
});

export default FindScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  contentContainer: {
    paddingHorizontal: 36,
    paddingTop: 40,
  },
  buttonPicktime: {
    borderRadius: 99,
    height: 48,
    borderWidth: 0.7,
    alignItems: "center",
    paddingHorizontal: 24,
  },
  chevron: {
    width: 12,
    height: 12,
    tintColor: "red",
    marginRight: 6,
  },
  spaceButton: {
    marginBottom: 32,
  },
});
