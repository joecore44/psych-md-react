import React from "react";
import { Image, ImageProps, ImageSourcePropType } from "react-native";
import { IconPack, IconProvider } from "@ui-kitten/components";
import { SvgProps } from "react-native-svg";
import { Icons } from "./icons";

const createIcon = (source: ImageSourcePropType): IconProvider<ImageProps> => {
  return {
    toReactElement: (
      props: JSX.IntrinsicAttributes &
        JSX.IntrinsicClassAttributes<Image> &
        Readonly<ImageProps>
    ) => (
      <Image
        style={{ width: 24, height: 24 }}
        {...props}
        source={source}
        resizeMode="contain"
      />
    ),
  };
};

const AssetIconsPack: IconPack<ImageProps | SvgProps> = {
  name: "assets",
  icons: {
    back: createIcon(Icons.back),
    circleBack: createIcon(Icons.circleBack),
    circleNext: createIcon(Icons.circleNext),
    lock: createIcon(Icons.lock),
    forgotPassword: createIcon(Icons.forgotPassword),
    mail: createIcon(Icons.mail),
    email: createIcon(Icons.email),
    user: createIcon(Icons.user),
    dashboard: createIcon(Icons.dashboard),
    doctor: createIcon(Icons.doctor),
    drugs: createIcon(Icons.drugs),
    profile: createIcon(Icons.profile),
    service: createIcon(Icons.service),
    serviceActive: createIcon(Icons.serviceActive),
    menu: createIcon(Icons.menu),
    appointment: createIcon(Icons.appointment),
    hospital: createIcon(Icons.hospital),
    notification: createIcon(Icons.notification),
    price: createIcon(Icons.price),
    chevron: createIcon(Icons.chevron),
    star: createIcon(Icons.star),
    edit: createIcon(Icons.edit),
    calendar: createIcon(Icons.calendar),
    clock: createIcon(Icons.clock),
    list: createIcon(Icons.list),
    drug: createIcon(Icons.drug),
    map: createIcon(Icons.map),
    phone: createIcon(Icons.phone),
    message: createIcon(Icons.message),
    locate: createIcon(Icons.locate),
    close: createIcon(Icons.close),
    more: createIcon(Icons.more),
    arrowRight: createIcon(Icons.arrowRight),
    info: createIcon(Icons.info),
    hospitalBlue: createIcon(Icons.hospitalBlue),
    add: createIcon(Icons.add),
    plane: createIcon(Icons.plane),
    tick: createIcon(Icons.tick),
    mic: createIcon(Icons.mic),
    micMute: createIcon(Icons.micMute),
    location: createIcon(Icons.location),
    search: createIcon(Icons.search),
    doctorSearch: createIcon(Icons.doctorSearch),
    goal: createIcon(Icons.goal),
    disinfectant: createIcon(Icons.disinfectant),
    weight: createIcon(Icons.weight),
    transfusion: createIcon(Icons.transfusion),
    appleHealth: createIcon(Icons.appleHealth),
    withings: createIcon(Icons.withings),
    ihealth: createIcon(Icons.ihealth),
    miband: createIcon(Icons.miband),
    cerner: createIcon(Icons.cerner),
    heart: createIcon(Icons.heart),
    shop: createIcon(Icons.shop),
    shopBag: createIcon(Icons.shopBag),
    drugLogo: createIcon(Icons.drugLogo),
    expand: createIcon(Icons.expand),
    news: createIcon(Icons.news),
    camera: createIcon(Icons.camera),
    bookmark: createIcon(Icons.bookmark),
    level: createIcon(Icons.level),
    like: createIcon(Icons.like),
    circle: createIcon(Icons.circle),
    bubble: createIcon(Icons.bubble),
  },
};

export default AssetIconsPack;
