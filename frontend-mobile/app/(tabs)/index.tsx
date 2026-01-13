import { isFirstRun, userName } from "@/utils/storage";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, Text, View } from 'react-native';

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
    <View style={{ flex: 1, alignItems: "center", backgroundColor: '#301515ff' }}>
      <View style={{ marginTop: 35, width: '90%', height: '10%', backgroundColor: '#411e1eff', borderRadius: 10 }}>
        {/* tu przed napisem powitalnym ma byc zdjecie profilowe uzytkownika prowadzace do profilu */}
        <MaskedView
          style={{ width: "100%", alignItems: "flex-start"}}
          maskElement={
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                color: '#CB7D74',
                paddingTop: 10,
                paddingLeft: 30,
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
                paddingLeft: 30,
              }}
            >
              Hi, {displayName} 👋
            </Text>
          </LinearGradient>
        </MaskedView>
        {/* tutaj w prawym górnym ikonka dzwonka z ustawieniami powiadomień */}
      </View>
      <View style={{ marginTop: 15, width: '90%', height: '80%', backgroundColor: '#411e1eff', borderRadius: 10, padding: '5%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        <View style={{ backgroundColor: '#832f2f9a', borderRadius: 10, marginBottom: 10, width: '100%', height: '23%', flexDirection: 'column', flexWrap: 'wrap-reverse' }} >
          <Text style={{ fontSize: 70, textAlign: "right", paddingRight: 10, paddingLeft: 5, paddingTop: 5 }}>🔥</Text>
          <MaskedView
            maskElement={
              <Text style={{ fontSize: 30, color: 'white', paddingRight: 90, justifyContent: 'flex-start', paddingTop: 7, fontWeight: "bold"  }}>Streak</Text>
            }
          >
            <LinearGradient
              colors={["#b34122ff", "rgba(241, 178, 4, 1)5", "rgba(255, 182, 25, 1)"]}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 2}}
            >
              <Text style={{ fontSize: 30, paddingRight: 90, justifyContent: 'flex-start', paddingTop: 7, fontWeight: "bold", opacity: 0  }}>Streak</Text>
            </LinearGradient>
            </MaskedView> 
          {/*tu mozesz dodac gradient w kolorach emotek do wszystkich napisow*/}
          <Text style={{ fontSize: 15, color: 'white', opacity: 0.5 }}>Work in progress...</Text>
        </View>
        <Pressable onPress={() => router.push("/habits")}
        style={({ pressed }) => ({
          backgroundColor: pressed ? '#4d1c1cce' : '#832f2f9a',
          borderRadius: 10,
          marginBottom: 10,
          width: '100%',
          height: '23%',
          flexDirection: 'column',
          flexWrap: 'wrap-reverse'
        })} >
          <Text style={{ fontSize: 65, textAlign: "right", paddingRight: 10, paddingLeft: 5, paddingTop: 10 }}>✅</Text>
          <MaskedView
            maskElement={
              <Text style={{ fontSize: 30, color: 'white', paddingRight: 90, justifyContent: 'flex-start', paddingTop: 7, fontWeight: "bold"  }}>Habits</Text>
            }
          >
            <LinearGradient
              colors={["#174d17ff", "rgba(101, 180, 118, 1)5", "rgba(146, 131, 98, 1)"]}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 2}}
            >
              <Text style={{ fontSize: 30, paddingRight: 90, justifyContent: 'flex-start', paddingTop: 7, fontWeight: "bold", opacity: 0  }}>Habits</Text>
            </LinearGradient>
            </MaskedView> 
            <Text style={{ fontSize: 15, color: 'white', opacity: 0.8 }}>Press to see your habits!</Text>
        </Pressable>
        <Pressable onPress={() => router.push("/profile")}
        style={({ pressed }) => ({
          backgroundColor: pressed ? '#4d1c1cce' : '#832f2f9a',
          borderRadius: 10,
          marginBottom: 10,
          width: '100%',
          height: '23%',
          flexDirection: 'column',
          flexWrap: 'wrap-reverse' 
        })} >
          <Text style={{ fontSize: 65, textAlign: "right", paddingRight: 10, paddingLeft: 5, paddingTop: 5 }}>👤</Text>
          <MaskedView
            maskElement={
              <Text style={{ fontSize: 30, color: 'white', paddingRight: 90, justifyContent: 'flex-start', paddingTop: 7, fontWeight: "bold"  }}>Profile</Text>
            }
          >
            <LinearGradient
              colors={["#125350ff", "rgba(171, 173, 172, 1)5", "rgba(146, 131, 98, 1)"]}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 2}}
            >
              <Text style={{ fontSize: 30, paddingRight: 90, justifyContent: 'flex-start', paddingTop: 7, fontWeight: "bold", opacity: 0  }}>Profile</Text>
            </LinearGradient>
            </MaskedView> 
            <Text style={{ fontSize: 15, color: 'white', opacity: 0.8 }}>Press to see your profile!</Text>
        </Pressable>
        <View style={{ backgroundColor: '#832f2f9a', borderRadius: 10, marginBottom: 10, width: '100%', height: '23%', flexDirection: 'column', flexWrap: 'wrap-reverse' }} >
          <Text style={{ fontSize: 65, textAlign: "right", paddingRight: 10, paddingLeft: 5, paddingTop: 5 }}>🛠️</Text>
          <Text style={{ fontSize: 20, color: 'white', paddingRight: 0, justifyContent: 'flex-start', paddingTop: 7, fontWeight: "bold" }}>Work in progress...</Text>
          <Text style={{ fontSize: 15, color: 'white', opacity: 0.5 }}>Building...</Text>
        </View>
      </View>
    </View>
  );
}
