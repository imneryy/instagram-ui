import { StyleSheet, Text, View } from "react-native";

export function Messages() {
  return (
    <View style={styles.content}>
      <Text style={styles.mensagemTeste}>Teste Messages</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  mensagemTeste: {
    color: "#FFF",
  },
});
