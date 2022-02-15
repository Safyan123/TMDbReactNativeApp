import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
} from 'react-native';

const DetailScreen = () => {

  return (
    <>
      <SafeAreaView>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Settings!</Text>
        </View>
      </SafeAreaView>
    </>
  );
};


export default DetailScreen;
