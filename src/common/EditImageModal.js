import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal
} from 'react-native';

export default class EditImageModal extends React.Component {
  render() {
    return (
      <Modal
        visible={this.props.visible}
        animationType={'fade'}
        transparent={true}
        presentationalStyle={'overFullScreen'}>
        <View style={styles.modalContainer}>
          <View style={styles.closeButton}>
            <TouchableOpacity
              onPress={this.props.onRequestClose}>
              <Text style={styles.closeButtonText}>×</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.innerContainer}>
            <Image
              style={styles.itemImage}
              source={require('./img/image_fridge.png')}>
            </Image>
            <View style={styles.changeImageButton}>
              <TouchableOpacity
                onPress={this.props.onRequestClose}>
                <Text style={styles.changeImageButtonText}>画像を変更する</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.deleteImageButton}>
              <TouchableOpacity
                onPress={this.props.onRequestClose}>
                <Text style={styles.deleteImageButtonText}>削除する</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 61, 0, 0.7)'
  },
  closeButton: {
    backgroundColor: 'white',
    borderRadius: 28,
    height: 56,
    width: 56,
    marginTop: 25,
    marginRight: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end'
  },
  closeButtonText: {
    fontSize: 42,
    color: '#ff3d00'
  },
  innerContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 20,
    marginTop: 0,
    marginBottom: 50,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  itemImage: {
    height: 300,
    width: 300,
    marginTop: 40
  },
  changeImageButton: {
    backgroundColor: '#ff4c21',
    borderRadius: 25,
    height: 50,
    width: 280,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  changeImageButtonText: {
    fontSize: 16,
    color: 'white'
  },
  deleteImageButton: {
    backgroundColor: 'white',
    margin: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteImageButtonText: {
    fontSize: 16,
    textDecorationLine: 'underline'
  }
});
