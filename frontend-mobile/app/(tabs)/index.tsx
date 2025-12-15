import { View, Text } from 'react-native';
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { userName, isFirstRun } from "@/utils/storage";
import { useEffect, useState } from "react";
import { router } from "expo-router";

export default function HomeScreen() {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    (async () => {
      const first = await isFirstRun();
      if (first && active) {
        router.replace("/onboarding");
        return;
      }
      const n = await userName();
      if (active) setName(n);
    })();
    return () => {
      active = false;
    };
  }, []);

  const displayName = name && name.trim() ? name : "User";
  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: '#181515ff' }}>
      <MaskedView
        maskElement={
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: '#CB7D74',
              marginTop: 80,
            }}
          >
            Hi, {displayName} 👋
          </Text>
        }
      >
        <LinearGradient
          colors={["#DFA196", "#B75B56", "#270909ff"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 2}}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              opacity: 0, 
              marginTop: 80,
            }}
          >
            Hi, {displayName} 👋
          </Text>
        </LinearGradient>
      </MaskedView>
    </View>
  );
}
