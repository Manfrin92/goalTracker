import React from 'react';
import { Container, ButtonText } from './styles';

interface ButtonProps {
    text: 'Cancel' | 'Save';
    onPress(): void;
}

const Button: React.FC<ButtonProps> = ({ text, onPress, ...rest }) => (
    <Container onPress={onPress} text={text} {...rest}>
        <ButtonText>{text}</ButtonText>
    </Container>
);

export default Button;
