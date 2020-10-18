import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

const ItemScreen = () => {
  const [term, setTerm] = useState('111');

  useEffect(() => {
    console.log('open ItemScreen', term);
  }, []);

  return (
    <View style={styles.view} >
      <Text>Index Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

export default ItemScreen;
