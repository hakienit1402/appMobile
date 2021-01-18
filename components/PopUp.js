import {RFC_2822} from 'moment';
import React from 'react';
import {
  Modal,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
const PopUp = ({visible, onTouchOutside,handleChooseOption}) => {
  
  const rederOutsideTouchable = (onTouch) => {
    const view = <View style={{flex: 1, width: '100%'}} />;
    if (!onTouch) return view;
    return (
      <TouchableWithoutFeedback
        onPress={onTouch}
        style={{flex: 1, width: '100%'}}>
        {view}
      </TouchableWithoutFeedback>
    );
  };

  const renderSeparator = () => (
    <View
      style={{
        backgroundColor: '#182E44',
        height: 1,
      }}></View>
  );

  const renderItem = ({item}) => {
    return (
        <TouchableOpacity
            onPress={()=>handleChooseOption(item.type)}
        >
      <View
        style={{
          height: 50,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 18, fontWeight: 'normal', color: '#182E44'}}>
          {item.name}
        </Text>
        
      </View>
      </TouchableOpacity>
    );
  };
  const data = [
    {
      id: 1,
      name: 'Launch Camera for Image',
      type:'take'
    },
    {
      id: 2,
      name: 'Choose Image',
      type:'pick'
    },
  ];
  return (
    <Modal
      animationType={'fade'}
      visible={visible}
      transparent={true}
      onRequestClose={() => setVisible(false)}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#000000AA',
          justifyContent: 'flex-end',
        }}>
        {rederOutsideTouchable(onTouchOutside)}
        <View
          style={{
            backgroundColor: '#ffffff',
            width: '100%',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            paddingHorizontal: 20,
            maxHeight: height * 0.4,
          }}>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                color: '#182E44',
                fontSize: 20,
                fontWeight: '500',
                marginTop: 15,
                marginBottom: 30,
              }}>
              Upload image photo!
            </Text>
            <FlatList
          style={{marginBottom: 20}}
          showsVerticalScrollIndicator={false}
          data={data}
          extraData={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={renderSeparator}
          contentContainerStyle={{
            paddingBottom: 20,
          }}
        />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const {width, height} = Dimensions.get('window');
export default PopUp;
