/*import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import Input from './Input'
import Button from './Buton'

export default class Loginform extends Component {
    render() {
        return (
            <View>
               <Text style={styles.sing}>Sing Up</Text>
               <Input
                    returnKeyType={"next"}
                   autoCapitalize="none"
                   placeholder="Username"
                   onSubmitEditing={()=>this.passwordInput.focus()}
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
                   onPress={ () =>this.props.navigation.navigate(Home)}
               />
            </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    sing:{
        marginVertical:10,
        fontSize:17,
        color:'#333'
    },
    but:{
        alignItems:'center',
        backgroundColor:'lightblue',
        paddingHorizontal:10 ,
        paddingVertical:20,

    },
    yaz:{
        fontSize:20,
        color:'#defaeeff'
    }

})
*/