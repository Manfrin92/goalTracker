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
    const [showAddGoalModal, setShowAddGoalModal] = useState(true);

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
                <Goal />
                <Goal />
                <Goal />
                <Goal />
                <Goal />
            </ScrollView>
            <BottomContainer>
                <EditGoal />
                <AddGoal showAddGoalModal={() => setShowAddGoalModal(true)} />
            </BottomContainer>
            <AddGoalModal
                saveGoal={() => console.log('saveGoal')}
                closeModal={() => setShowAddGoalModal(false)}
                showModal={showAddGoalModal}
            />
        </SafeAreaView>
    );
};

export default Main;
