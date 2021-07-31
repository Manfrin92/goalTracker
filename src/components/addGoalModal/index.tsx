import React from 'react';
import { Modal, TouchableWithoutFeedback, SafeAreaView } from 'react-native';
import DateSelector from '../dateSelector';
import Input from '../Input';

import { Container, Background, Content, Header, Title, Label } from './styles';

const AddGoalModal: React.FC = () => {
    return (
        <Modal transparent visible={true} animationType='fade'>
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
