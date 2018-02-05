import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class MyPageScreen extends React.Component {
  static navigationOptions = {
    title: 'マイページ'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.buttonText}>修理依頼新規登録</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.buttonText}>決済QR読み取り</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.lowerContainer}>
          <View>
            <TouchableOpacity>
              <View style={styles.button}>
                <Text style={styles.buttonText}>登録家電一覧</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.button}>
                <Text style={styles.buttonText}>会員情報</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity>
              <View style={styles.button}>
                <Text style={styles.buttonText}>決済方法変更</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.button}>
                <Text style={styles.buttonText}>依頼一覧</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  upperContainer: {

  },
  lowerContainer: {

  },
  button: {

  },
  buttonText: {

  }
});
