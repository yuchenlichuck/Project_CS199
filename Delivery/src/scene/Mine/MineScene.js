

import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'

import { Heading2, Heading3, Paragraph } from '../../widget/Text'
import { screen, system } from '../../common'
import { color, DetailCell, NavigationItem, SpacingView } from '../../widget'

type Props = {

}

type State = {
  isRefreshing: boolean,
  account: number
}

class MineScene extends PureComponent<Props, State> {
  static navigationOptions = ({ navigation }: any) => ({
    title: ' ',
    headerRight: () => (
      <View style={{ flexDirection: 'row' }}>
        <NavigationItem
          icon={require('../../img/mine/icon_navigation_item_set_white.png')}
          onPress={() => {

          }}
        />
        <NavigationItem
          icon={require('../../img/mine/icon_navigation_item_message_white.png')}
          onPress={() => {

          }}
        />
      </View>
    ),
    headerStyle: {
      backgroundColor: color.primary,
      elevation: 0,
      borderBottomWidth: 0,
    },
  })

  state: {
    isRefreshing: boolean,
    price: number
  }

  constructor(props: Object) {
    super(props)

    this.state = {
      isRefreshing: false,
      price: 0
    }
  }

  onHeaderRefresh() {
    this.setState({ isRefreshing: true })

    let address =global.AppConfig.serverIP + '/order/getBalance';
    const axios = require('axios');
    const _this=this;
    axios.post(address,
        {"Did":global.AppConfig.Did})
        .then(function (response) {


          _this.setState({
            price:response.data,
            refreshing: false,
          })
        })

    setTimeout(() => {
      this.setState({ isRefreshing: false })
    }, 2000)


  }

  renderCells() {
    let cells = []
    let dataList = this.getDataList()
    for (let i = 0; i < dataList.length; i++) {
      let sublist = dataList[i]
      for (let j = 0; j < sublist.length; j++) {
        let data = sublist[j]
        let cell = <DetailCell image={data.image} title={data.title} subtitle={data.subtitle} key={data.title} />
        cells.push(cell)
      }
      cells.push(<SpacingView key={i} />)
    }

    return (
      <View style={{ flex: 1 }}>
        {cells}
      </View>
    )
  }

  renderHeader() {
    return (
      <View style={styles.header}>

        </View>

    )
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: color.paper }}>
        <View style={{ position: 'absolute', width: screen.width, height: screen.height / 2, backgroundColor: color.primary }} />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={() => this.onHeaderRefresh()}
              tintColor='gray'
            />
          }>
          {this.renderHeader()}
          <SpacingView />
          {this.renderCells()}
        </ScrollView>
      </View>
    )
  }

  getDataList() {

    return (
      [
        [ {title:'Account', subtitle:this.state.price+' SAR', image: require('../../img/mine/icon_mine_balance.png') },
                ],

      ]
    )
  }

}


const styles = StyleSheet.create({
  icon: {
    width: 27,
    height: 27,
  },
  header: {
    backgroundColor: color.primary,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#51D3C6'
  }
})


export default MineScene
