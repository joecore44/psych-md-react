import { DrawerActions } from "@react-navigation/native";
import { navigationRef } from "navigation/RootNavigation";

const useDrawer = () => {
  const openDrawer = () => {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(DrawerActions.openDrawer());
    }
  };
  const toggleDrawer = () => {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(DrawerActions.toggleDrawer());
    }
  };
  const closeDrawer = () => {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(DrawerActions.closeDrawer());
    }
  };
  return { openDrawer, closeDrawer, toggleDrawer };
};
export default useDrawer;
