import React from 'react';
import { useCallback } from 'react';
import {
    Modal,
    TouchableWithoutFeedback,
    SafeAreaView,
    View,
} from 'react-native';
import Button from '../Button';
import DateSelector from '../dateSelector';
import Input from '../Input';

import { Container, Background, Content, Header, Title, Label } from './styles';

interface AddGoalModalProps {
    showModal: boolean;
    closeModal(): void;
    saveGoal(): void;
}

const AddGoalModal: React.FC<AddGoalModalProps> = ({
    showModal,
    closeModal,
    saveGoal,
}) => {
    const handleSaveGoal = useCallback(() => {
        saveGoal();
    }, []);

    return (
        <Modal transparent visible={showModal} animationType='fade'>
            <SafeAreaView style={{ flex: 1 }}>
                <Container>
                    <TouchableWithoutFeedback onPress={() => {}}>
                        <Background />
                    </TouchableWithoutFeedback>
                    <Content>
                        <Header>
                            <Title>Add New Goal</Title>
                        </Header>
                        <Label>Goal Title</Label>
                        <Input />
                        <DateSelector />
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginLeft: '6%',
                                marginRight: '4%',
                                marginTop: 8,
                            }}
                        >
                            <Button onPress={closeModal} text='Cancel' />
                            <Button onPress={handleSaveGoal} text='Save' />
                        </View>
                    </Content>
                    <TouchableWithoutFeedback onPress={() => {}}>
                        <Background />
                    </TouchableWithoutFeedback>
                </Container>
            </SafeAreaView>
        </Modal>
    );
};

export default AddGoalModal;
