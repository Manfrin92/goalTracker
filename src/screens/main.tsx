import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AddGoal from '../components/addGoal';
import AddGoalModal from '../components/addGoalModal';
import EditGoal from '../components/editGoal';
import Goal from '../components/goal';
import Header from '../components/header';
import { BottomContainer, GoalContainer } from './styles';

const Main: React.FC = () => {
    const navigation = useNavigation();

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
                <Goal deleteGoal={() => {}} />
            </ScrollView>
            <BottomContainer>
                {/* <EditGoal /> */}
                <AddGoal
                    showAddGoalModal={() => navigation.navigate('AddGoal')}
                />
            </BottomContainer>
        </SafeAreaView>
    );
};

export default Main;
