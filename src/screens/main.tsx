import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AddGoal from '../components/addGoal';
// import EditGoal from '../components/editGoal';
import Goal from '../components/goal';
import Header from '../components/header';
import { IGoal } from '../models/goal';
import { deleteStoredGoal, getStoredGoals } from '../services/asyncStorage';
import { BottomContainer } from './styles';

const Main: React.FC = () => {
    const navigation = useNavigation();
    const [storedGoals, setStoredGoals] = useState<IGoal[]>([]);

    useEffect(() => {
        async function getStGoals() {
            const stGoals = await getStoredGoals();
            if (stGoals) setStoredGoals(stGoals);
            console.log('stored goals: ', stGoals);
        }

        getStGoals();
    }, []);

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
                {storedGoals &&
                    storedGoals.length > 0 &&
                    storedGoals.map((storedGoal) => (
                        <Goal
                            deleteGoal={() => deleteStoredGoal(storedGoal.id)}
                        />
                    ))}
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
