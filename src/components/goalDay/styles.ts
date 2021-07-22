import styled, { css } from 'styled-components/native';

interface DayProps {
    done: boolean;
}

export const Day = styled.TouchableOpacity<DayProps>`
    width: 15px;
    height: 15px;
    background-color: #fff;
    margin: 2px;

    ${(props) =>
        props.done &&
        css`
            background: #0a2010;
        `}
`;
