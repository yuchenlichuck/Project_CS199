

import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Heading2, Heading3, Paragraph } from '../../widget/Text'
import { screen } from '../../common'
import { color } from '../../widget'

let count = 0

type Props = {
  info: Object,
  onPress: Function,
}


class GroupPurchaseCell extends PureComponent<Props> {

  render() {
    let { info } = this.props

    return (
      <TouchableOpacity style={styles.container} onPress={() => this.props.onPress(info)}>

        <View style={styles.rightContainer}>
          <Heading2>{info.title}</Heading2>
          <Paragraph numberOfLines={0} style={{ marginTop: 8 }}>{info.subtitle}</Paragraph>
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Heading2 style={styles.price}>{info.price} SAR</Heading2>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: screen.onePixel,
    borderColor: color.border,
    backgroundColor: 'white',
  },
  icon: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  rightContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 10,
  },
  price: {
    color: color.primary
  }
})


export default GroupPurchaseCell
