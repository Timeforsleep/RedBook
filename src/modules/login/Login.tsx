import React, {useState} from "react";
import {
    View,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking,
    TextInput,
    LayoutAnimation
} from 'react-native'

import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import { formatPhone,replaceBlank } from '../../utils/StringUtil'

import icon_logo_main from '../../assets/icon_main_logo.png'
import icon_unselected from '../../assets/icon_unselected.png'
import icon_selected from '../../assets/icon_selected.png'
import icon_arrow from '../../assets/icon_arrow.png'
import icon_wx_small from '../../assets/icon_wx_small.png'
import icon_triangle from '../../assets/icon_triangle.png'
import icon_eye_open from '../../assets/icon_eye_open.png'
import icon_eye_close from '../../assets/icon_eye_close.png'
import icon_exchange from '../../assets/icon_exchange.png'
import icon_wx from '../../assets/icon_wx.png'
import icon_qq from '../../assets/icon_qq.webp'
import icon_close_modal from '../../assets/icon_close_modal.png'

export default () => {

    const [loginType, setLoginType] = useState<'quick' | 'input'>('quick')

    const [checked, setChecked] = useState<boolean>(false)

    const [eyeOpen, setEyeOpen] = useState<boolean>(true)

    const [phone, setPhone] = useState<String>("")

    const [pwd, setPwd] = useState<string>("")

    const navigation = useNavigation<StackNavigationProp<any>>();
    const renderQuickLogin = () => {

        const styles = StyleSheet.create({
            root: {
                width: '100%',
                height: '100%',
                flexDirection: 'column-reverse',
                alignItems: 'center',
                paddingHorizontal: 56
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
                height: 56,
                backgroundColor: '#05c160',
                borderRadius: 28,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
            },
            oneKeyLoginButton: {
                marginBottom: 20,
                width: '100%',
                height: 56,
                backgroundColor: '#ff2442',
                borderRadius: 28,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
            },
            icon_wx: {
                width: 40,
                height: 40,
            },
            wxLoginTxt: {
                fontSize: 18,
                color: 'white',
                marginLeft: 6,
            },
            oneKeyLoginTxt: {
                fontSize: 18,
                color: 'white',
                marginLeft: 6,
            },
            logoMain: {
                width: 180,
                height: 95,
                resizeMode: 'contain',
                position: 'absolute',
                top: 170,
            }
        })

        return (
            <View style={styles.root}>
                <View style={allStyles.protocolLayout}>
                    <TouchableOpacity onPress={() => {
                        setChecked(!checked)
                    }}>
                        <Image source={checked ? icon_selected : icon_unselected}
                               style={allStyles.radioButton}
                        />
                    </TouchableOpacity>
                    <Text style={allStyles.labelTxt}>我已阅读并同意</Text>
                    <TouchableOpacity
                        onPress={() => {
                            Linking.openURL('https://www.baidu.com')
                        }}
                    >
                        <Text style={allStyles.protocolTxt}>《用户协议》和《隐私政策》</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.otherLoginButton}
                                  onPress={() => {
                                      LayoutAnimation.easeInEaseOut()
                                      setLoginType('input')
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
        const styles = StyleSheet.create({
            root: {
                width: '100%',
                height: '100%',
                flexDirection: 'column',
                alignItems: 'center',
                paddingHorizontal: 48
            },
            pwdLogin: {
                fontSize: 28,
                color: '#333',
                fontWeight: 'bold',
                marginTop: 56
            },
            tips: {
                fontSize: 14,
                color: '#bbb',
                marginTop: 8
            },
            phoneLayout: {
                width: '100%',
                height: 60,
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: '#ddd',
                marginTop: 28
            },
            pre86: {
                fontSize: 24,
                color: "#bbb"
            },
            triangle: {
                width: 12,
                height: 6,
                marginLeft: 4
            },
            phoneInput: {
                flex: 1,
                height: 60,
                backgroundColor: 'transparent',
                textAlignVertical: 'center',
                fontSize: 24,
                color: '#333',
                marginLeft: 16
            },
            pwdLayout: {
                width: '100%',
                height: 60,
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: '#ddd',
                marginTop: 8
            },
            pwdInput: {
                marginLeft: 0,
                marginRight: 16
            },
            iconEye: {
                width: 30,
                height: 30,
            },
            changeLayout: {
                width: '100%',
                marginTop: 10,
                alignItems: 'center',
                flexDirection: 'row',
            },
            exchangeIcon: {
                width: 16,
                height: 16,
            },
            codeLoginTxt:{
                fontSize: 14,
                color:"#303080",
                flex:1,
                marginLeft:4
            },
            forgetPwdTxt:{
                fontSize: 14,
                color:"303080",
            },
            loginButton:{
                width:"100%",
                height:56,
                backgroundColor:'#ff2442',
                justifyContent:'center',
                alignItems: 'center',
                borderRadius:28,
                marginTop:20
            },
            loginButtonDisable:{
                width:"100%",
                height:56,
                backgroundColor:'#dddddd',
                justifyContent:'center',
                alignItems: 'center',
                borderRadius:28,
                marginTop:20
            },
            loginTxt:{
                fontSize:20,
                color:'white'
            },
            wxqqLayout:{
                width:"100%",
                flexDirection:'row',
                marginTop:54,
                justifyContent:'center',
            },
            iconWx:{
                width:50,
                height:50,
                marginRight:60
            },
            iconQq:{
                width:50,
                height:50,
                marginLeft:60
            },
            closeButton:{
                position:'absolute',
                left:36,
                top:24
            },
            closeImg:{
                width:28,
                height:28,
            }
        })
        const canLogin = phone?.length === 13 && pwd?.length === 6
        return (
            <View style={styles.root}>
                <Text style={styles.pwdLogin}>密码登陆</Text>
                <Text style={styles.tips}>未注册的手机号登陆成功后将自动注册</Text>
                <View style={styles.phoneLayout}>
                    <Text style={styles.pre86}>+86</Text>
                    <Image style={styles.triangle} source={icon_triangle}></Image>
                    <TextInput style={styles.phoneInput}
                               placeholderTextColor="#bbb"
                               placeholder={"请输入手机号码"}
                               keyboardType={'number-pad'}
                               maxLength={13}
                               value={phone}
                               autoFocus={false}
                               onChangeText={(text) => {
                                   setPhone(formatPhone(text));
                               }}
                    />
                </View>
                <View style={styles.pwdLayout}>
                    <TextInput style={[styles.phoneInput, styles.pwdInput]}
                               placeholderTextColor="#bbb"
                               placeholder={"请输入密码"}
                               keyboardType={'number-pad'}
                               maxLength={6}
                               secureTextEntry={!eyeOpen}
                               value={pwd}
                               onChangeText={(text) => {
                                   setPwd(text)
                               }}
                               autoFocus={false}/>
                    <TouchableOpacity
                        onPress={() => {
                            setEyeOpen(!eyeOpen)
                        }}>
                        <Image style={styles.iconEye} source={eyeOpen ? icon_eye_close : icon_eye_open}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.changeLayout}>
                    <Image style={styles.exchangeIcon} source={icon_exchange}></Image>
                    <Text style={styles.codeLoginTxt}>验证码登陆</Text>
                    <Text style={styles.forgetPwdTxt}>忘记密码？</Text>
                </View>

                <TouchableOpacity style={canLogin?styles.loginButton:styles.loginButtonDisable}
                activeOpacity={canLogin?0.7:1} onPress={() => {
                    const purePhone = replaceBlank(phone);
                    if (!canLogin||!checked) {
                        return
                    }
                    //TODO 去登陆
                    navigation.replace('HomeTab');
                }}>
                    <Text style={styles.loginTxt}>登陆</Text>
                </TouchableOpacity>

                <View style={allStyles.protocolLayout}>
                    <TouchableOpacity onPress={() => {
                        setChecked(!checked)
                    }}>
                        <Image source={checked ? icon_selected : icon_unselected}
                               style={allStyles.radioButton}
                        />
                    </TouchableOpacity>
                    <Text style={allStyles.labelTxt}>我已阅读并同意</Text>
                    <TouchableOpacity
                        onPress={() => {
                            Linking.openURL('https://www.baidu.com')
                        }}
                    >
                        <Text style={allStyles.protocolTxt}>《用户协议》和《隐私政策》</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.wxqqLayout}>
                    <Image style={styles.iconWx} source={icon_wx}/>
                    <Image style={styles.iconQq} source={icon_qq}/>
                </View>

                <TouchableOpacity style={styles.closeButton} onPress={()=>{
                    LayoutAnimation.easeInEaseOut();
                    setLoginType('quick')
                }}>
                    <Image style={styles.closeImg} source={icon_close_modal}/>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={allStyles.root}>
            {
                loginType === 'quick' ?
                    renderQuickLogin() : renderInputLogin()
            }
        </View>
    )
}

const allStyles = StyleSheet.create({
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
    },
    protocolLayout: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 40,
        marginTop:12
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
})
