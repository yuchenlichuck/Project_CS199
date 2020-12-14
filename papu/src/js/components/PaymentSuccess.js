import React, {useState}  from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Theme} from '../constants/constants'
import YouRockIcon from './icons/YouRockIcon'
import PropTypes from 'prop-types'
import BigButton from './BigButton'
import pop from '../utils/pop'

class PaymentSuccess extends React.Component {
    constructor(props) {
        super(props);
        this.state = {titleText: 'Order Successfully!',
                      bodyText: 'Your food is on it way'};
    }
    render() {
        const {navigation} = this.props
            const recived = () => {
                try {
                    let address = "http://10.21.109.37:8080/order/getByMail";
                    const axios = require('axios');
                    let data = {};
                    data.email = window.email
                    console.log(data)
                    axios.post(address,
                        data
                                 )
                        .then(response => {
                            if (response.data == 1) {
                                this.setState({titleText: "Received Successfully!"});
                                this.setState({bodyText :"Enjoy your delicious food delivery ~"})
                            }
                            else if (response.data == -1) {
                                this.setState({titleText: "Check Order Again!"});
                                this.setState({bodyText :"Delivery is still on the way ～"})

                            }

                            console.log(response);
                            console.log(response.data);

                        })
                } catch (error) {
                    alert("Delivery is still on the way ～")
                }
            }
            const handlePress = () => {
                pop({screen: 'Menu', n: 3, navigation})
            }

            return (
                <View style={styles.main}>
                    <View style={styles.container}>
                        <View style={styles.errorIcon}>
                            <YouRockIcon/>
                        </View>
                        <Text style={[styles.text, styles.header]}>{this.state.titleText}</Text>
                        <Text style={[styles.text, styles.message]}>
                            {this.state.bodyText}
                        </Text>
                    </View>
                    <BigButton
                        title="CHECK ORDER"
                        color={Theme.COLOR_4}
                        rightChevron={true}
                        leftChevron={true}
                        onLeftPress={handlePress}
                        onRightPress={recived}
                    />
                </View>
            );
      // }
    }
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between'
    },
    container: {
        padding: 16
    },
    text: {
        color: Theme.COLOR_4,
        fontFamily: 'Avenir',
        textAlign: 'center'
    },
    header: {
        fontSize: 50
    },
    message: {
        fontSize: 20
    },
    errorIcon: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        paddingBottom: 16
    }
})
// const PaymentSuccess = ({navigation}) => {
//     let titleText = useState("Order Successfully!");
//     let bodyText = useState("Your food is on it&#39;s way");
//     const recived = () => {
//         //const data = this.form.getData()
//         try {
//             //Alert.alert('message','Finished!')
//             let address = "http://10.21.109.37:8080/order/getByMail";
//             const axios = require('axios');
//             //const _this=this;
//             let data = {};
//             data.email = window.email
//             console.log(data)
//             axios.post(address,
//                 data
//                 // "{\"address\":\"nanshan xueyuan road 1088\",\"email\":\"yuchenlichuck@gmail.comss\",\"instructions\":\"sasa\",\"price\":2985}"
//             )
//                 .then(response => {
//                     if (response.data=1){
//                     titleText = useState("Received Successfully!")
//                     }
//                     if (response.data=-1){
//                         bodyText = useState("Delivery is still on the way ～")
//                     }
//
//                     console.log(response);
//                     console.log(response.data);
//                     //alert(response.data)
//                     // alert("Delivery has been sent! :)")
//                 })
//         } catch (error) {
//             // console.log(error);
//             alert("Delivery is still on the way ～")
//             //this.setState({ refreshing: false })
//         }
//     }
//     const handlePress = () => {
//         pop({screen: 'Menu', n: 3, navigation})
//     }
//
//     return (
//         <View style={styles.main}>
//             <View style={styles.container}>
//                 <View style={styles.errorIcon}>
//                     <YouRockIcon/>
//                 </View>
//                 <Text style={[styles.text, styles.header]} >{titleText}</Text>
//                 <Text style={[styles.text, styles.message]}>
//                     {bodyText}
//                 </Text>
//             </View>
//             <BigButton
//                 title="CHECK ORDER"
//                 color={Theme.COLOR_4}
//                 rightChevron={true}
//                 leftChevron={true}
//                 onLeftPress={handlePress}
//                 onRightPress={recived}
//             />
//         </View>
//     )
// }
//
// const styles = StyleSheet.create({
//     main: {
//         flex: 1,
//         backgroundColor: '#fff',
//         justifyContent: 'space-between'
//     },
//     container: {
//         padding: 16
//     },
//     text: {
//         color: Theme.COLOR_4,
//         fontFamily: 'Avenir',
//         textAlign: 'center'
//     },
//     header: {
//         fontSize: 50
//     },
//     message: {
//         fontSize: 20
//     },
//     errorIcon: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         paddingTop: 16,
//         paddingBottom: 16
//     }
// })
PaymentSuccess.propTypes = {
    navigation: PropTypes.object
}
export default PaymentSuccess;
