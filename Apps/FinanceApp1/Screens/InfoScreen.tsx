
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import sharedStyles from '../../../SharedStyles/styles';

const Title = () => {
    const titleStyles = StyleSheet.create({
        container: { 
            padding: 12, 
            backgroundColor: "#179A94", 
            marginHorizontal: 200/2, 
            marginVertical: 20, 
            borderRadius: 12 
        },
        text: { 
            fontSize: 18, 
            color: "#fff", 
            textAlign: 'center'  
        }
    })

    return (
        <View style={titleStyles.container}>
            <Text style={[ sharedStyles.fontStyles.weight600, titleStyles.text ]}>
                Income
            </Text>
        </View>
    );
};

const Graph = () => {
    return (
        <View>
            <Text>Graph</Text>
        </View>
    )
}

const InfoScreen = () =>{
    return (
        <View>
            <Title />

            <View>
                <Text>Graph</Text>
            </View>

            <View>
                <Text>Categories</Text>
            </View>
        </View>
    );
}

export default InfoScreen;