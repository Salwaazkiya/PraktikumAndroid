import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.panel}>
        <Text style={styles.textWhite}>Hello World!!</Text>
      </View>
      <View style={styles.panel}>
        <View style={styles.lingkaran}>
          <Text style={styles.textWhite}>MY</Text>
        </View>
      </View>
      <Text style={styles.textWhite}>Hello World!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  panel: {
    backgroundColor: "#2529e",
    padding: 24,
    borderRadius: 16,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#000",
  },
  textWhite: {
    fontSize: 20,
    color: "#fff",
  },
  lingkaran: {
    backgroundColor: "teal",
    width: 70,
    height: 70,
    borderRadius: 35,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
