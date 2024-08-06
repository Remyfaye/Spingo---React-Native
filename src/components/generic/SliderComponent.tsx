import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import PagerView from "react-native-pager-view";
import { LinearGradient } from "expo-linear-gradient";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH * 1;
const SLIDE_DURATION = 2000; // 2 seconds per slide

import { slider1, slider2, slider3 } from "@constants/imports";
import { COLORS, FONTSIZE } from "@constants/theme";

const slides = [
  {
    image: slider1,
    width: "33%",
    title: "Welcome to SPINGO! Your ultimate Business Companion.",
    desc: "Streamline your business operations and maximize efficiency with our all-in-one platform.",
  },
  {
    image: slider2,
    width: "66%",
    title: "Simplify Your Tasks.",
    desc: "SPINGO integrates invoicing, inventory, and accounting, optimizing your operations efficiently.",
  },
  {
    image: slider3,
    width: "100%",
    title: "Stay Ahead in Your Industry",
    desc: "Experience the future of business management with SPINGO.",
  },
];

const SliderComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const pagerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      let nextPage = currentSlide + 1;
      if (nextPage >= slides.length) {
        nextPage = 0;
      }
      setCurrentSlide(nextPage);
      // @ts-ignore
      pagerRef.current?.setPage(nextPage);
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <View style={styles.container}>
      <PagerView
        style={styles.pagerView}
        initialPage={0}
        onPageSelected={(event) => setCurrentSlide(event.nativeEvent.position)}
        ref={pagerRef}
      >
        {slides.map((item, index) => (
          <View key={index} style={styles.slideContainer}>
            <ImageBackground source={item.image} style={styles.image}>
              <LinearGradient
                colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.7)"]}
                style={styles.gradient}
              />
              {/* Progress Line */}
              <View
                style={{
                  height: 8,
                  width: "100%",
                  paddingHorizontal: 50,
                  marginBottom: 10,
                }}
              >
                <View
                  style={{
                    height: "100%",
                    width: "100%",
                    backgroundColor: "white",
                    borderRadius: 20,
                  }}
                >
                  <View
                    style={{
                      width: item.width as any,
                      height: "100%",
                      backgroundColor: COLORS.primary,
                      borderRadius: 20,
                    }}
                  />
                </View>
              </View>
            </ImageBackground>
            <View style={{ width: "100%", paddingHorizontal: 20 }}>
              {/* Big Text */}
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ width: "35%" }}>
                  <Text
                    style={{
                      fontSize: 100,
                      fontWeight: "900",
                      color: COLORS.gray,
                    }}
                  >{`0${index + 1}`}</Text>
                </View>

                {/* title */}
                <View style={{ width: "60%" }}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: COLORS.black,
                      fontWeight: "600",
                    }}
                  >
                    {item.title}
                  </Text>
                </View>
              </View>
              {/* Desc */}
              <Text
                style={{
                  fontSize: FONTSIZE.size_14,
                  color: COLORS.black,
                  fontWeight: "500",
                }}
              >
                {item.desc}
              </Text>
            </View>
          </View>
        ))}
      </PagerView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  pagerView: {
    width: ITEM_WIDTH,
    height: "100%",
  },
  slideContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default SliderComponent;
