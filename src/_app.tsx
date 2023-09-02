import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { Config } from "react-native-config";

export default function App() {
  const apiKey = Config.EXPO_GOOGLE_MAPS_API_KEY;
  return (
    <View className="flex-1">
      <MapView
        className="w-full h-full"
        customMapStyle={[]}
        initialRegion={{
          latitude: 44.4268,
          longitude: 26.1025,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        accessibilityLabel={apiKey}
      />
    </View>
  );
}
