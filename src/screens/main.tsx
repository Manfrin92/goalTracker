import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import AddGoal from '../components/addGoal';
import EditGoal from '../components/editGoal';
import Goal from '../components/goal';
import Header from '../components/header';

const Main: React.FC = () => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: 'yellow',
                marginTop: '7%',
            }}
        >
            <Header />
            <Goal />
            <EditGoal />
            <AddGoal />
        </SafeAreaView>
    );
};

export default Main;
