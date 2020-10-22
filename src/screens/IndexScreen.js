import React, { useContext, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import { Context as BlogContext } from '../context/BlogContext';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
  const { state: blogPosts, delPost } = useContext(BlogContext);

  useEffect(() => {
    console.log('open IndexScreen');
    //console.log(blogPosts, delPost);
  }, []);

  const delHandler = (id) => {
    console.log('del:', id);
    delPost(id);
  };

  const navHandler = (id) => {
    console.log('nav:', id);
    navigation.navigate('Item', { id });
  };

  return ( 
    <View style={styles.view} >
      <Text style={styles.header}>Index Screen</Text>
      <FlatList
        data={blogPosts}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navHandler(item.id)}>
            <View style={styles.row}>
              <Text style={styles.title}>{item.title} - {item.id}</Text>
              <TouchableOpacity onPress={() => delHandler(item.id)} >
                <MaterialIcons name="delete-forever" style={styles.iconDel} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({navigation}) => ({
  headerRight: () => (
    <TouchableOpacity onPress={() => navigation.navigate('New')}>
      <AntDesign name="pluscircleo" style={styles.iconTop} />
    </TouchableOpacity>  
  ),
});

const styles = StyleSheet.create({
  view: {
    flex: 1,
    margin: 10,
  },
  header: {
    fontSize: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 20,
  },
  iconTop: {
    fontSize: 30,
    color: 'blue',
    margin: 20,
  },
  iconDel: {
    fontSize: 34,
    color: 'blue',
  },
});

export default IndexScreen;
