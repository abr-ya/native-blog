import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

const EditScreen = () => {

  useEffect(() => {
    console.log('open EditScreen');
  }, []);

  return (
    <View style={styles.view} >
      <Text>Edit Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

export default EditScreen;
