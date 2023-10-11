import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function App({ navigation, route }) {
  return (
    <View style={{ flex: 1 }}>
      {/* Phần hiển thị hình ảnh điện thoại */}
      <View style={{ flex: 5, justifyContent: "center", alignItems: "center" }}>
        <Image
          style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          source={require("../assets/vs_blue.png")}
        />
      </View>
      {/* Phần hiển thị thông tin điện thoại */}
      <View
        style={{
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
          gap: 15
        }}
      >
        <Text style={{ flex: 1, width: "90%", fontSize: 16, fontWeight: 400 }}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>

        {/* Phần đánh giá */}
        <View
          style={{
            flex: 1,
            width: "90%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 20
          }}
        >
          <View
            style={{
              flex: 4,
              height: 50,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            {/* Hiển thị 5 sao */}
            {[1, 2, 3, 4, 5].map((_, index) => (
              <Image
                key={index}
                style={{ width: 28, height: 28, resizeMode: "contain" }}
                source={require("../assets/star.png")}
              />
            ))}
          </View>
          <Text style={{ flex: 6, fontSize: 16, fontWeight: 400 }}>
            (Xem 828 đánh giá)
          </Text>
        </View>

        {/* Phần giá */}
        <View
          style={{
            flex: 1,
            width: "90%",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 30
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: 700 }}>1.790.000 đ</Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 500,
              textDecorationLine: "line-through"
            }}
          >
            1.790.000 đ
          </Text>
        </View>

        {/* Phần hoàn tiền */}
        <View
          style={{
            flex: 1,
            width: "90%",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 15
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: 700, color: "red" }}>
            Ở ĐÂU RẺ HƠN HOÀN TIỀN
          </Text>
          <TouchableOpacity
            style={{ width: 20, height: 20, resizeMode: "contain" }}
          >
            <Image
              style={{ width: 20, height: 20, resizeMode: "contain" }}
              source={require("../assets/chamHoi.png")}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Phần nút chuyển màu và chọn mua */}
      <View
        style={{
          position: "relative",
          flex: 2,
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        {/* Nút chuyển màu */}
        <TouchableOpacity
          style={{
            height: 40,
            width: "90%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            borderWidth: 1
          }}
          onPress={() => navigation.navigate("Screen02")}
        >
          <Text style={{ fontSize: 16, fontWeight: 500 }}>4 MÀU-CHỌN MÀU</Text>
          <Image
            style={{
              position: "absolute",
              right: 10,
              width: 15,
              height: 20,
              resizeMode: "contain"
            }}
            source={require("../assets/pass.png")}
          />
        </TouchableOpacity>

        {/* Nút chọn mua */}
        <TouchableOpacity
          style={{
            height: 40,
            width: "90%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: "red"
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 600, color: "white" }}>
            CHỌN MUA
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
