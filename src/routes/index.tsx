import React from 'react';
import Main from '../screens/main';
import { createStackNavigator } from '@react-navigation/stack';
import AddGoalModal from '../components/addGoalModal';

const App = createStackNavigator();

const Routes: React.FC = () => (
    <App.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#f0f0f0' },
            gestureEnabled: true,
            gestureDirection: 'horizontal',
        }}
    >
        <App.Screen name='Goals' component={Main} />
        <App.Screen name='AddGoal' component={AddGoalModal} />
    </App.Navigator>
);

export default Routes;
