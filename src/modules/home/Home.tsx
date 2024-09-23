import React, {useEffect} from "react";
import {
    View,
    Image,
    StyleSheet, Text,
} from 'react-native'

import {useLocalStore} from "mobx-react";
import HomeStore from "./HomeStore";

export default () => {

    const store = useLocalStore(() => new HomeStore())

    useEffect(() => {
        store.requestHomeList();
    }, []);

    return (
        <View style={styles.root}>

        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
