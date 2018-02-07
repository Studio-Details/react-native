import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';

export default class HomeApplianceEditScreen extends React.Component {
  static navigationOptions = { title: '登録家電一覧' };

  render() {
    var item = {
      key: 4,
      title: '東芝/冷蔵庫',
      image: 'image_fridge.png',
      shop: 'コスモスベリーズリーズ　〇〇店',
      purchasedDate: '2017/12/13',
      security: '長期保証無料'
    };
    const shortBorder = <View style={styles.shortBorder}></View>;
    const longBorder = <View style={styles.longBorder}></View>;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.buttonsContainer}>
          <View style={styles.editButton}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}>
              <Text style={styles.editButtonText}>キャンセル</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.editButton}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}>
              <Text style={styles.editButtonText}>保存</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.itemImage}
              source={require('../common/img/image_fridge.png')}>
            </Image>
          </View>
          <View style={styles.itemInfo}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemDetail}>{item.shop}</Text>
            {shortBorder}
            <Text style={styles.itemDetail}>購入日：{item.purchasedDate}</Text>
            <Text style={styles.itemDetail}>メーカー保証：{item.security}</Text>
          </View>
          {longBorder}
          <View style={styles.settingLocation}>
            <Text style={styles.title}>設置場所</Text>
            <Text style={styles.contentBold}>キッチン / 2階</Text>
          </View>
          {longBorder}
          <View style={styles.kindOfSecurity}>
            <Text style={styles.title}>保証種別</Text>
            <Text style={styles.contentBold}>メーカー保証(延長保証なし)</Text>
            {shortBorder}
          </View>
          {longBorder}
          <View style={styles.settingImages}>
            <Text style={styles.title}>設置画像</Text>
            <Text style={styles.contentNormal}>エアコンの場合は室外機の写真も撮影してください</Text>
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
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  editButton: {
    backgroundColor: '#db380f',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5
  },
  editButtonText: {
    fontSize: 18,
    color: 'white'
  },
  itemContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 20,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginLeft: 50
  },
  itemImage: {
    height: 200,
    width: 200,
    margin: 10,
    marginTop: 20
  },
  itemInfo: {
    flex: 2,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    margin: 15
  },
  itemTitle : {
    fontSize: 20,
    fontWeight: 'bold'
  },
  itemDetail: {
    fontSize: 15,
    color: 'grey'
  },
  settingLocation: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    margin: 15
  },
  kindOfSecurity: {
    flex: 5,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    margin: 15
  },
  settingImages: {
    flex: 3,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    margin: 15
  },
  buttonText: {
    fontSize: 15,
    color: 'white'
  },
  shortBorder: {
    backgroundColor: '#d3d3d3',
    height: 2,
    width: 300
  },
  longBorder: {
    backgroundColor: '#d3d3d3',
    height: 2,
    width: 350
  },
  title: {
    fontSize: 15,
    color: 'grey'
  },
  contentBold: {
    fontSize: 15,
  },
  contentNormal: {
    fontSize: 10,
  },
});
