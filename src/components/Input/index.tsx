import React from 'react';

import { Container, TextInput } from './styles';

const Input: React.FC = () => {
    return (
        <Container>
            <TextInput
                placeholderTextColor='grey'
                onChangeText={(value) => {
                    console.log('value input: ', value);
                }}
            />
        </Container>
    );
};

export default Input;
