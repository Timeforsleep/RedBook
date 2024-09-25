import React, {useEffect} from "react";
import {
    View,
    Image,
    StyleSheet, Text, FlatList, Dimensions
} from 'react-native'
import Heart from "../../components/Heart";

import {useLocalStore} from "mobx-react";
import HomeStore from "./HomeStore";
import {observer} from "mobx-react";
import FlowList from '../../components/flowlist/FlowList.js'
import ResizeImage from "../../components/ResizeImage";

import icon_heart from '../../assets/icon_heart.png'
import icon_heart_empty from '../../assets/icon_heart_empty.png'
import {Header} from "@react-navigation/stack";

const {width: SCREEN_WIDTH, height} = Dimensions.get('window');


export default observer(() => {

    const store = useLocalStore(() => new HomeStore())

    const refreshNewData = () => {
        store.resetPage()
        store.requestHomeList();
    }

    const loadMoreData = () => {
        store.requestHomeList();
    }

    useEffect(() => {
        store.requestHomeList();
    }, []);

    const renderItem = ({item, index}: { item: ArticleSimple, index: number }) => {
        return (
            <View style={styles.item}>
                <ResizeImage uri={item.image}/>
                <Text style={styles.titleTxt}>{item.title}</Text>
                <View style={styles.nameLayout}>
                    <Image style={styles.avatarImg} source={{uri: item.avatarUrl}}/>
                    <Text style={styles.nameTxt}>{item.userName}</Text>
                    <Heart
                        value={item.isFavorite}
                        size={20}
                        onValueChanged={(value: boolean) => {
                            console.log(value);
                        }}
                    />
                    <Text style={styles.countTxt}>{item.favoriteCount}</Text>
                </View>
            </View>
        )
    }

    const Footer = () => {
        return (
            <Text style={styles.footerTxt}>没有更多数据</Text>
        )
    }

    const Header = () => {
        return (
            <View style={{padding:16}}>
                {/*<Heart*/}
                {/*    value={true}*/}
                {/*    size={100}*/}
                {/*    onValueChanged={(value: boolean) => {*/}
                {/*        console.log(value);*/}
                {/*    }}*/}
                {/*/>*/}
            </View>
        )
    }

    return (
        <View style={styles.root}>
            <FlowList style={styles.flatList}
                      data={store.homeList}
                      renderItem={renderItem}
                      numColumns={2}
                      extraData={[store.refreshing]}
                      contentContainerStyle={styles.container}
                      refreshing={store.refreshing}
                      onEndReachedThreshold={0.1}
                      onEndReached={loadMoreData}
                      onRefresh={refreshNewData}
                      ListFooterComponent={Footer}
                      ListHeaderComponent={Header}>
            </FlowList>
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
    nameLayout: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 10
    },
    avatarImg: {
        width: 20,
        height: 20,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    nameTxt: {
        fontSize: 12,
        color: '#999',
        marginLeft: 6,
        flex: 1
    },
    heart: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    countTxt: {
        fontSize: 14,
        color: '#999',
        marginLeft: 4,
    },
    footerTxt: {
        width: '100%',
        fontSize: 14,
        color: '#999',
        marginVertical: 16,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})
