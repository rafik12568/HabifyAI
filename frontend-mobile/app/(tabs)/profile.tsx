import { View, Text } from 'react-native';
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

export default function ProfileScreen() {
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
            Profile Screen
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
            Profile Screen
          </Text>
        </LinearGradient>
      </MaskedView>
    </View>
  );
}
