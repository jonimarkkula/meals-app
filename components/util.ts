import { DrawerStackParamList, RootStackParamList } from "../navigation/NavigationPages";

export type NavigationProp = {
    navigate: <T extends keyof (RootStackParamList & DrawerStackParamList)>(
      screen: T,
      params?: (RootStackParamList & DrawerStackParamList)[T]
    ) => void;
  };