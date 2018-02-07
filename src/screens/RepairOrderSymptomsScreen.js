import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';

export default class RepairOrderSymptomsScreen extends React.Component {
  static navigationOptions = { title: '新規登録依頼' };

  constructor(props) {
    super(props);
    this.state = { freeInputText: '' };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.bigText}>症状を入力してください。</Text>
        </View>

        <View style={styles.miniContainer}>
          <Text style={styles.smallText}>症状種別</Text>
          <Text style={styles.bigText}>電源</Text>
        </View>

        <View style={styles.miniContainer}>
          <Text style={styles.smallText}>症状詳細</Text>
          <Text style={styles.bigText}>電源は入るがすぐに消える</Text>
        </View>

        <View style={styles.miniContainer}>
          <Text style={styles.smallText}>自由入力</Text>
          <TextInput
            style={styles.bigText}
            placeholder='症状を入力してください'
            onChangeText={(text) => this.setState({ freeInputText: text})}/>
        </View>

        <View style={styles.miniContainer}>
          <Text style={styles.smallText}>画像</Text>
          <Text style={styles.minText}>エラーコードがわかる場合は撮影してください</Text>
          <View style={styles.imagesContainer}>
            <Image
              style={styles.image}
              source={require('../common/img/alt_img_icon.png')}>
            </Image>
            <Image
              style={styles.image}
              source={require('../common/img/alt_img_icon.png')}>
            </Image>
            <Image
              style={styles.image}
              source={require('../common/img/alt_img_icon.png')}>
            </Image>
          </View>
          <View style={styles.imagesContainer}>
            <Image
              style={styles.image}
              source={require('../common/img/alt_img_icon.png')}>
            </Image>
          </View>
        </View>

        <View style={styles.miniContainer}>
          <Text style={styles.smallText}>動画</Text>
          <View style={styles.moviesContainer}>
            <Image
              style={styles.movie}
              source={require('../common/img/alt_img_icon.png')}>
            </Image>
          </View>
        </View>

        <TouchableOpacity>
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
  image: {
    margin: 10
  },
  imagesContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  movie: {
    margin: 10
  },
  moviesContainer: {
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
  }
});
