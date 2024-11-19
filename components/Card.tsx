import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

type Props = {
  id: number;
  sumberGambar: string;
  judul: string;
  keterangan: string;
};

const PlaceholderImage = require("@/assets/images/08.jpeg");

export default function Card({ sumberGambar, judul, keterangan }: Props) {
  const imageSource = sumberGambar ? { uri: sumberGambar } : PlaceholderImage;
  return (
    <View style={styles.panel}>
      <Image style={styles.image} source={imageSource}></Image>
      <View>
        <Text style={styles.textWhite}>{judul}</Text>
        <Text style={styles.textWhiteKecil}>{keterangan}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: "#25292e",
    padding: 16,
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
  image: {
    width: 80,
    height: 60,
    borderRadius: 5,
    marginEnd: 24,
  },
  textWhiteKecil: {
    fontSize: 12,
    color: "#fff",
  },
});