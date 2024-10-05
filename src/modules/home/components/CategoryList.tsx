import React, {useEffect, useState, useRef} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native'

import CategoryModal, {CategoryModalRef} from '../components/CategoryModal';

type Props = {
    categoryList: Category[];
    allCategoryList: Category[];
    onCategoryChange: (category: Category) => void;
};

import icon_arrow from '../../../assets/icon_arrow.png';

export default ({categoryList, allCategoryList, onCategoryChange}: Props) => {
    const modalRef = useRef<CategoryModalRef>(null);

    const [currentCategoryList, setCurrentCategoryList] = useState<Category[]>(categoryList);
    const [category, setCategory] = useState<Category>();

    useEffect(() => {
        console.log("gyk" + currentCategoryList.length);
        setCategory(currentCategoryList.find(i => i.name === '推荐'));
    }, [currentCategoryList]);

    useEffect(() => {
        console.log("gyk" + categoryList.length);
        setCurrentCategoryList(categoryList)
        // setCategory(currentCategoryList.find(i => i.name === '推荐'));
    }, [categoryList]);

    const onCategoryPress = (category: Category) => {
        setCategory(category);
        onCategoryChange?.(category);
    };

    // 更新分类列表
    const handleCategoryUpdate = (updatedList: Category[]) => {
        // 更新当前显示的分类列表
        setCurrentCategoryList(updatedList.filter(i => i.isAdd));
    };

    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.scrollView}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {currentCategoryList.map((item: Category, index: number) => {
                    const isSelected = item.name === category?.name;
                    return (
                        <TouchableOpacity
                            key={`${item.name}`}
                            style={styles.tabItem}
                            onPress={() => onCategoryPress(item)}
                        >
                            <Text style={isSelected ? styles.tabItemTxtSelected : styles.tabItemTxt}>{item.name}</Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
            <TouchableOpacity
                style={styles.openButton}
                onPress={() => {
                    modalRef.current?.show();
                }}
            >
                <Image style={styles.openImg} source={icon_arrow}/>
            </TouchableOpacity>

            <CategoryModal
                ref={modalRef}
                categoryList={allCategoryList}
                onCategoryUpdate={handleCategoryUpdate} // 传递回调函数
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 36,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginBottom: 6,
    },
    scrollView: {
        flex: 1,
        height: '100%',
    },
    openButton: {
        width: 40,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    openImg: {
        width: 18,
        height: 18,
        transform: [{rotate: '-90deg'}]
    },
    tabItem: {
        width: 64,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabItemTxt: {
        fontSize: 16,
        color: '#999',
    },
    tabItemTxtSelected: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
    },
});
