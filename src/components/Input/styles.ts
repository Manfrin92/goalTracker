import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    height: 55px;
    margin-bottom: 6px;
    margin-right: 5%;
    margin-left: 5%;
    background-color: #f4f4f4;
    align-items: center;
    justify-content: flex-start;
    padding-left: 5px;
    border-bottom-width: 1px;
`;

export const TextInput = styled.TextInput`
    flex: 1;
    font-size: 20px;
    color: #000;
    padding-left: 10px;
    background-color: transparent;
    width: 100%;
`;
