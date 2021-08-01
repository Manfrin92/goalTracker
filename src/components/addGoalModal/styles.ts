import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.6);
    margin-top: 24px;
`;

export const Background = styled.View`
    flex: 0.1;
`;

export const Content = styled.View`
    /* flex: 0.9; */
    flex: 1;
    background-color: white;
`;

export const Header = styled.View`
    flex-direction: row;
    border-bottom-width: 2px;
    border-bottom-color: #e5e5e5;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 12px;
    background-color: #f9f9f9;
    border-top-left-radius: 5px;
`;

export const Title = styled.Text`
    font-size: 18px;
    color: #000;
    padding-left: 14px;
    padding-top: 18px;
`;

export const Label = styled.Text`
    font-size: 16px;
    color: #000;
    margin: 12px 0 6px 6%;
`;
