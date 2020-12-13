import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image, StatusBar, FlatList } from 'react-native'
import '../../config/config.js';
import { Heading2, Heading3, Paragraph } from '../../widget/Text'
import { color, Button, NavigationItem, SpacingView } from '../../widget'
import axios from 'axios'
import { screen, system } from '../../common'
import GroupPurchaseCell from '../GroupPurchase/GroupPurchaseCell'

type Props = {
  navigation: any,
}

type State = {
  discounts: Array<Object>,
  dataList: Array<Object>,
  refreshing: boolean,
}


class HomeScene extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      discounts: [],
      dataList: [],
      refreshing: false,
    }
  }

  componentDidMount() {
    this.requestData()
  }

  requestData = () => {
    this.setState({ refreshing: true })
    this.requestRecommend()
  }

  requestRecommend = async () => {
    try {
      let address =global.AppConfig.serverIP + '/order/getUnreceived';
      const axios = require('axios');
      const _this=this;
      axios.get(address)
          .then(function (response) {
                let dataList = response.data.map(
                (info) => {
                  return {
                    id: info.id,
                    title: info.mail,
                    subtitle: info.address,
                    price: info.price,
                    insturction: info.insturction
                  }
                }
                )
                _this.setState({
                  dataList: dataList,
                  refreshing: false,
                })
           })


    } catch (error) {
      this.setState({ refreshing: false })
    }
  }

  renderCell = (info: Object) => {
    return (
      <GroupPurchaseCell
        info={info.item}
        onPress={this.onCellSelected}
      />
    )
  }

  onCellSelected = (info: Object) => {
    StatusBar.setBarStyle('default', false)
    this.props.navigation.navigate('GroupPurchase', { info: info })
  }

  keyExtractor = (item: Object, index: number) => {
    return item.id.toString()
  }



  renderHeader = () => {
    return (
      <View>
        <View style={styles.recommendHeader}>
          <Heading3>order list</Heading3>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataList}
          renderItem={this.renderCell}

          keyExtractor={this.keyExtractor}
          onRefresh={this.requestData}
          refreshing={this.state.refreshing}

          ListHeaderComponent={this.renderHeader}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.paper
  },
  recommendHeader: {
    height: 35,
    justifyContent: 'center',
    borderWidth: screen.onePixel,
    borderColor: color.border,
    paddingVertical: 8,
    paddingLeft: 20,
    backgroundColor: 'white'
  },
  searchBar: {
    width: screen.width * 0.7,
    height: 30,
    borderRadius: 19,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  searchIcon: {
    width: 20,
    height: 20,
    margin: 5,
  }
})


export default HomeScene
