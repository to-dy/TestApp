import "@expo/metro-runtime"
import React from "react"
import * as SplashScreen from "expo-splash-screen"
import App from "./app/app"
import { setNotificationHandler } from "expo-notifications"

SplashScreen.preventAutoHideAsync()

setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

function IgniteApp() {
  return <App hideSplashScreen={SplashScreen.hideAsync} />
}

export default IgniteApp
