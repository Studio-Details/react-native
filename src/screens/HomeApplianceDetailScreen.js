import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';

import EditImageModal from '../common/EditImageModal';

export default class HomeApplianceDetailScreen extends React.Component {
  static navigationOptions = { title: '登録家電一覧' };

  constructor(props) {
    super(props);
    this.state = { modalVisible: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalVisible: true });
  }

  closeModal() {
    this.setState({ modalVisible: false });
  }

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
    const shortBorder = <View style={styles.shortBorder}></View>;
    const longBorder = <View style={styles.longBorder}></View>;
    return (
      <ScrollView style={styles.container}>
        <EditImageModal
          visible={this.state.modalVisible}
          onRequestClose={this.closeModal}/>
        <View style={styles.itemContainer}>
          <TouchableOpacity
            onPress={() => navigate('HomeApplianceEdit')}>
            <View style={styles.editButton}>
              <Image
                style={styles.editButtonImage}
                source={require('../common/img/icon_edit.png')}>
              </Image>
              <Text style={styles.editButtonText}>編集</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.imageButton}>
            <TouchableOpacity
              onPress={this.openModal}>
              <Image
                style={styles.itemImage}
                source={require('../common/img/image_fridge.png')}>
              </Image>
            </TouchableOpacity>
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
            <View style={styles.securityImageContainer}>
              <Image
                style={styles.securityImage}
                source={require('../common/img/alt_img_icon.png')}>
              </Image>
              <Text>保証書写真</Text>
            </View>
            <View style={styles.securityImageContainer}>
              <Image
                style={styles.securityImage}
                source={require('../common/img/alt_img_icon.png')}>
              </Image>
              <Text>保証書レシート</Text>
            </View>
            <View style={styles.securityImageContainer}>
              <Image
                style={styles.securityImage}
                source={require('../common/img/alt_img_icon.png')}>
              </Image>
              <Text>購入レシートを登録</Text>
            </View>
          </View>
          {longBorder}
          <View style={styles.settingImageContainer}>
            <Text style={styles.title}>設置画像</Text>
            <Text style={styles.contentNormal}>エアコンの場合は室外機の写真も撮影してください</Text>
            <View style={styles.settingImages}>
              <Image
                style={styles.securityImage}
                source={require('../common/img/alt_img_icon.png')}>
              </Image>
              <Image
                style={styles.securityImage}
                source={require('../common/img/alt_img_icon.png')}>
              </Image>
              <Image
                style={styles.securityImage}
                source={require('../common/img/alt_img_icon.png')}>
              </Image>
            </View>
            <View style={styles.settingImages}>
              <Image
                style={styles.securityImage}
                source={require('../common/img/alt_img_icon.png')}>
              </Image>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigate('RepairOrderSecurity')}>
          <View style={styles.askRepairButton}>
            <Text style={styles.buttonText}>修理依頼をする</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  editButton: {
    backgroundColor: '#ff3d00',
    borderRadius: 35,
    height: 70,
    width: 70,
    marginTop: -20,
    marginRight: -325,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end'
  },
  editButtonText: {
    fontSize: 11,
    color: 'white'
  },
  editButtonImage: {
    height: 30,
    width: 30
  },
  itemContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 20,
    marginTop: 40,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  imageButton: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50
  },
  itemImage: {
    height: 200,
    width: 200,
  },
  itemInfo: {
    flex: 2,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    margin: 15
  },
  itemTitle : {
    fontSize: 20,
    marginBottom: 10,
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
    margin: 15,
  },
  securityImageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  securityImage: {
    margin: 10
  },
  settingImageContainer: {
    flex: 3,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    margin: 15
  },
  settingImages: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  askRepairButton: {
    backgroundColor: '#ff4c21',
    borderRadius: 25,
    height: 50,
    width: 250,
    margin: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  buttonText: {
    fontSize: 15,
    color: 'white'
  },
  shortBorder: {
    backgroundColor: 'rgba(211,211,211,0.3)',
    height: 2,
    width: 300,
    marginTop: 15,
    marginBottom: 15
  },
  longBorder: {
    backgroundColor: 'rgba(211,211,211,0.4)',
    height: 2,
    width: 330
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
