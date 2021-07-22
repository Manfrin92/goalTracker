import React from 'react';
import { SafeAreaView } from 'react-native';
import AddGoal from '../components/addGoal';
import EditGoal from '../components/editGoal';
import Goal from '../components/goal';
import Header from '../components/header';
import { BottomContainer, GoalContainer } from './styles';

const Main: React.FC = () => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                alignItems: 'center',
                marginTop: '7%',
            }}
        >
            <Header />
            <GoalContainer>
                <Goal />
            </GoalContainer>
            <BottomContainer>
                <EditGoal />
                <AddGoal />
            </BottomContainer>
        </SafeAreaView>
    );
};

export default Main;
