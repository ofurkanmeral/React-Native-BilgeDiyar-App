import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import data from './data'

export default class Home extends Component {
  renderContactsItem = ({ item, index }) => {
    return (
      <TouchableOpacity>
      <View style={styles.itemContainer}>
        <Image
          style={styles.avatar}
          source={{ uri : item.picture }} />
        <View style={styles.textContainer}>
          <Text style={styles.ofm}>{item.name}</Text>
          <Text>{item.company}</Text>
        </View>
      </View>
      </TouchableOpacity>
    )
  };

  renderHeader = () => {
    return(
      <View style={styles.searchContainer}>
       <TextInput
         placeholder="Search..." style={styles.searchInput}
       />
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
        ListHeaderComponent={this.renderHeader}
          renderItem={this.renderContactsItem}
          keyExtractor={item => item._id}
          data={data} />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'lightblue'
  },
  ofm: {
    fontSize: 15,
    color: 'black'
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10
  },
  searchInput:{
  fontSize:16,
  backgroundColor:'white'
  },
  searchContainer:{
    padding:10
  }
});