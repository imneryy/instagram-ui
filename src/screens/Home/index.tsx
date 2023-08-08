import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
} from "react-native";

import Logo from "../../assets/logo.svg";
import Stroke from "../../assets/stroke.svg";
import Message from "../../assets/message.svg";
import FotoNery from "../../assets/fotoNery.png";
import foto from "../../assets/foto.png";
import foto2 from "../../assets/foto2.png";
import foto3 from "../../assets/foto3.png";
import foto4 from "../../assets/foto4.png";
import Points from "../../assets/points.svg";
import image from "../../assets/image.png";
import Heart from "../../assets/Heart.svg";
import Comment from "../../assets/Comment.svg";
import Share from "../../assets/Share.svg";
import Bookmark from "../../assets/Bookmark.svg";
import CircleStories from "../../assets/circleStories.svg";
import CircleStoriesProfile from "../../assets/circleStoriesProfile.svg";
import Suggested01 from "../../assets/suggested01.png";
import Suggested02 from "../../assets/suggested02.png";
import { TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Messages } from "../Messages";

const Stack = createStackNavigator();

const DATA = [
  {
    id: "profile",
    photoURL: FotoNery,
    name: "Seu Stories",
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto,
    name: "Usuário 01",
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto2,
    name: "Usuário 02",
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto3,
    name: "Usuário 03",
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto4,
    name: "Usuário 04",
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto,
    name: "Usuário 01",
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto2,
    name: "Usuário 02",
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto3,
    name: "Usuário 03",
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto4,
    name: "Usuário 04",
  },
];

