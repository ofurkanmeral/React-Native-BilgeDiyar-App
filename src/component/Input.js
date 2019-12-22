import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'

export default class Input extends Component {
    state = {
        text: ''
    };
    render() {
        return (
            <View>
                <TextInput
                    {...this.props}
                    placeholderTextColor="lightgrey"
                    style={styles.input}
                    value={this.state.text}
                    ref={this.props.inputRef}
                    onChangeText={text => this.setState({ text })} />


            </View>
        );

    }
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#a3212222',
        marginBottom: 7,
        fontSize:15,
        fontWeight:'800'
    }
})