import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

export default class MyPageScreen extends React.Component {
  static navigationOptions = { title: 'マイページ' };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <View style={styles.upperItem}>
            <TouchableOpacity>
              <View style={styles.buttonUpper}>
                <Image
                  style={styles.buttonImageUpper}
                  source={require('../common/img/icon_red_wrench.png')}>
                </Image>
                <Text style={styles.buttonTextUpper}>修理依頼新規登録</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.upperItem}>
            <TouchableOpacity>
              <View style={styles.buttonUpper}>
                <Image
                  style={styles.buttonImageUpper}
                  source={require('../common/img/icon_QR.png')}>
                </Image>
                <Text style={styles.buttonTextUpper}>決済QR読取</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.lowerContainer}>
          <View style={styles.lowerItems}>
            <View style={styles.lowerItem}>
              <TouchableOpacity
                onPress={() => navigate('HomeAppliancesList')}>
                <View style={styles.buttonLower}>
                  <Image
                    style={styles.buttonImageLower}
                    source={require('../common/img/icon_check_mark.png')}>
                  </Image>
                  <Text style={styles.buttonTextLower}>登録家電一覧</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.lowerItem}>
              <TouchableOpacity>
                <View style={styles.buttonLower}>
                  <Image
                    style={styles.buttonImageLower}
                    source={require('../common/img/icon_member_info.png')}>
                  </Image>
                  <Text style={styles.buttonTextLower}>会員情報</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.lowerItems}>
            <View style={styles.lowerItem}>
              <TouchableOpacity>
                <View style={styles.buttonLower}>
                  <Image
                    style={styles.buttonImageLower}
                    source={require('../common/img/icon_yen.png')}>
                  </Image>
                  <Text style={styles.buttonTextLower}>決済方法変更</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.lowerItem}>
              <TouchableOpacity>
                <View style={styles.buttonLower}>
                  <Image
                    style={styles.buttonImageLower}
                    source={require('../common/img/icon_list.png')}>
                  </Image>
                  <Text style={styles.buttonTextLower}>依頼一覧</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.footerItemsLeft}>
            <View style={styles.footerItem}>
              <TouchableOpacity>
                <View style={styles.buttonFooter}>
                  <Image
                    style={styles.buttonImageFooter}
                    source={require('../common/img/icon_dashboard.png')}>
                  </Image>
                  <Text style={styles.buttonTextFooter}>ダッシュボード</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.footerItem}>
              <TouchableOpacity>
                <View style={styles.buttonFooter}>
                  <Image
                    style={styles.buttonImageFooter}
                    source={require('../common/img/icon_mypage.png')}>
                  </Image>
                  <Text style={styles.buttonTextFooter}>マイページ</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.footerItemCenter}>
            <View style={styles.menuButton}>
              <TouchableOpacity>
                <Image
                  style={styles.menuButtonImage}
                  source={require('../common/img/icon_button_lines.png')}>
                </Image>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.footerItemsRight}>
            <View style={styles.footerItem}>
              <TouchableOpacity>
                <View style={styles.buttonFooter}>
                  <Image
                    style={styles.buttonImageFooter}
                    source={require('../common/img/icon_white_wrench.png')}>
                  </Image>
                  <Text style={styles.buttonTextFooter}>修理可否判定</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.footerItem}>
              <TouchableOpacity>
                <View style={styles.buttonFooter}>
                  <Image
                    style={styles.buttonImageFooter}
                    source={require('../common/img/icon_bell.png')}>
                  </Image>
                  <Text style={styles.buttonTextFooter}>お知らせ</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upperContainer: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#db380f'
  },
  upperItem: {
    backgroundColor: '#ff3d00',
    borderRadius: 10,
    margin: 10,
    marginTop: 20,
    marginBottom: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  lowerContainer: {
    flex: 15
  },
  lowerItems: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  lowerItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonUpper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonLower: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonFooter: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonImageUpper: {
    height: 50,
    width: 50,
    margin: 5
  },
  buttonImageLower: {
    height: 40,
    width: 40,
    margin: 20
  },
  buttonImageFooter: {
    height: 30,
    width: 30,
    margin: 5
  },
  buttonTextUpper: {
    fontSize: 14,
    color: 'white'
  },
  buttonTextLower: {
    fontSize: 14
  },
  buttonTextFooter: {
    fontSize: 10
  },
  footer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: 20
  },
  footerItemsLeft: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  footerItemsRight: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  footerItemCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 80,
    width: 80,
    borderRadius: 40,
    marginTop: -10
  },
  footerItem: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuButton: {
    height: 56,
    width: 56,
    borderRadius: 28,
    backgroundColor: '#ff3d00',
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuButtonImage: {
    height: 35,
    width: 35,
    margin: 5
  }
});
