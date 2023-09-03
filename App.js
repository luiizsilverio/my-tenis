import 'react-native-gesture-handler';

import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import * as SplashScreen from 'expo-splash-screen';

import useLoadFonts from './src/hooks/useLoadFonts';
import { Loading } from './src/components/Loading';
import Routes from './src/router';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { fontsLoaded, fontError, onLayoutRootView } = useLoadFonts();

  if (!fontsLoaded && !fontError) {
    return <Loading />;
  }

  return (
    <View onLayout={onLayoutRootView} style={{flex: 1}}>
      <StatusBar style='light' backgroundColor='#000' translucent />
      <Routes />
    </View>
  );
}
