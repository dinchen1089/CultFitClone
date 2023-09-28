let data = [
  {
    title: "Notification Preferance",
    componentName: "NotificationPreferanceScreen",
  },
  {
    title: "Class Calendar",
    componentName: "ClassCalendarScreen",
  },
  {
    title: "Address",
    componentName: "AddressScreen",
  },
  {
    title: "Payment",
    componentName: "PaymentScreen",
  },
  {
    title: "Logged in Devices",
    componentName: "LoggedInDevicesScreen",
  },
  {
    title: "Logout",
    componentName: "LogoutScreen",
  },
];

import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import ChevronRightIcon from "../icons/ChevronRightIcon";

const PageNavigator = ({
  title,
  componentName,
  disabled = false
}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(componentName);
  };
  return (
    <Pressable style={styles.mainContainer} onPress={} disabled ={disabled}>
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <ChevronRightIcon style={styles.icon} />
        </View>
        {showBorder && (
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "white",
              opacity: 0.2,
              marginVertical: 15,
            }}
          />
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: "400",
    color: "white",
  },
  icon: {
    fontSize: 25,
    fontWeight: "400",
    color: "white",
    height: "100%",
  },

  textContainer: {
    flexDirection: "row",
    color: "white",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mainContainer: {
    width: "100%",
    backgroundColor: "black",
    marginVerical: 40,
  },
});

export default PageNavigator;


