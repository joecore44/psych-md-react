export interface ISelectScreenProps {
  _onNext?(): void;
  onChangeValue: (e: string | React.ChangeEvent<any>) => void;
}
export interface IHospitalsProps extends IDoctorProps {}

export interface IDoctorProps {
  id: number;
  name: string;
  tel: string;
  location: string;
  industry: string;
  distance: string;
  rate: {
    rateStar: number;
    reviewer: number;
  };
  status: OnlineStatusEnum;
  avatar: {
    path: string;
  };
  coordinate: {
    latitude: number;
    longitude: number;
  };
}
export interface IUserProps {
  id: string;
  avatar: {
    path: string;
  };
  name: string;
  createAt: Date;
}

export interface INotificationProps {
  id: string;
  type: Notification_Key;
  title: string;
  createAt: Date;
}
export interface IDrugsProps {
  name: string;
  image: {
    path: string;
  };
  price: number;
  createAt: Date;
  createdBy: IUserProps;
  information: {
    title: string;
    describer: string;
  }[];
}
export interface DrugsNewsProps {
  id: string;
  image: {
    path: string;
  };
  title: string;
  describe: string;
}
export enum ServiceKey {
  FindDoctor = "Find Doctor",
  FindHospital = "Find Hospital",
  CreateAppointment = "Create Appointment",
}
export enum AsyncStorageKey {
  Username = "username",
}
export enum Animation_Types_Enum {
  SlideBottom = "SlideBottom",
  SlideTop = "SlideTop",
  SlideLeft = "SlideLeft",
  SlideRight = "SlideRight",
}
export enum Notification_Key {
  Message = "Message",
  Medic = "Medical",
  Meet = "Meet",
}
export enum OnlineStatusEnum {
  Online = "Online",
  Offline = "Offline",
  JustLeave = "JustLeave",
}
