import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { IGoal } from '../models/goal';

export async function storeGoals(goals: IGoal[]) {
    try {
        await AsyncStorage.setItem('@goalTracker_goal', JSON.stringify(goals));
    } catch (e) {
        Alert.alert('Error', 'Could not save goals');
    }
}

export async function getStoredGoal(id: number) {
    try {
        const storedGoalsRaw = await AsyncStorage.getItem('@goalTracker_goal');
        if (storedGoalsRaw) {
            const storedGoals: IGoal[] = JSON.parse(storedGoalsRaw);
            if (storedGoals) {
                const foundGoal = storedGoals.find(
                    (storedGoal) => storedGoal.id === id
                );
                return foundGoal;
            } else {
                Alert.alert('Error', 'Goal not found');
            }
        }
    } catch (e) {
        Alert.alert('Error while saving goal');
    }
}
