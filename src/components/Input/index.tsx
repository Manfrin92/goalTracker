import React from 'react';

import { Container, TextInput } from './styles';

interface InputProps {
    setValue(value: string): void;
}

const Input: React.FC<InputProps> = ({ setValue }) => {
    return (
        <Container>
            <TextInput
                placeholderTextColor='grey'
                onChangeText={(value) => {
                    setValue(value);
                }}
            />
        </Container>
    );
};

export default Input;
