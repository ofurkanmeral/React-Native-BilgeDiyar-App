import React, { Component } from 'react'
import { Text, KeyboardAvoidingView, View, StyleSheet, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native'
import Input from './Input'
export default class Login extends Component {
  render() {

    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <KeyboardAvoidingView behavior={'position'} />
          <Text style={styles.bas}>BilgeDiyar</Text>
          <Text style={styles.alt}>Bir Hayal Ürünüdür</Text>
        </View>

        <ScrollView>
          <View style={styles.login}>
            <Text style={styles.title}>Hop Hemşerim Nereye </Text>
            <Text style={styles.titlealt}>Parolayı söyle</Text>
            <View>
              <Text style={styles.sing}>Sing Up</Text>
              <Input
                returnKeyType={"next"}
                autoCapitalize="none"
                placeholder="Username"
                onSubmitEditing={() => this.passwordInput.focus()}
              />
              <Input
                returnKeyType={"go"}
                inputRef={input => this.passwordInput = input}
                secureTextEntry={true}
                placeholder="Password"
              />

              <View>
                <Button
                  title="Oturum Aç"
                  onPress={() => this.props.navigation.navigate('Home')}
                />
              </View>

            </View>
          </View>
        </ScrollView>
        <View style={styles.arena}>
          <Text style={styles.yaziarena}>Don't Have an Account?</Text>
          <TouchableOpacity>
            <Text style={styles.arenatoc}>Sing Up</Text>
          </TouchableOpacity>

        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafaf9',
  },
  head: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'lightblue',
    height: 250,
    width: '100%',
    paddingVertical: 70

  },
  bas: {
    textAlign: 'center',
    fontSize: 50,
    color: 'lightyellow'
  },
  alt: {
    textAlign: 'center',
  },
  login: {
    marginHorizontal: 40,
    marginVertical: 185,
    backgroundColor: '#fefeee',
    padding: 20,
    borderRadius: 7,

    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 3,
    shadowOffset: {
      width: 5,
      height: 3,
    },
    elevation: 10
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    color: 'grey'
  },
  titlealt: {
    textAlign: 'center',
    fontSize: 17,
    marginVertical: 5,

  },
  arena: {
    alignItems: 'center',
    marginBottom: 70

  },
  yaziarena: {
    fontSize: 15,
    color: 'darkgrey'
  },
  sing: {
    marginVertical: 10,
    fontSize: 17,
    color: '#333'
  },
  but: {
    alignItems: 'center',
    backgroundColor: 'lightblue',
    paddingHorizontal: 10,
    paddingVertical: 20,

  },
  yaz: {
    fontSize: 20,
    color: '#defaeeff'
  }




})
