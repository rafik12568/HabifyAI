import { Stack } from "expo-router";
import { View } from "react-native";
import { Colors } from "@/constants/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { isFirstRun } from "@/utils/storage";

export default function RootLayout() {
  const insets = useSafeAreaInsets();
  const [loading, setLoading] = useState(true);
  const [initial, setInitial] = useState<"(tabs)" | "onboarding">("(tabs)");

  useEffect(() => {
    let mounted = true;
    (async () => {
      const first = await isFirstRun();
      if (!mounted) return;
      if (first) {
        setInitial("onboarding");
      } else {
        setInitial("(tabs)");
      }
      setLoading(false);
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#171616ff',
        paddingBottom: insets.bottom,
      }}
    >
      <Stack initialRouteName={initial} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false, contentStyle: { backgroundColor: "#171616ff" } }} />
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      </Stack>
    </View>
  );
}
