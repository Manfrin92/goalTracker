import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { IGoal } from '../models/goal';

export async function getStoredGoals(): Promise<IGoal[] | null> {
    const storedGoals = await AsyncStorage.getItem('@goalTracker_goal');
    return storedGoals ? JSON.parse(storedGoals) : null;
}

export async function storeGoals(goals: IGoal[]) {
    try {
        await AsyncStorage.setItem('@goalTracker_goal', JSON.stringify(goals));
    } catch (e) {
        Alert.alert('Error', 'Could not save goals');
    }
}

export async function getStoredGoal(id: number) {
    try {
        const storedGoalsRaw = await getStoredGoals();
        if (storedGoalsRaw) {
            const foundGoal = storedGoalsRaw.find(
                (storedGoal) => storedGoal.id === id
            );
            return foundGoal;
        } else {
            Alert.alert('Error', 'Goal not found');
        }
    } catch (e) {
        Alert.alert('Error while saving goal');
    }
}

export async function deleteStoredGoal(id: number) {
    try {
        const storedGoalsRaw = await getStoredGoals();
        if (storedGoalsRaw) {
            const filteredGoals = storedGoalsRaw.filter(
                (storedGoal) => storedGoal.id !== id
            );
            await storeGoals(filteredGoals);
            return filteredGoals;
        } else {
            Alert.alert('Error', 'Goal not found');
        }
    } catch (e) {
        Alert.alert('Error while saving goal');
    }
}

export async function storeGoal(goal: IGoal) {
    try {
        const storedGoalsRaw = await getStoredGoals();
        if (storedGoalsRaw) {
            storedGoalsRaw.push(goal);
            await storeGoals(storedGoalsRaw);
        } else {
            await storeGoals([goal]);
        }
    } catch (e) {
        Alert.alert('Error while saving goal');
    }
}
