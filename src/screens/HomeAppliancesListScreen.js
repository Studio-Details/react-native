import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';

export default class HomeAppliancesListScreen extends React.Component {
  static navigationOptions = {
    title: '登録家電一覧',
    headerStyle: { backgroundColor: '#ff4c21', height: 60 },
    headerTitleStyle: { color: 'white', fontWeight: 'normal', fontSize: 18 },
    headerBackTitle: null,
    headerTintColor: 'white'
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
    return (
      <View style={styles.container}>
        <FlatList
          data={sampleHomeApps}
          renderItem={({item}) =>
            <View style={styles.itemContainer}>
              <TouchableOpacity
                onPress={() => navigate('HomeApplianceDetail')}>
                <View style={styles.button}>
                  <Image
                    style={styles.itemImage}
                    source={require('../common/img/image_fridge.png')}>
                  </Image>
                  <View style={styles.itemInfo}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemDetail}>{item.shop}</Text>
                    <Text style={styles.itemDetail}>購入日：{item.purchasedDate}</Text>
                    <Text style={styles.itemDetail}>メーカー保証：{item.security}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  itemContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 15
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  itemImage: {
    flex: 1,
    margin: 10
  },
  itemInfo: {
    flex: 2,
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  itemTitle : {
    fontWeight: 'bold'
  },
  itemDetail: {
    fontSize: 10
  },
  buttonTextUpper: {
    fontSize: 14,
    color: 'white'
  }
});
