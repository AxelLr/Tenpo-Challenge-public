import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Theme from './styles/Theme';
import Main from '@src/Main';
import {enableLatestRenderer} from 'react-native-maps';
import {UserContext} from './Context/UserContext';

enableLatestRenderer();

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <Theme>
        <UserContext>
          <Main />
        </UserContext>
      </Theme>
    </SafeAreaView>
  );
};

export default App;
