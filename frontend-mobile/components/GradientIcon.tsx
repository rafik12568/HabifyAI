import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { View } from "react-native";

type GradientIconProps = {
  name: React.ComponentProps<typeof Ionicons>["name"];
  size: number;
  focused: boolean;
};

export default function GradientIcon({ name, size, focused }: GradientIconProps) {
  const colors: [string, string, string] = focused
    ? ["#DFA196", "#B75B56", "#270909ff"]
    : ["#909090", "#909090", "#909090"];

  return (
    <MaskedView
      style={{ width: size, height: size }}
      maskElement={
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: size,
            height: size,
          }}
        >
          <Ionicons name={name} size={size} color="black" />
        </View>
      }
    >
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1 }}
      />
    </MaskedView>
  );
}