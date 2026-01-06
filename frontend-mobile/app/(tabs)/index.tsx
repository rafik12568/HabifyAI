import { isFirstRun, userName } from "@/utils/storage";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View, Pressable } from 'react-native';

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
              marginTop: 60,
            }}
          >
            Hi, {displayName} 👋
          </Text>
        }
      >
        <LinearGradient
          colors={["#DFA196", "#B75B56", "#7B141E"]}
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
      <View style={{ marginTop: 30, width: '90%', height: '70%', backgroundColor: '#2C2626', borderRadius: 10, padding: '5%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        <View style={{ backgroundColor: '#3A3030', borderRadius: 5, marginBottom: 10, width: '45%', height: '49%', justifyContent: 'center', alignItems: 'center' }} >
          <Text style={{ fontSize: 40 }}>🔥</Text>
          <Text style={{ fontSize: 20, color: 'white' }}>Streak</Text> 
          {/*tu mozesz dodac gradient w kolorach emotek do wszystkich napisow*/}
          <Text style={{ fontSize: 10, color: 'gray' }}>Work in progress...</Text>
        </View>
        <Pressable onPress={() => router.push("/habits")}
        style={({ pressed }) => ({
          backgroundColor: pressed ? '#2A2222' : '#3A3030',
          borderRadius: 5,
          marginBottom: 10,
          width: '45%',
          height: '49%',
          justifyContent: 'center',
          alignItems: 'center',
        })} >
          <Text style={{ fontSize: 40 }}>✅</Text>
          <Text style={{ fontSize: 20, color: 'white' }}>Habits</Text>
        </Pressable>
        <Pressable onPress={() => router.push("/profile")}
        style={({ pressed }) => ({
          backgroundColor: pressed ? '#2A2222' : '#3A3030',
          borderRadius: 5,
          marginBottom: 10,
          width: '45%',
          height: '49%',
          justifyContent: 'center',
          alignItems: 'center',
        })} >
          <Text style={{ fontSize: 40 }}>👤</Text>
          <Text style={{ fontSize: 20, color: 'white' }}>Profile</Text>
        </Pressable>
        <View style={{ backgroundColor: '#3A3030', borderRadius: 5, marginBottom: 10, width: '45%', height: '49%', justifyContent: 'center', alignItems: 'center' }} >
          <Text style={{ fontSize: 25 }}>🛠️🚧</Text>
          <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>Work in progress...</Text>
          <Text style={{ fontSize: 10, color: 'gray' }}>Building...</Text>
        </View>
      </View>
    </View>
  );
}
