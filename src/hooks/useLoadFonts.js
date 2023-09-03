import { useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Anton_400Regular } from '@expo-google-fonts/anton';
// import { Roboto_400Regular } from '@expo-google-fonts/roboto';

const useLoadFonts = () => {
    const [fontsLoaded, fontError] = useFonts({
        Anton_400Regular,
      });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
          await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    return { fontsLoaded, fontError, onLayoutRootView };
}

export default useLoadFonts;
