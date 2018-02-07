import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';

export default class RepairOrderSecurityScreen extends React.Component {
  static navigationOptions = { title: '新規登録依頼' };

  render() {
    const { navigate } = this.props.navigation;
    const longBorder = <View style={styles.longBorder}></View>;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.bigText}>保証情報と設置画像を入力してください。</Text>
        </View>

        <View style={styles.miniContainer}>
          <Text style={styles.smallText}>保証種別</Text>
          <Text style={styles.bigText}>長期無料保証(5年)</Text>
        </View>

        <View style={styles.miniContainer}>
          <View style={styles.securityImageContainer}>
            <Image
              style={styles.securityImage}
              source={require('../common/img/alt_img_icon.png')}>
            </Image>
            <View>
              <Text style={styles.middleText}>保証書写真を記録</Text>
              <Text style={styles.smallText}>後で登録することも可能です</Text>
            </View>
          </View>
          {longBorder}
          <View style={styles.securityImageContainer}>
            <Image
              style={styles.securityImage}
              source={require('../common/img/alt_img_icon.png')}>
            </Image>
            <View>
              <Text style={styles.middleText}>保証書レシートを登録</Text>
              <Text style={styles.smallText}>後で登録することも可能です</Text>
            </View>
          </View>
          {longBorder}
          <View style={styles.securityImageContainer}>
            <Image
              style={styles.securityImage}
              source={require('../common/img/alt_img_icon.png')}>
            </Image>
            <View>
              <Text style={styles.middleText}>購入レシートを登録</Text>
              <Text style={styles.smallText}>後で登録することも可能です</Text>
            </View>
          </View>
        </View>

        <View style={styles.miniContainer}>
          <Text style={styles.smallText}>設置場所</Text>
          <Text style={styles.bigText}>2Fキッチン</Text>
        </View>

        <View style={styles.miniContainer}>
          <Text style={styles.smallText}>設置画像</Text>
          <Text style={styles.minText}>エアコンの場合は室外機の写真も撮影してください</Text>
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
        <TouchableOpacity
          onPress={() => navigate('RepairOrderSymptoms')}>
          <View style={styles.askRepairButton}>
            <Text style={styles.buttonText}>修理依頼をする   →</Text>
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
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 60
  },
  miniContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 20,
    marginBottom: 0,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-start'
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
  settingImages: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
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
  bigText: {
    fontSize: 17,
    margin: 2
  },
  middleText: {
    fontSize: 15,
    margin: 2
  },
  smallText: {
    fontSize: 13,
    color: 'grey',
    margin: 2
  },
  minText: {
    fontSize: 12,
    margin: 1
  },
  longBorder: {
    backgroundColor: 'rgba(211,211,211,0.4)',
    height: 2,
    width: 330
  }
});
