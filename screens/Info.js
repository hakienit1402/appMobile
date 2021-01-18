import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Feather';
import HistoryItem from '../components/HistoryItem';
import PopUp from '../components/PopUp';
import {AuthContext} from '../navigations/AuthProvider';
const Info = () => {
  const navigation = useNavigation();
  const {userData} = useContext(AuthContext);
  const [histories, setHisotries] = useState([]);
  const [isEditName, setIsEditName] = useState(false);
  const [fullname, setFullname] = useState('');
  const [filePath, setFilePath] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    firestore()
      .collection('histories')
      .where('userId', '==', userData.uid)
      .onSnapshot((data) => {
        setHisotries(
          data.docs.map((doc) => ({
            ...doc.data(),
          })),
        );
      });
  }, []);
  const handleChangeName = (text) => {
    setFullname(text);
  };
  const handleSave = () => {
    firestore()
      .collection('users')
      .doc(userData.uid)
      .update({
        displayName: fullname !== '' ? fullname : userData.displayName,
      })
      .then(() => {
        setIsEditName(false);
      });
  };
  const handlePickImage = () => {
    // console.log('pick')
    setVisible(true);
  };
  const onTouchOutside = () => {
    setVisible(false);
  };

  const handleChooseOption = (type) => {
    // console.log(type)
    setVisible(false);
    if (type === 'take') {
      captureImage('photo');
    } else if (type === 'pick') {
      chooseFile('photo');
    }
  };

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };
  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const captureImage = async (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, (response) => {
        // console.log('Response = ', response);

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        // console.log('base64 -> ', response.base64);
        // console.log('uri -> ', response.uri);
        // console.log('width -> ', response.width);
        // console.log('height -> ', response.height);
        // console.log('fileSize -> ', response.fileSize);
        // console.log('type -> ', response.type);
        // console.log('fileName -> ', response.fileName);
        setFilePath(response);
        updatePhoto(response.uri);
      });
    }
  };

  const chooseFile = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      // console.log('base64 -> ', response.base64);
      // console.log('uri -> ', response.uri);
      // console.log('width -> ', response.width);
      // console.log('height -> ', response.height);
      // console.log('fileSize -> ', response.fileSize);
      // console.log('type -> ', response.type);
      // console.log('fileName -> ', response.fileName);
      setFilePath(response);
      updatePhoto(response.uri);
    });
  };
  const updatePhoto = (uri) => {
    firestore()
      .collection('users')
      .doc(userData.uid)
      .update({
        photoUrl: uri,
      })
      .then(() => {
        alert('Upload Photo successfull!');
      });
  };
  console.log(userData);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PopUp
          visible={visible}
          onTouchOutside={onTouchOutside}
          handleChooseOption={handleChooseOption}
        />
        <View style={styles.titlebar}>
          <Icon
            name="arrow-left"
            size={24}
            color="black"
            onPress={() => navigation.goBack()}
          />
        </View>

        <View style={{alignSelf: 'center'}}>
          <View style={styles.profileImage}>
            <Image
              source={{
                uri: filePath == null ? `${userData.photoUrl}` : filePath.uri,
              }}
              style={styles.image}
              resizeMode={'center'}
            />
          </View>
          <View style={styles.add}>
            <TouchableOpacity onPress={() => handlePickImage()}>
              <Icon name="camera" size={24} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.infoContainer}>
          {isEditName ? (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TextInput
                placeholder="Your name..."
                style={{
                  height: height * 0.06,
                  borderColor: 'gray',
                  borderBottomWidth: 1,
                  width: width * 0.4,
                  fontSize: 22,
                  color: 'green',
                  marginBottom: 10,
                }}
                defaultValue={userData.displayName}
                onChangeText={(text) => handleChangeName(text)}
              />
              <TouchableOpacity onPress={() => handleSave()}>
                <View style={{backgroundColor: 'green', padding: 7}}>
                  <Text
                    style={{
                      color: '#ffffff',
                      fontSize: 15,
                      fontWeight: 'bold',
                    }}>
                    Save
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setIsEditName(false)}>
                <View style={{margin: 5}}>
                  <Text style={{fontSize: 15}}>Back</Text>
                </View>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.name}>{userData.displayName} </Text>
              <Icon
                name="edit-3"
                size={20}
                color="blue"
                style={{position: 'absolute', right: -30}}
                onPress={() => setIsEditName(true)}
              />
            </View>
          )}

          <Text style={styles.description}>{userData.email}</Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#D8D8D8',
            marginVertical: 10,
          }}
        />
        <View style={styles.info}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Lịch sử</Text>

          {Object.entries(histories).reverse().map(([key, history]) => (
            <View key={key}>
              <HistoryItem history={history} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const {height, width} = Dimensions.get('window');
const height_avatar = height * 0.6 * 0.4;
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  name: {
    color: 'black',
    fontSize: 28,
  },
  description: {
    color: 'gray',
    fontSize: 16,
    fontWeight: 'bold',
  },
  editname: {
    color: 'blue',
    fontSize: 13,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  titlebar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginHorizontal: 16,
  },
  profileImage: {
    width: height_avatar,
    height: height_avatar,
    borderRadius: 100,
    overflow: 'hidden',
  },
  add: {
    backgroundColor: 'gray',
    opacity: 0.8,
    position: 'absolute',
    bottom: 6,
    right: 5,
    width: 35,
    height: 35,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  info: {
    minHeight: height * 0.5,
    height: '100%',
    flexDirection: 'column',
    paddingHorizontal: 30,
  },
  text_info: {
    marginLeft: 10,
  },
});
export default Info;
