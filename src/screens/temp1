import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Navbar from "../components/UI/Navbar";

export default function Classes() {
  return (
    <View
      style={{
        paddingTop: 50,
        flex: 1,
        backgroundColor: "white",
        gap: 2,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 20,
          paddingHorizontal: 20,
        }}
      >
        <Image source={require("../../assets/profile/profile.png")} />
        <View>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>Hello Neha!</Text>
          <Text style={{ fontSize: 14 }}>Lets Start Your Day</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "black",
          paddingHorizontal: 10,
          marginHorizontal: 20,
          marginTop: 20,
          gap: 30,
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 30,
          borderRadius: 13,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 30,
            alignItems: "center",
          }}
        >
          <View>
            <Image source={require("../../assets/classes/pen.png")} />
          </View>
          <View>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
              Pendika Agama
            </Text>
            <Text style={{ color: "white", fontSize: 14 }}>
              Mr. Porwaji started an online class
            </Text>
          </View>
        </View>
        <Image source={require("../../assets/classes/line.png")} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <View style={{ flexDirection: "row" }}>
              <View style={{}}>
                <Image source={require("../../assets/classes/sl1.png")} />
              </View>
              <View style={{ position: "relative", right: 30 }}>
                <Image source={require("../../assets/classes/sl2.png")} />
              </View>
              <View style={{ position: "relative", right: 60 }}>
                <Image source={require("../../assets/classes/sl3.png")} />
              </View>
              <View
                style={{
                  position: "relative",
                  right: 90,
                  backgroundColor: "white",
                  borderRadius: "50%",
                  aspectRatio: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "black", fontSize: 30 }}>+</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 30,
              borderRadius: 12,
            }}
          >
            <Image source={require("../../assets/classes/Vector.png")} />
            <Text style={{ color: "black" }}>Join Learning</Text>
          </View>
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            marginVertical: 20,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Your Classes</Text>
          <Text style={{ fontSize: 14 }}>Add Classes</Text>
        </View>
        <FlatList
          data={[
            {
              id: 1,
              image: require("../../assets/homeimages/yoga.png"),
            },
            {
              id: 2,
              image: require("../../assets/classes/boxing.png"),
            },
            {
              id: 3,
              image: require("../../assets/homeimages/yoga2.png"),
            },
          ]}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View style={{ marginHorizontal: 10 }}>
                <Image
                  source={item.image}
                  style={{ width: 157, height: 128, borderRadius: 10 }}
                />
              </View>
            );
          }}
        />
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            marginVertical: 20,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Your Assignments
          </Text>
          <Text style={{ fontSize: 14 }}>View All</Text>
        </View>
        <FlatList
          data={[
            {
              id: 1,
              image: require("../../assets/classes/ass1.png"),
              text: "Mr. Porwaji started an online class",
              top: false,
            },
            {
              id: 2,
              image: require("../../assets/classes/ass2.png"),
              text: "Mr. Porwaji started an online class",
              top: true,
            },
          ]}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View style={{ marginHorizontal: 10 }}>
                <Image
                  source={item.image}
                  style={{ width: 177, height: 178, borderRadius: 10 }}
                />
                <View
                  style={{
                    position: "absolute",
                    top: item.top ? 10 : 120,
                    left: 20,
                  }}
                >
                  <Text style={{ color: "white" }}>{item.text}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          backgroundColor: "#8288E8",
          width: "100%",
          height: 66,
        }}
      >
        <Navbar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
