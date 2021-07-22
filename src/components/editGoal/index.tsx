import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Container } from './styles';

const EditGoal: React.FC = () => {
    return (
        <Container>
            <Feather name='edit-2' size={32} color='white' />
        </Container>
    );
};

export default EditGoal;
