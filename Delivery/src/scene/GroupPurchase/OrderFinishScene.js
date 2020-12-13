

import React, { PureComponent } from 'react'
import {Alert, View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image, InteractionManager } from 'react-native'
import RefreshListView, { RefreshState } from 'react-native-refresh-list-view'
import { color, Button, NavigationItem, Separator, SpacingView } from '../../widget'
import { Heading2, Heading3, Paragraph, Heading1 } from '../../widget/Text'
import { screen, system } from '../../common'
import * as api from '../../api'
import OrderFinishCell from './OrderFinishCell'

type Props = {
    navigation: any,
}

type State = {
    data: Array<Object>,
    refreshState: number,
}


class OrderFinishScene extends PureComponent<Props, State> {

    static navigationOptions = ({ navigation }: any) => ({
        title: 'Detail',
        headerStyle: { backgroundColor: 'white' },
        headerRight: () => (
            <NavigationItem
                onPress={() => {
                }}
            />
        ),
    })

    constructor(props: Props) {
        super(props)

        this.state = {
            data: [],
            refreshState: RefreshState.Idle,
        }
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.requestData()
        })
    }

    requestData = () => {
        this.requestRecommend()
    }

    requestRecommend = async () => {
        try {
            this.setState({ refreshState: RefreshState.HeaderRefreshing })
            let dataList = api.recommend.data.map((info) => {
                return {
                    id: info.id,
                    imageUrl: info.imgurl,
                    title: info.brandname,
                    subtitle: `[${info.range}]${info.title}`,
                    price: info.price
                }
            })

            this.setState({
                data: dataList,
                refreshState: RefreshState.NoMoreData,
            })
        } catch (error) {
            this.setState({
                refreshState: RefreshState.Failure,
            })
        }
    }

    keyExtractor = (item: Object, index: number) => {
        return item.id.toString()
    }

    reveivedOrder = async (id) => {
        try {
            Alert.alert('message','Finished!')
            let address =global.AppConfig.serverIP + '/order/OrderFinish';
            const axios = require('axios');
            const _this=this;

            axios.post(address,

                {"OrderId":id})

                .then(response => (

                    console.log(response)

                ))
        } catch (error) {
            this.setState({ refreshing: false })
        }
    }
    renderHeader = () => {
        let info = this.props.navigation.state.params.info

        return (
            <View>
                <View>
                    <View style={styles.topContainer}>
                        <Heading2 style={{ color: color.primary }}>SAR</Heading2>
                        <Heading1 style={{ marginBottom: -8 }}>{info.price}</Heading1>

                        <View style={{ flex: 1 }} />
                        <Button
                            title='Finish'
                            titleStyle={{ color: 'black', fontSize: 18 }}
                            style={styles.buyButton}
                            onPress={()=>{

                                this.reveivedOrder(info.id)


                            }}
                        />
                    </View>
                    <View style={styles.topContainer}>
                        <Paragraph style={{ marginLeft: 10 }}>delivery address：{info.subtitle} </Paragraph>
                    </View>
                    <View style={styles.topContainer}>
                        <Paragraph style={{ marginLeft: 10 }}>email：{info.title} </Paragraph>
                    </View>
                    <View style={styles.topContainer}>
                        <Paragraph style={{ marginLeft: 10 }}>instruction：{info.instruction} </Paragraph>
                    </View>
                    <View style={styles.topContainer}>
                        <Heading1 style={{ marginLeft: 10, color: '#000000' }}>Pickup Code: {info.id+10000} </Heading1>
                    </View>
                </View>
                <Separator />
                <View>

                </View>
                <SpacingView />

            </View>
        )
    }



    render() {
        return (
            <View style={styles.container}>
                <RefreshListView
                    data={this.state.data}
                    ListHeaderComponent={this.renderHeader}
                    keyExtractor={this.keyExtractor}
                    refreshState={this.state.refreshState}
                   onHeaderRefresh={this.requestData}
                />
            </View>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    banner: {
        width: screen.width,
        height: screen.width * 0.5
    },
    topContainer: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    buyButton: {
        backgroundColor: '#fcf000',

        width: 94,
        height: 36,
        borderRadius: 7,
    },
    tagContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    },
    tipHeader: {
        height: 35,
        justifyContent: 'center',
        borderWidth: screen.onePixel,
        borderColor: color.border,
        paddingVertical: 8,
        paddingLeft: 20,
        backgroundColor: 'white'
    }
})


export default OrderFinishScene
