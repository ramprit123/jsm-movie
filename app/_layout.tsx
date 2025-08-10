import Provider from "@/components/Provider";
import "@/styles/global.css";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Provider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="movie/[id]" />
      </Stack>
    </Provider>
  );
}
