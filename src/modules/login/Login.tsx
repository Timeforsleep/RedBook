import React, {useState} from "react";
import {
    View,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking
} from 'react-native'

import icon_logo_main from '../../assets/icon_main_logo.png'
import icon_unselected from '../../assets/icon_unselected.png'
import icon_selected from '../../assets/icon_selected.png'
import icon_arrow from '../../assets/icon_arrow.png'
import icon_wx_small from '../../assets/icon_wx_small.png'

export default () => {

    const [loginType, setLoginType] = useState<'quick' | 'input'>('quick')

    const [checked, setChecked] = useState<boolean>(false)
    const renderQuickLogin = () => {

        const styles = StyleSheet.create({
            root: {
                width: '100%',
                height: '100%',
                flexDirection: 'column-reverse',
                alignItems: 'center',
                paddingHorizontal: 56
            },
            protocolLayout: {
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 40
            },
            radioButton: {
                width: 20,
                height: 20,
            },
            labelTxt: {
                fontSize: 12,
                color: '#999',
                marginLeft: 6,
            },
            protocolTxt: {
                fontSize: 12,
                color: '#1020ff'
            },
            otherLoginButton: {
                flexDirection: "row",
                alignItems: 'center',
                paddingVertical: 20,
                paddingHorizontal: 10,
                marginBottom: 100
            },
            otherLoginTxt: {
                fontSize: 16,
                color: '#303080'
            },
            icon_arrow: {
                width: 16,
                height: 16,
                resizeMode: 'contain',
                marginLeft: 6,
                transform: [{rotate: '180deg'}]
            },
            wxLoginButton: {
                width: '100%',
                height:56,
                backgroundColor: '#05c160',
                borderRadius:28,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
            },
            oneKeyLoginButton: {
                marginBottom:20,
                width: '100%',
                height:56,
                backgroundColor: '#ff2442',
                borderRadius:28,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
            },
            icon_wx: {
                width:40,
                height:40,
            },
            wxLoginTxt: {
                fontSize:18,
                color: 'white',
                marginLeft: 6,
            },
            oneKeyLoginTxt: {
                fontSize:18,
                color: 'white',
                marginLeft: 6,
            },
            logoMain:{
                width:180,
                height:95,
                resizeMode:'contain',
                position: 'absolute',
                top:170,
            }
        })

        return (
            <View style={styles.root}>
                <View style={styles.protocolLayout}>
                    <TouchableOpacity onPress={() => {
                        setChecked(!checked)
                    }}>
                        <Image source={checked ? icon_selected : icon_unselected}
                               style={styles.radioButton}
                        />
                    </TouchableOpacity>
                    <Text style={styles.labelTxt}>我已阅读并同意</Text>
                    <TouchableOpacity
                        onPress={() => {
                            Linking.openURL('https://www.baidu.com')
                        }}
                    >
                        <Text style={styles.protocolTxt}>《用户协议》和《隐私政策》</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.otherLoginButton}
                onPress={()=>{setLoginType((type:'quick'|'input')=>{
                        if (type==='quick'){
                            return 'input'
                        }
                        return 'quick'
                    })
                }}>
                    <Text style={styles.otherLoginTxt}>其它登陆方式</Text>
                    <Image style={styles.icon_arrow} source={icon_arrow}></Image>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7} style={styles.wxLoginButton}>
                    <Image style={styles.icon_wx} source={icon_wx_small}></Image>
                    <Text style={styles.wxLoginTxt}>微信登陆</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7} style={styles.oneKeyLoginButton}>
                    <Text style={styles.oneKeyLoginTxt}>一键登陆</Text>
                </TouchableOpacity>

                <Image source={icon_logo_main} style={styles.logoMain}/>
            </View>
        )
    }

    const renderInputLogin = () => {
        return (
            <View>

            </View>
        )
    }

    return (
        <View style={styles.root}>
            {
                loginType === 'quick' ?
                    renderQuickLogin() : renderInputLogin()
            }
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo_main: {
        width: 200,
        height: 105,
        marginTop: 200,
        resizeMode: "contain"
    }
})
