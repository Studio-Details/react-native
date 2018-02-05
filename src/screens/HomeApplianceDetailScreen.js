import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';

export default class HomeApplianceDetailScreen extends React.Component {
  static navigationOptions = {
    title: '登録家電一覧',
    headerStyle: { backgroundColor: '#ff4c21', height: 60 },
    headerTitleStyle: { color: 'white', fontWeight: 'normal', fontSize: 18 },
    headerBackTitle: '←',
    headerBackTitleStyle: { color: 'white', fontWeight: 'normal', fontSize: 18 },
  };

  render() {
    const { navigate } = this.props.navigation;
    const sampleHomeApps = [
      {
        key: 1,
        title: '東芝/冷蔵庫',
        image: 'image_fridge.png',
        shop: 'コスモスベリーズリーズ　〇〇店',
        purchasedDate: '2017/12/13',
        security: '長期保証無料'
      },
      {
        key: 2,
        title: '東芝/冷蔵庫',
        image: 'image_fridge.png',
        shop: 'コスモスベリーズリーズ　〇〇店',
        purchasedDate: '2017/12/13',
        security: '長期保証無料'
      },
      {
        key: 3,
        title: '東芝/冷蔵庫',
        image: 'image_fridge.png',
        shop: 'コスモスベリーズリーズ　〇〇店',
        purchasedDate: '2017/12/13',
        security: '長期保証無料'
      },
      {
        key: 4,
        title: '東芝/冷蔵庫',
        image: 'image_fridge.png',
        shop: 'コスモスベリーズリーズ　〇〇店',
        purchasedDate: '2017/12/13',
        security: '長期保証無料'
      },
    ];

    var item = {
      key: 4,
      title: '東芝/冷蔵庫',
      image: 'image_fridge.png',
      shop: 'コスモスベリーズリーズ　〇〇店',
      purchasedDate: '2017/12/13',
      security: '長期保証無料'
    };
    return (
      <ScrollView style={styles.container}>
        <View style={styles.itemContainer}>
          <TouchableOpacity>
            <View style={styles.button}>
              <Image
                style={styles.itemImage}
                source={require('../common/img/image_fridge.png')}>
              </Image>
            </View>
          </TouchableOpacity>
          <View style={styles.itemInfo}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemDetail}>{item.shop}</Text>
            <Text style={styles.itemDetail}>購入日：{item.purchasedDate}</Text>
            <Text style={styles.itemDetail}>メーカー保証：{item.security}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  itemContainer: {
    backgroundColor: 'white',
    height: 400,
    borderRadius: 10,
    margin: 15,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemImage: {
    height: 200,
    width: 200,
    margin: 10
  },
  itemInfo: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  itemTitle : {
    fontSize: 20,
    fontWeight: 'bold'
  },
  itemDetail: {
    fontSize: 15,
    color: 'grey'
  },
  buttonTextUpper: {
    fontSize: 14,
    color: 'white'
  }
});
