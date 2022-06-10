import React from 'react';
// NAV
import {NavigationContainer} from '@react-navigation/native';
// SCREENS
import ProductsLanding from '@src/screens/ProductsLanding/ProductsLanding';
import SetAddress from '@src/screens/SetAddress/SetAddress';
import {IRootStack, ROUTES} from '@src/types/navigation';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator<IRootStack>();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={ROUTES.ProductsLanding}
          component={ProductsLanding}
        />
        <Stack.Screen
          options={() => ({
            gestureEnabled: false,
            transitionSpec: {
              open: {animation: 'timing', config: {duration: 600}},
              close: {animation: 'timing', config: {duration: 600}},
            },
            cardStyleInterpolator: ({current: {progress}}) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },
          })}
          name={ROUTES.SetAddress}
          component={SetAddress}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
