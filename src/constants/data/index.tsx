import { IDoctorProps, Notification_Key, OnlineStatusEnum } from "../types";

const DATA_PICK_GENDER = ["MALE", "FEMALE", "OTHER", "SECRET"];
function generateArrayOfYears() {
  var max = new Date().getFullYear();
  var min = max - 100;
  var years = [];
  for (var i = max; i >= min; i--) {
    years.push(i);
  }
  return years;
}

const DATA_YEAR = generateArrayOfYears();

const maxDay = 31;
const DATA_DAY = Array.from(Array(maxDay + 1).keys()).slice(1);

const DATA_MONTH = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];
const DATA_HOSPITAL = [
  {
    id: 0,
    name: "Ho Chi Minh City International Hospitals",
    tel: "+842837442000",
    avatar: {
      path: "https://user-images.githubusercontent.com/87011701/190127832-452c8462-83aa-415a-9391-9e2d9a076d3f.png",
    },
    location: "0.8 km away",
    industry: "Cardiologist",
    rate: 5,
  },
  {
    id: 1,
    name: "HCM Family Medical Practice",
    tel: "+842837442000",
    avatar: {
      path: "https://user-images.githubusercontent.com/87011701/190127799-bd6593c4-ed23-4fe6-8221-0c99b7ebc03a.png",
    },
    location: "0.8 km away",
    industry: "Cardiologist",
    rate: 5,
  },
  {
    id: 2,
    name: "FV Saigon Clinic",
    tel: "+842837442000",
    avatar: {
      path: "https://user-images.githubusercontent.com/87011701/190127767-eaaf0654-ffaf-4972-a92c-a7de77de92df.png",
    },
    location: "0.8 km away",
    industry: "Cardiologist",
    rate: 5,
  },
  {
    id: 3,
    name: "Columbia Asia Gia Dinh Int'l Hospital ",
    tel: "+842837442000",
    avatar: {
      path: "https://user-images.githubusercontent.com/87011701/190127702-85f8f45f-d3b0-49f8-b704-0a61f3121c79.png",
    },
    location: "0.8 km away",
    industry: "Cardiologist",
    rate: 5,
  },
  {
    id: 4,
    name: "Centre Medical International",
    tel: "+842837442000",
    avatar: {
      path: "https://user-images.githubusercontent.com/87011701/190127702-85f8f45f-d3b0-49f8-b704-0a61f3121c79.png",
    },
    location: "0.8 km away",
    industry: "Cardiologist",
    rate: 5,
  },
  {
    id: 5,
    name: "Victoria Healthcare Vietnam",
    tel: "+842837442000",
    avatar: {
      path: "https://user-images.githubusercontent.com/87011701/190127767-eaaf0654-ffaf-4972-a92c-a7de77de92df.png",
    },
    location: "0.8 km away",
    industry: "Cardiologist",
    rate: 5,
  },
  {
    id: 6,
    name: "Vinmec Central Park Int'l Hospital",
    tel: "+842837442000",
    avatar: {
      path: "https://user-images.githubusercontent.com/87011701/190127767-eaaf0654-ffaf-4972-a92c-a7de77de92df.png",
    },
    location: "0.8 km away",
    industry: "Cardiologist",
    rate: 5,
  },
  {
    id: 7,
    name: "International Neurosurgery Hospital",
    tel: "+842837442000",
    avatar: {
      path: "https://user-images.githubusercontent.com/87011701/190127767-eaaf0654-ffaf-4972-a92c-a7de77de92df.png",
    },
    location: "0.8 km away",
    industry: "Cardiologist",
    rate: 5,
  },
];
const DATA_DOCTOR: IDoctorProps[] = [
  {
    id: 1,
    name: "Jonas Smith",
    tel: "+842837442000",
    location: "242 Gleichner Valleys, Robertview,Micronesia",
    industry: "Cardiologist",
    distance: "0.8 km away",
    rate: {
      rateStar: 5.0,
      reviewer: 234,
    },
    avatar: {
      path: "https://user-images.githubusercontent.com/87011701/190119081-1b739923-3710-44e4-8365-0f59822f0bb8.png",
    },
    coordinate: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
    status: OnlineStatusEnum.Online,
  },
  {
    id: 2,
    name: "Jame Wilson",
    tel: "+842837442000",
    location: "242 Gleichner Valleys, Robertview,Micronesia",
    distance: "0.8 km away",
    industry: "GP-general practitioner",
    rate: {
      rateStar: 5.0,
      reviewer: 234,
    },
    avatar: {
      path: "https://user-images.githubusercontent.com/87011701/190119058-a1f5f080-2591-4049-8f74-558d92237f6a.png",
    },
    coordinate: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
    status: OnlineStatusEnum.Online,
  },
  {
    id: 3,
    name: "Franklin Umbrella",
    distance: "0.8 km away",
    tel: "+842837442000",
    industry: "GP-general practitioner",
    location: "242 Gleichner Valleys, Robertview,Micronesia",
    rate: {
      rateStar: 5.0,
      reviewer: 234,
    },
    avatar: {
      path: "https://user-images.githubusercontent.com/87011701/190119251-afdd125d-2773-4ed2-aafd-386717ff9f50.png",
    },
    coordinate: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
    status: OnlineStatusEnum.Online,
  },
  {
    id: 4,
    name: "Kevin Khan",
    location: "242 Gleichner Valleys, Robertview,Micronesia",
    distance: "0.8 km away",
    tel: "+842837442000",
    industry: "Cardiologist",
    rate: {
      rateStar: 5.0,
      reviewer: 234,
    },
    avatar: {
      path: "https://user-images.githubusercontent.com/87011701/190119353-d8e0b134-2206-4b3a-a676-48f9b616c9da.png",
    },
    coordinate: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
    status: OnlineStatusEnum.Online,
  },
  {
    id: 5,
    name: "Jonas Smith",
    tel: "+842837442000",
    distance: "0.8 km away",
    industry: "Cardiologist",
    location: "242 Gleichner Valleys, Robertview,Micronesia",
    rate: {
      rateStar: 5.0,
      reviewer: 234,
    },
    avatar: {
      path: "https://user-images.githubusercontent.com/87011701/190119251-afdd125d-2773-4ed2-aafd-386717ff9f50.png",
    },
    coordinate: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
    status: OnlineStatusEnum.Online,
  },
];
const DATA_SERVICE_PRICE = [
  {
    id: 0,
    title: "Basic",
    price: 169,
    utilities: [
      "2 Doctors",
      "3 Books",
      "Appointment",
      "1 Free Exams",
      "4 Hours Call",
    ],
  },
  {
    id: 1,
    title: "Pro",
    price: 469,
    utilities: [
      "4 Doctors",
      "10 Books",
      "Appointment",
      "4 Free Exams",
      "4 Hours Call",
    ],
  },
  {
    id: 1,
    title: "Premium",
    price: 999,
    utilities: [
      "4 Doctors",
      "10 Books",
      "Appointment",
      "4 Free Exams",
      "4 Hours Call",
    ],
  },
];
const DATA_USER = [
  {
    id: "1",
    name: "Beverley Mash",
    avatar: {
      path: "https://placeimg.com/140/140/any",
    },
    createAt: new Date(),
  },
  {
    id: "1a",
    name: "Beverley Mash",
    avatar: {
      path: "https://placeimg.com/140/140/any",
    },
    createAt: new Date(),
  },
  {
    id: "1b",
    name: "Lily Landy",
    avatar: {
      path: "https://placeimg.com/140/140/any",
    },
    createAt: new Date(),
  },
  {
    id: "1c",
    name: "John Mike",
    avatar: {
      path: "https://placeimg.com/140/140/any",
    },
    createAt: new Date(),
  },
];
const DATA_NOTIFICATION = [
  {
    id: "1",
    type: Notification_Key.Medic,
    title: "It's time to take medical",
    createAt: new Date(),
  },
  {
    id: "2",
    type: Notification_Key.Message,
    title: "Dr.Alexander John send you a messages",
    createAt: new Date(),
  },
  {
    id: "3",
    type: Notification_Key.Meet,
    title: "Meet with Dr.Janna 11:00",
    createAt: new Date(),
  },
  {
    id: "4",
    type: Notification_Key.Medic,
    title: "Heart tonic drink now",
    createAt: new Date(),
  },
  {
    id: "5",
    type: Notification_Key.Medic,
    title: "Tonic drink eyes right now",
    createAt: new Date(),
  },
  {
    id: "6",
    type: Notification_Key.Medic,
    title: "Tonic drink eyes right now",
    createAt: new Date(),
  },
  {
    id: "7",
    type: Notification_Key.Medic,
    title: "It's time to take medical",
    createAt: new Date(),
  },
];
const DATA_DRUGS = [
  {
    name: "Amoxicillin and Clavulanate",
    price: 29,
    image: {
      path: "https://user-images.githubusercontent.com/87011701/191222263-f24bc00a-538c-4a7e-8d4a-77b146fc3f0d.png",
    },
    information: [
      {
        title: "What is amoxicillin?",
        describer:
          "If you are a male over the age of 40 and are suffering from weakness, impotence, pain, stiffness, drooping",
      },
      {
        title: "Important information",
        describer:
          "If you are a male over the age of 40 and are suffering from weakness, impotence, pain, stiffness, drooping",
      },
      {
        title: "Amoxicillin side effects",
        describer:
          "If you are a male over the age of 40 and are suffering from weakness, impotence, pain, stiffness, drooping",
      },
    ],
  },
  {
    name: "Acetaminophen and Hydrocodone",
    price: 29,
    image: {
      path: "https://user-images.githubusercontent.com/87011701/191222263-f24bc00a-538c-4a7e-8d4a-77b146fc3f0d.png",
    },
    information: [
      {
        title: "What is amoxicillin?",
        describer:
          "If you are a male over the age of 40 and are suffering from weakness, impotence, pain, stiffness, drooping",
      },
      {
        title: "Important information",
        describer:
          "If you are a male over the age of 40 and are suffering from weakness, impotence, pain, stiffness, drooping",
      },
      {
        title: "Amoxicillin side effects",
        describer:
          "If you are a male over the age of 40 and are suffering from weakness, impotence, pain, stiffness, drooping",
      },
    ],
  },
  {
    name: "Buprenorphine and Naloxone",
    price: 29,
    image: {
      path: "https://user-images.githubusercontent.com/87011701/191222263-f24bc00a-538c-4a7e-8d4a-77b146fc3f0d.png",
    },
    information: [
      {
        title: "What is amoxicillin?",
        describer:
          "If you are a male over the age of 40 and are suffering from weakness, impotence, pain, stiffness, drooping",
      },
      {
        title: "Important information",
        describer:
          "If you are a male over the age of 40 and are suffering from weakness, impotence, pain, stiffness, drooping",
      },
      {
        title: "Amoxicillin side effects",
        describer:
          "If you are a male over the age of 40 and are suffering from weakness, impotence, pain, stiffness, drooping",
      },
    ],
  },
];
const DATA_NEWS = [
  {
    id: "123",
    image: {
      path: "https://placeimg.com/311/179/nature",
    },
    title: "Can It Help Your Blurred Vision",
    describe: "For many years, when people thought of alcohol and drug",
    createAt: new Date(),
    createBy: DATA_USER[0],
  },
  {
    id: "1",
    image: {
      path: "https://placeimg.com/311/179/nature",
    },
    title: "Can It Help Your Blurred Vision",
    describe: "For many years, when people thought of alcohol and drug",
    createAt: new Date(),
    createBy: DATA_USER[1],
  },
  {
    id: "1a",
    image: {
      path: "https://placeimg.com/311/179/nature",
    },
    title: "Can It Help Your Blurred Vision",
    describe: "For many years, when people thought of alcohol and drug",
    createAt: new Date(),
    createBy: DATA_USER[2],
  },
  {
    id: "1sa",
    image: {
      path: "https://placeimg.com/311/179/nature",
    },
    title: "Can It Help Your Blurred Vision",
    describe: "For many years, when people thought of alcohol and drug",
    createAt: new Date(),
    createBy: DATA_USER[3],
  },
  {
    id: "1aa",
    image: {
      path: "https://placeimg.com/311/179/nature",
    },
    title: "Can It Help Your Blurred Vision",
    describe: "For many years, when people thought of alcohol and drug",
    createAt: new Date(),
    createBy: DATA_USER[2],
  },
  {
    id: "11a",
    image: {
      path: "https://placeimg.com/311/179/nature",
    },
    title: "Can It Help Your Blurred Vision",
    describe: "For many years, when people thought of alcohol and drug",
    createAt: new Date(),
    createBy: DATA_USER[1],
  },
];
export {
  DATA_PICK_GENDER,
  DATA_YEAR,
  DATA_MONTH,
  DATA_DAY,
  DATA_DOCTOR,
  DATA_HOSPITAL,
  DATA_SERVICE_PRICE,
  DATA_NOTIFICATION,
  DATA_USER,
  DATA_DRUGS,
  DATA_NEWS,
};
