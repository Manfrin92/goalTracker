import React from 'react';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
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
                backgroundColor: '#c5c6d0',
            }}
        >
            <ScrollView>
                <Header />
                {/* <GoalContainer> */}
                <Goal />
                <Goal />
                <Goal />
                <Goal />
                <Goal />
                {/* </GoalContainer> */}
            </ScrollView>
            <BottomContainer>
                <EditGoal />
                <AddGoal />
            </BottomContainer>
        </SafeAreaView>
    );
};

export default Main;
