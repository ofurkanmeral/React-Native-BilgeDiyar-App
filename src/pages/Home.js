import React, { Component } from 'react'
import { Text, View, StyleSheet, Button,Image } from 'react-native'


class Titlelogo extends Component{
    render(){
        return(
        <Image
            style={{width:75,height:75}}
            source={require('../../image/like.png')}
        />
        
        )
    }
}

export default class Home extends Component {
    static navigationOptions ={
       
        headerTitle:<Titlelogo/>,
       
        headerTransparent:true
        
    }
    render() {
        const { navigate } = this.props.navigation;
      
        return (
            <View style={styles.container}>
                <Text>başlıyoruz </Text>
                <Button
                    title="Roman"
                    onPress={() => navigate('Detail', {
                        title: 'Albert Camus'
                    })}
                />

                <Button
                    title="Edebiyat"
                    onPress={() => navigate('Detail', {
                        title: ' Fydor Dostoyevski'
                    })}
                />

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue'
    }
})