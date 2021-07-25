import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { IGoal } from '../models/goal';

export async function storeGoal(goal: IGoal) {
    try {
        await AsyncStorage.setItem('@goalTracker_goal', JSON.stringify(goal));
    } catch (e) {
        Alert.alert('Error while saving goal');
    }
}