const Suggested = [
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: Suggested02,
    name: "Nike Football (Soccer)",
    description: "Popular",
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: Suggested02,
    name: "Real_Travel",
    description: "Popular",
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto3,
    name: "Usuário 03",
    description: "Popular",
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto4,
    name: "Usuário 04",
    description: "Popular",
  },
];

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
        <View style={styles.headerOptions}>
          <Stroke />
          <Message />
        </View>
      </View>

      <ScrollView style={{ width: "100%" }}>
        <View style={styles.stories}>
          <FlatList
            horizontal={true}
            data={DATA}
            keyExtractor={(item) => item.id}
            renderItem={(item) => (
              <View style={styles.storiesCard} key={item.item.id}>
                <CircleStories style={styles.circleStories} />
                <Image
                  style={styles.storiesCardImage2}
                  source={item.item.photoURL}
                />
                <Text style={styles.storiesName}>{item.item.name}</Text>
              </View>
            )}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <CircleStoriesProfile style={styles.circleStoriesContent} />
              <Image style={styles.contentHeaderLeftImage} source={FotoNery} />
              <Text style={styles.contentheaderLeftText}>nery.dev</Text>
            </View>
            <Points style={styles.contentHeaderPoints} />
          </View>
          <View style={styles.contentPost}>
            <Image source={image} />
          </View>
          <View style={styles.contentFooter}>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={styles.contentFooterLeft}>
                <Heart />
                <Comment />
                <Share />
              </View>
              <Bookmark />
            </View>
            <View style={{ gap: 5, marginHorizontal: 8, marginVertical: 10 }}>
              <View style={{ width: "100%", flexDirection: "row" }}>
                <Text style={{ color: "#FFF", fontWeight: "600" }}>
                  Nery Junior
                </Text>
                <Text style={{ color: "#FFF", marginLeft: 6 }}>
                  Exemplo de Descrição!!
                </Text>
              </View>
              <Text style={{ color: "#FFF" }}>
                Ver todos os 53 comentários{" "}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 5,
                }}
              >
                <Image
                  style={{ width: 30, height: 30, borderRadius: 50 }}
                  source={FotoNery}
                />
                <Text style={{ color: "#FFF", fontSize: 14, marginLeft: 10 }}>
                  Adicione um comentário...
                </Text>
              </View>
              <Text style={{ color: "#FFF", fontSize: 10 }}>3 horas atrás</Text>
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <CircleStoriesProfile style={styles.circleStoriesContent} />
              <Image style={styles.contentHeaderLeftImage} source={foto} />
              <Text style={styles.contentheaderLeftText}>Usuário 01</Text>
            </View>
            <Points style={styles.contentHeaderPoints} />
          </View>
          <View style={styles.contentPost}>
            <Image source={image} />
          </View>
          <View style={styles.contentFooter}>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={styles.contentFooterLeft}>
                <Heart />
                <Comment />
                <Share />
              </View>
              <Bookmark />
            </View>
            <View style={{ gap: 5, marginHorizontal: 8, marginVertical: 10 }}>
              <View style={{ width: "100%", flexDirection: "row" }}>
                <Text style={{ color: "#FFF", fontWeight: "600" }}>
                  Usuário 03
                </Text>
                <Text style={{ color: "#FFF", marginLeft: 6 }}>
                  Exemplo de Descrição!!
                </Text>
              </View>
              <Text style={{ color: "#FFF" }}>
                Ver todos os 63 comentários{" "}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 5,
                }}
              >
                <Image
                  style={{ width: 30, height: 30, borderRadius: 50 }}
                  source={FotoNery}
                />
                <Text style={{ color: "#FFF", fontSize: 14, marginLeft: 10 }}>
                  Adicione um comentário...
                </Text>
              </View>
              <Text style={{ color: "#FFF", fontSize: 10 }}>3 horas atrás</Text>
            </View>
          </View>
        </View>
        <View style={styles.suggested}>
          <View style={styles.suggestedHeader}>
            <Text style={{ color: "#FFF", fontSize: 16, fontWeight: "600" }}>
              Sugestões para você
            </Text>
            <Text style={{ color: "#5792E7", fontSize: 16, fontWeight: "600" }}>
              Ver tudo
            </Text>
          </View>
          <ScrollView style={{ width: "100%" }}>
            <View style={styles.suggestedContent}>
              <FlatList
                horizontal={true}
                data={Suggested}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => (
                  <View
                    style={{
                      ...styles.suggestedContentCard,
                      marginLeft: index === 0 ? 18 : 0,
                      marginRight: index === 3 ? 18 : 10,
                    }}
                    key={item.id}
                  >
                    <Image
                      style={styles.suggestedContentImage}
                      source={item.photoURL}
                    />
                    <Text style={styles.suggestedContentText}>{item.name}</Text>
                    <Text style={styles.suggestedContentTextDescription}>
                      {item.description}
                    </Text>
                    <TouchableOpacity style={styles.suggestedContentButton}>
                      <Text style={styles.suggestedContentButtonText}>
                        Seguir
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              />
            </View>
          </ScrollView>
        </View>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <CircleStoriesProfile style={styles.circleStoriesContent} />
              <Image style={styles.contentHeaderLeftImage} source={foto2} />
              <Text style={styles.contentheaderLeftText}>Usuário 02</Text>
            </View>
            <Points style={styles.contentHeaderPoints} />
          </View>
          <View style={styles.contentPost}>
            <Image source={image} />
          </View>
          <View style={styles.contentFooter}>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={styles.contentFooterLeft}>
                <Heart />
                <Comment />
                <Share />
              </View>
              <Bookmark />
            </View>
            <View style={{ gap: 5, marginHorizontal: 8, marginVertical: 10 }}>
              <View style={{ width: "100%", flexDirection: "row" }}>
                <Text style={{ color: "#FFF", fontWeight: "600" }}>
                  Nery Junior
                </Text>
                <Text style={{ color: "#FFF", marginLeft: 6 }}>
                  Exemplo de Descrição!!
                </Text>
              </View>
              <Text style={{ color: "#FFF" }}>
                Ver todos os 130 comentários{" "}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 5,
                }}
              >
                <Image
                  style={{ width: 30, height: 30, borderRadius: 50 }}
                  source={FotoNery}
                />
                <Text style={{ color: "#FFF", fontSize: 14, marginLeft: 10 }}>
                  Adicione um comentário...
                </Text>
              </View>
              <Text style={{ color: "#FFF", fontSize: 10 }}>3 horas atrás</Text>
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <CircleStoriesProfile style={styles.circleStoriesContent} />
              <Image style={styles.contentHeaderLeftImage} source={foto3} />
              <Text style={styles.contentheaderLeftText}>Usuário 03</Text>
            </View>
            <Points style={styles.contentHeaderPoints} />
          </View>
          <View style={styles.contentPost}>
            <Image source={image} />
          </View>
          <View style={styles.contentFooter}>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={styles.contentFooterLeft}>
                <Heart />
                <Comment />
                <Share />
              </View>
              <Bookmark />
            </View>
            <View style={{ gap: 5, marginHorizontal: 8, marginVertical: 10 }}>
              <View style={{ width: "100%", flexDirection: "row" }}>
                <Text style={{ color: "#FFF", fontWeight: "600" }}>
                  Nery Junior
                </Text>
                <Text style={{ color: "#FFF", marginLeft: 6 }}>
                  Exemplo de Descrição!!
                </Text>
              </View>
              <Text style={{ color: "#FFF" }}>
                Ver todos os 12 comentários{" "}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 5,
                }}
              >
                <Image
                  style={{ width: 30, height: 30, borderRadius: 50 }}
                  source={FotoNery}
                />
                <Text style={{ color: "#FFF", fontSize: 14, marginLeft: 10 }}>
                  Adicione um comentário...
                </Text>
              </View>
              <Text style={{ color: "#FFF", fontSize: 10 }}>3 horas atrás</Text>
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <CircleStoriesProfile style={styles.circleStoriesContent} />
              <Image style={styles.contentHeaderLeftImage} source={foto4} />
              <Text style={styles.contentheaderLeftText}>Usuário 04</Text>
            </View>
            <Points style={styles.contentHeaderPoints} />
          </View>
          <View style={styles.contentPost}>
            <Image source={image} />
          </View>
          <View style={styles.contentFooter}>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={styles.contentFooterLeft}>
                <Heart />
                <Comment />
                <Share />
              </View>
              <Bookmark />
            </View>
            <View style={{ gap: 5, marginHorizontal: 8, marginVertical: 10 }}>
              <View style={{ width: "100%", flexDirection: "row" }}>
                <Text style={{ color: "#FFF", fontWeight: "600" }}>
                  Nery Junior
                </Text>
                <Text style={{ color: "#FFF", marginLeft: 6 }}>
                  Exemplo de Descrição!!
                </Text>
              </View>
              <Text style={{ color: "#FFF" }}>
                Ver todos os 19 comentários{" "}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 5,
                }}
              >
                <Image
                  style={{ width: 30, height: 30, borderRadius: 50 }}
                  source={FotoNery}
                />
                <Text style={{ color: "#FFF", fontSize: 14, marginLeft: 10 }}>
                  Adicione um comentário...
                </Text>
              </View>
              <Text style={{ color: "#FFF", fontSize: 10 }}>3 horas atrás</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
  },
  header: {
    marginTop: 40,
    paddingHorizontal: 15,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  headerOptions: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
  },
  stories: {
    height: 130,
    // width: "100%",
    // paddingLeft: 17,
    paddingVertical: 10,
    // height: 115,
    alignItems: "center",
    justifyContent: "space-between",
  },
  storiesCard: {
    width: 74,
    height: 74,
    marginLeft: 20,
    alignItems: "center",
  },
  circleStories: {
    position: "absolute",
  },
  storiesCardImage2: {
    marginTop: 6,
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
  content: {
    width: "100%",
    marginBottom: 10,
  },
  contentHeader: {
    height: 52,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  contentHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  circleStoriesContent: {
    position: "absolute",
  },
  contentHeaderPoints: {
    transform: [{ rotate: "90deg" }],
  },
  contentHeaderLeftImage: {
    width: 30,
    height: 30,
    marginLeft: 3.5,
    marginTop: 0.5,
    // borderWidth: 1,
    // borderColor: "#F7B55A",
    borderRadius: 50,
  },
  contentheaderLeftText: {
    color: "#FFF",
    marginLeft: 10,
  },
  contentPost: {},
  contentFooter: {
    width: "100%",
    // flexDirection: "row",
    // justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  contentFooterLeft: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  contentFooterDescription: {
    color: "#FFF",
  },
  suggested: {
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
  },
  suggestedHeader: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 18,
    justifyContent: "space-between",
  },
  suggestedContent: {
    width: "100%",
    // marginLeft: 20,
    marginTop: 15,
  },
  suggestedContentCard: {
    width: 202,
    height: 254,
    padding: 14,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#1c1c1c",
  },
  suggestedContentImage: {
    width: 140,
    height: 140,
  },
  suggestedContentText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "600",
    marginTop: 10,
  },
  suggestedContentTextDescription: {
    color: "#FFF",
  },
  suggestedContentButton: {
    width: 182,
    height: 26,
    borderRadius: 5,
    backgroundColor: "#5793EA",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  suggestedContentButtonText: {
    color: "#FFF",
    fontWeight: "600",
  },
});
