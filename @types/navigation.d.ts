import { NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

export type MainParamsList = {
  Home: undefined;
};

export type ApplicationStackParamList = {
  Startup: undefined;
  Example: undefined;
  Main: NavigatorScreenParams<MainParamsList>;
  Home: undefined;
};

export type ApplicationScreenProps =
  StackScreenProps<ApplicationStackParamList>;

export type StartupScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'Startup'
>;
export type ExampleScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'Example'
>;
export type HomeScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;
