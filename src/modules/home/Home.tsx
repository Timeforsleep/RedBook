import React, {useEffect} from "react";
import {
    View,
    Image,
    StyleSheet, Text, FlatList, Dimensions
} from 'react-native'

import {useLocalStore} from "mobx-react";
import HomeStore from "./HomeStore";
import {observer} from "mobx-react";

const {width: SCREEN_WIDTH, height} = Dimensions.get('window');

export default observer(() => {

    const store = useLocalStore(() => new HomeStore())

    useEffect(() => {
        store.requestHomeList();
    }, []);

    const renderItem = ({item, index}: { item: ArticleSimple, index: number }) => {
        return (
            <View style={styles.item}>
                <Image source={{uri: item.image}} style={styles.itemImg}/>
                <Text style={styles.titleTxt}>{item.title}</Text>
                <View style={styles.nameLayout}>
                    <Image style={styles.avatarImg} source={{uri:item.avatarUrl}}/>
                    <Text style={styles.nameTxt}>{item.userName}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.root}>
            <FlatList style={styles.flatList}
                      data={store.homeList}
                      renderItem={renderItem}
                      numColumns={2}
                      contentContainerStyle={styles.container}>
            </FlatList>
        </View>
    )
})

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    flatList: {
        width: '100%',
        height: '100%',
    },
    item: {
        width: SCREEN_WIDTH - 18 >> 1,
        backgroundColor: 'white',
        marginLeft: 6,
        marginBottom: 6,
        borderRadius: 8,
        overflow: 'hidden'
    },
    container: {
        paddingTop: 6,
    },
    itemImg: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
    },
    titleTxt: {
        fontSize: 14,
        color: "#333",
        marginHorizontal: 10,
        marginVertical: 4
    },
    nameLayout:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal:10,
        marginBottom:10
    },
    avatarImg: {
        width:20,
        height:20,
        resizeMode: 'cover',
        borderRadius:10,
    },
    nameTxt:{
        fontSize:12,
        color:'#999',
        marginLeft: 6,
    }
})
