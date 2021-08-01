import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import { View, KeyboardAvoidingView, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { IGoal } from '../../models/goal';
import Button from '../Button';
import DateSelector from '../dateSelector';
import Input from '../Input';

import { Container, Content, Header, Title, Label } from './styles';

const AddGoalModal: React.FC = () => {
    const navigation = useNavigation();
    const [goalTitle, setGoalTitle] = useState('');
    const [initialDate, setInitialDate] = useState<Date | undefined>(
        new Date()
    );
    const [finalDate, setFinalDate] = useState<Date | undefined>(new Date());

    const handleSaveGoal = useCallback(() => {
        if (!initialDate || !finalDate) {
            Alert.alert('Error', 'Must select dates');
        } else {
            if (finalDate < initialDate) {
                Alert.alert(
                    'Error',
                    'Initial date should not be superior than final date'
                );
            }
        }

        const newGoal: IGoal = {
            id: Math.random(),
            title: goalTitle,
            initialDate: initialDate ?? new Date(),
            finalDate: finalDate ?? new Date(),
            months: ['jan'],
        };

        console.log('adding goal with: ', newGoal);
    }, [goalTitle, initialDate, finalDate]);

    return (
        <KeyboardAvoidingView style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView
                keyboardShouldPersistTaps={'handled'}
                style={{ flex: 1 }}
            >
                <Container>
                    <Content>
                        <Header>
                            <Title>Add New Goal</Title>
                        </Header>
                        <Label>Goal Title</Label>
                        <Input setValue={setGoalTitle} />
                        <DateSelector
                            setFirstDate={setInitialDate}
                            setSecondDate={setFinalDate}
                        />
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginLeft: '6%',
                                marginRight: '4%',
                                marginTop: 8,
                                bottom: 0,
                            }}
                        >
                            <Button
                                onPress={() => navigation.navigate('Goals')}
                                text='Cancel'
                            />
                            <Button onPress={handleSaveGoal} text='Save' />
                        </View>
                    </Content>
                </Container>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default AddGoalModal;
