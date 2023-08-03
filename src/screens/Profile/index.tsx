import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import Logo from "../../assets/logo.svg";
import Stroke from "../../assets/stroke.svg";
import Message from "../../assets/message.svg";
import FotoNery from "../../assets/fotoNery.png";
import foto from "../../assets/foto.png";
import foto2 from "../../assets/foto2.png";
import foto3 from "../../assets/foto3.png";
import foto4 from "../../assets/foto4.png";
import CircleStories from "../../assets/circleStories.svg";
import { NavigationContainer } from "@react-navigation/native";

const DATA = [
  {
    id: "profile",
    photoURL: FotoNery,
    name: "Seu Stories",
    publicacoes: "3",
    seguidores: "100",
    seguindo: "101",
  },
];

const DATADESTAQUES = [
  {
    id: "profile",
    photoURL: FotoNery,
    name: "Destaques",
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto,
    name: "Destaques",
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto2,
    name: "Destaques",
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto3,
    name: "Destaques",
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto4,
    name: "Destaques",
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto,
    name: "Destaques",
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto2,
    name: "Destaques",
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto3,
    name: "Destaques",
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto4,
    name: "Destaques",
  },
];

export function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerNameProfile}>nery.dev</Text>
        <View style={styles.headerOptions}>
          <Stroke />

          {/* <Button
            title="teste"
            onPress={() => {
              window.location.href = "../Messages";
            }}
          /> */}
          <Message />
        </View>
      </View>
      <ScrollView style={{ width: "100%" }}>
        <View style={styles.dadosProfile}>
          <View style={styles.dadosProfileContainer}>
            <View style={styles.profileCard}>
              <CircleStories style={styles.circleProfile} />
              <Image style={styles.profileCardImage2} source={FotoNery} />
            </View>
            <FlatList
              horizontal={true}
              data={DATA}
              keyExtractor={(item) => item.id}
              renderItem={(item) => (
                <View style={styles.publicacoesCard}>
                  <Text style={styles.profilePublicacoes}>
                    {item.item.publicacoes}
                  </Text>
                  <Text style={styles.publicacoesTitle}>Publicações</Text>
                </View>
              )}
            />
            <FlatList
              horizontal={true}
              data={DATA}
              keyExtractor={(item) => item.id}
              renderItem={(item) => (
                <View style={styles.seguidoresCard}>
                  <Text style={styles.profileSeguidores}>
                    {item.item.seguidores}
                  </Text>
                  <Text style={styles.seguidoresTitle}>Seguidores</Text>
                </View>
              )}
            />
            <FlatList
              horizontal={true}
              data={DATA}
              keyExtractor={(item) => item.id}
              renderItem={(item) => (
                <View style={styles.seguindoCard}>
                  <Text style={styles.profileSeguindo}>
                    {item.item.seguindo}
                  </Text>
                  <Text style={styles.seguindoTitle}>Seguindo</Text>
                </View>
              )}
            />
          </View>
          <View style={styles.profileDescription}>
            <Text style={{ color: "#FFF" }}>Nery Junior</Text>
            <Text style={{ color: "#FFF" }}>Discípulo de Jesus</Text>
            <Text style={{ color: "rgb(224, 241, 255)" }}>@nery.dev</Text>
          </View>
        </View>
        <View style={styles.profileButtons}>
          <TouchableOpacity style={styles.profileButtonEdit}>
            <Text style={styles.profileButtonEditText}>Editar Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileButtonEdit}>
            <Text style={styles.profileButtonEditText}>
              Compartilhar Perfil
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileButtonMais}>
            <Text style={styles.profileButtonMaisText}>II</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={{ width: "100%" }}>
          <View style={styles.stories}>
            <FlatList
              horizontal={true}
              data={DATADESTAQUES}
              keyExtractor={(item) => item.id}
              renderItem={(item) => (
                <View style={styles.storiesCard} key={item.item.id}>
                  <Image
                    style={styles.storiesCardImage2}
                    source={item.item.photoURL}
                  />
                  <Text style={styles.storiesName}>{item.item.name}</Text>
                </View>
              )}
            />
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginTop: 48.5,
  },
  headerNameProfile: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "600",
  },
  headerOptions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  dadosProfile: {
    width: "100%",
    alignItems: "center",
  },
  profileCard: {
    width: 76,
    height: 76,
    alignItems: "center",
    marginHorizontal: 15,
  },
  dadosProfileContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  circleProfile: { position: "absolute" },
  profileCardImage2: {
    marginTop: 6,
    width: 64,
    height: 64,
    // borderWidth: 2,
    // borderColor: "#F7B55A",
    borderRadius: 50,
  },
  profilePublicacoes: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
  publicacoesCard: {
    alignItems: "center",
  },
  publicacoesTitle: {
    color: "#FFF",
    fontSize: 14,
  },
  profileSeguidores: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
  seguidoresCard: {
    alignItems: "center",
  },
  seguidoresTitle: {
    color: "#FFF",
  },
  profileSeguindo: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
  seguindoCard: {
    alignItems: "center",
  },
  seguindoTitle: {
    color: "#FFF",
  },
  profileDescription: {
    width: "100%",
    alignItems: "flex-start",
    paddingHorizontal: 15,
    marginTop: 5,
  },
  profileButtons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 10,
  },
  profileButtonEdit: {
    width: 160,
    height: 26,
    borderRadius: 5,
    backgroundColor: "#1c1c1c",
    alignItems: "center",
    justifyContent: "center",
  },
  profileButtonEditText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "600",
  },
  profileButtonMais: {
    width: 30,
    height: 26,
    borderRadius: 5,
    backgroundColor: "#1c1c1c",
    alignItems: "center",
    justifyContent: "center",
  },
  profileButtonMaisText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "600",
  },
  stories: {
    height: 130,
    width: "100%",
    // paddingLeft: 17,
    paddingVertical: 10,
    // height: 115,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 6,
  },
  storiesCard: {
    height: 74,
    marginLeft: 20,
    alignItems: "center",
    borderColor: "#1c1c1c",
    borderWidth: 2,
    borderRadius: 50,
    padding: 3,
  },
  storiesCardImage2: {
    width: 64,
    height: 64,
    // borderWidth: 2,
    // borderColor: "#F7B55A",
    borderRadius: 50,
  },
  storiesName: {
    color: "#FFF",
    fontSize: 12,
    marginTop: 8,
  },
});
