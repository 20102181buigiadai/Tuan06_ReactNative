import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function App({ navigation, route }) {
  const [colorImg, setColorImg] = useState(route.params.color);
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View
        style={{
          flex: 2,
          width: "95%",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 10,
          backgroundColor: "white"
        }}
      >
        <View
          style={{ flex: 3, justifyContent: "center", alignItems: "center" }}
        >
          <Image source={colorImg} style={{ width: 112, height: 132 }} />
        </View>
        <View style={{ flex: 7, height: "60%", justifyContent: "flex-start" }}>
          <Text style={{ fontSize: 16, fontWeight: 600 }}>
            Điện Thoại Vsmart Joy 3
          </Text>
          <Text style={{ fontSize: 16, fontWeight: 600 }}>
            Hàng chính hãng{" "}
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 7,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-start",
          backgroundColor: "#C4C4C4"
        }}
      >
        <Text style={{ flex: 0.5, fontSize: 18, fontWeight: 600, margin: 15 }}>
          Chọn một màu bên dưới:
        </Text>
        <View
          style={{
            flex: 7,
            width: "100%",
            justifyContent: "space-around",
            alignItems: "center",
            gap: 10
          }}
        >
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => {
              setColorImg(require("../assets/vs_silver.png"));
            }}
          >
            <View
              style={{
                width: 85,
                height: 80,
                backgroundColor: "#C5F1FB",
                borderWidth: 1
              }}
            ></View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => {
              setColorImg(require("../assets/vs_red.png"));
            }}
          >
            <View
              style={{
                width: 85,
                height: 80,
                backgroundColor: "#F30D0D",
                borderWidth: 1
              }}
            ></View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => {
              setColorImg(require("../assets/vs_black.png"));
            }}
          >
            <View
              style={{
                width: 85,
                height: 80,
                backgroundColor: "#000000",
                borderWidth: 1
              }}
            ></View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => {
              setColorImg(require("../assets/vs_blue.png"));
            }}
          >
            <View
              style={{
                width: 85,
                height: 80,
                backgroundColor: "#234896",
                borderWidth: 1
              }}
            ></View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 2,
            width: "100%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            style={{
              width: "90%",
              height: 45,
              backgroundColor: "#4D6DC1",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              borderWidth: 1,
              borderBlockColor: "#CA1536"
            }}
            onPress={() => {
              navigation.navigate("Screen01", { color: colorImg });
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 600, color: "white" }}>
              XONG
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
