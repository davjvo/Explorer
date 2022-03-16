import React from 'react';

import { StyleSheet } from "react-native";

const fontStyles = StyleSheet.create({
    gray: {
        color: '#808080'
    },
    weight300: {
        fontWeight: '300'
    },
    weight600: {
        fontWeight: '600'
    },
    bold: {
        fontWeight: '800'
    },
    black: {
        color: '#000'
    },
    white: {
        color: '#fff'
    }
});

const viewStyles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    spaceAround: {
        justifyContent: 'space-around'
    },
    spaceBetween: {
        justifyContent: 'space-between'
    },
    center: {
        alignItems: 'center'
    }
})

export default { fontStyles, viewStyles };