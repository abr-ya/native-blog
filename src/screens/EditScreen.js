import React, { useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const EditScreen = () => {

  useEffect(() => {
    console.log('open EditScreen');
  }, []);

  return (
    <View style={styles.view} >
      <Text style={styles.header}>Edit Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  header: {
    fontSize: 24,
  },
});

export default EditScreen;
