import styled, { css } from 'styled-components/native';

interface ButtonProps {
    text: 'Cancel' | 'Save';
}

export const Container = styled.TouchableOpacity<ButtonProps>`
    height: 60px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    background: orange;

    ${(props: ButtonProps) =>
        props.text === 'Cancel' &&
        css`
            background-color: #f4f4f4;
            width: 40%;
        `}

    ${(props: ButtonProps) =>
        props.text === 'Save' &&
        css`
            width: 58%;
        `}
`;
export const ButtonText = styled.Text`
    color: #000;
    font-size: 18px;
`;
