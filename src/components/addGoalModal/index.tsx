import React from 'react';
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
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginLeft: '6%',
                                marginRight: '4%',
                                marginTop: 8,
                            }}
                        >
                            <Button
                                onPress={() => console.log('cancel')}
                                text='Cancel'
                            />
                            <Button
                                onPress={() => console.log('save')}
                                text='Save'
                            />
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
