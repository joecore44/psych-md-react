import { ServiceKey } from "constants/types";

export type RootStackParamList = {
  Intro: undefined;
  Auth: { screen: keyof AuthStackParamList };
  Drawer: { screen: keyof DrawerStackParamList };
};

export type AuthStackParamList = {
  Login: undefined;
  SignUp: { screen: keyof CreateAccountParamList };
  ForgotPassword: undefined;
  VerifyScreen: undefined;
};
export type DoctorStackParamList = {
  DoctorScreen: undefined;
  DoctorProfile: undefined;
  DoctorInformation: undefined;
  DoctorWorkAddress: undefined;
  DoctorReview: undefined;
};
export type DrugStackParamList = {
  DrugsScreen: undefined;
  DrugsList: undefined;
  DrugsNews: undefined;
};

export type CreateAccountParamList = {
  SignUpScreen: undefined;
  BasicInformation: undefined;
  YourName: undefined;
  YourBirthday: undefined;
  YourGender: undefined;
  YourWeight: undefined;
  YourHeight: undefined;
};

export type DrawerStackParamList = {
  Main: { screen: keyof MainStackParamList };
  AppointmentScreen: undefined;
  FindScreen: { type: ServiceKey };
  ServicePriceScreen: undefined;
  ResultFindScreen: { type: ServiceKey };
  AppointmentCalendar: undefined;
  AppointmentDetails: undefined;
  NotificationScreen: undefined;
  MapDoctorScreen: undefined;
  DoctorProfile: undefined;
  ChatScreen: undefined;
  CallScreen: undefined;
  BookAppointment: undefined;
  IndicatorSetting: undefined;
  IndicatorDetails: undefined;
  IndicatorTestInput: undefined;
  IndicatorGoal: undefined;
  GoalSettings: undefined;
  InsurancesScreen: undefined;
  DoctorsFavorites: undefined;
  DrugsShop: undefined;
  AddDrugsScreen: undefined;
  DrugsShopDetails: undefined;
  CartListScreen: undefined;
  BillingScreen: undefined;
  NewsDetailsScreen: undefined;
  BookmarkNews: undefined;
  CommentScreen: undefined;
};

export type MainStackParamList = {
  Drugs: { screen: keyof DrugStackParamList };
  Doctors: { screen: keyof DoctorStackParamList };
  Service: undefined;
  Dashboard: undefined;
  Profile: undefined;
};
