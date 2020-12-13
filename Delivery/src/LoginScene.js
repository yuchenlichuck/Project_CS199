import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScene from './scene/Home/HomeScene'
import { createAppContainer } from 'react-navigation'
import './config/config.js';
import axios from 'axios'
import {
    PixelRatio,
    View,
    Text,
    TextInput,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    Navigator
} from 'react-native'
import RootScene from './RootScene'
import {name as appName} from "../app";


type Props = {
    onPress: Function,
    icon: any,
    title: string,
}



class Login extends Component {
    constructor(props) {
        super(props);
        this.afterEnd =  this._afterEnd;
        this.navigation = props.navigation;
        this.state = {
            username: '',
            password: '',
            token: '',
            timeLeft:60,
            begin:0,
            isDisable:false
        };
    }
    componentDidMount() {

        setTimeout(() => {

        }, 3000);
    }

    static navigationOptions = {
        header:null,
    };
    countdownfn(timeLeft, callback, begin) {
        if (timeLeft > 0) {
            this.state.begin = 1;

            let that = this;
            let interval = setInterval(function () {
                if (that.state.timeLeft < 1) {
                    clearInterval(interval);
                    callback(that)
                    that.setState({
                        isDisable:false
                    })
                } else {
                    let totalTime = that.state.timeLeft;
                    that.setState({
                        timeLeft: totalTime - 1,
                        isDisable:true
                    })
                }
            }, 1000)
        }
    }
    _beginCountDown() {
        alert("======>>"+this.state.username)
        if (this.state.begin === 1){
            return;
        }
        let time = this.state.timeLeft;
        let afterEnd = this.afterEnd;
        let begin = this.state.begin;
        this.countdownfn(time, afterEnd, begin)
    }
    _afterEnd(that) {
        that.setState({
            begin : 0,
            timeLeft : 60,

        })
    }


    onPressLogin() {
        let address =global.AppConfig.serverIP + '/deliveryman/Login';
        const axios = require('axios');
        const _this=this;
     //   alert("wrong password")

        axios.post(address,
            {"username":_this.state.username,
            "password":_this.state.password})
            .then(function (response) {
              //  alert("wrong password")
                if(response.data===-1){
                    alert("wrong password")
                }else if(response.data===-2){
                    alert("register successful!")

                }
                else{
                    global.AppConfig.Did = response.data
                    _this.props.navigation.navigate("Tab")
                }

/**/
            })



    }
    render() {
       // return RootScene;
        const { actions, state, navigation } = this.props;
        return (
            <ScrollView
                contentContainerStyle={{ flex: 1 }}
                keyboardDismissMode="on-drag"
                keyboardShouldPersistTaps='never'
                scrollEnabled={false}
            >
                <View style={styles.container}>
                    <View style={styles.containers}>
                        <Text style={styles.textStyle}>LoginPage</Text>
                    </View>

                    <View style={styles.inputView}>
                        <View style={[styles.view, styles.lineTopBottom]}>
                            <Text style={styles.text}>Username:</Text>
                            <TextInput
                                style={styles.textInputStyle}
                                placeholder="......"
                                clearButtonMode="while-editing"
                                secureTextEntry={false}
                                onChangeText={(text) => {
                                    this.setState({
                                        username: text
                                    });
                                }}
                                value={this.state.username}
                            />
                        </View>
                        <View style={[styles.view, styles.lineTopBottom]}>
                            <Text style={styles.text}>Password:</Text>
                            <TextInput
                                style={styles.textInputStyle}
                                placeholder="......"
                                clearButtonMode="while-editing"
                                secureTextEntry
                                onChangeText={(text) => {
                                    this.setState({
                                        password: text
                                    });
                                }}
                                value={this.state.password}
                            />

                        </View>
                    </View>
                    <View style={styles.buttonView}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.onPressLogin()}
                        >
                            <Text style={styles.buttonText}>Login</Text>

                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}




const styles = StyleSheet.create({
    textStyle:{
        fontSize:36,
        textAlign:'center',
        backgroundColor:'#FFFFFF',
        color:'#FF0000'
    },
    containers:{

        justifyContent: 'flex-end',
        alignItems:'center',
        backgroundColor:'#FFFFFF'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonView: {

        alignItems:'center',
        flex: 3
    },
    inputView: {
        padding: 5,
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent: 'center',
    },
    lineBottom: {
        borderBottomWidth: 5 / PixelRatio.get(),
        borderColor: 'rgb(208,208,208)'
    },
    button: {
        marginTop: 30,

        height: 44,
        borderRadius: 10,
        backgroundColor: '#FF0101',
        justifyContent: 'center',
        alignItems:'center'
    },
    buttonText: {
        fontSize: 22,
        textAlign: 'center',
        color: 'white',

    },
    text: {
        lineHeight: 44,
        fontSize: 14,
    },
    texts: {
        lineHeight: 44,
        fontSize: 16,
        color:'#1874CD'
    },
    view: {
        flexDirection: 'row',
        height: 44,

    },
    textInputStyle: {
        flex: 5,
        marginRight: 10,
        marginLeft:20,
        fontSize: 16,
        marginTop: 4,

    },
    lineTopBottom: {
        borderBottomWidth: 3 / PixelRatio.get(),
        borderColor: 'rgb(208,208,208)',
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Login