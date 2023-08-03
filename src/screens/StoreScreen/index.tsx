import { Text, View } from "react-native";

export function StoreScreen() {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "#000" }}>Texte Store</Text>
    </View>
  );
}
