import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Container } from './styles';

const AddGoal: React.FC = () => {
    return (
        <Container>
            <Ionicons name='add' size={32} color='#1366D6' />
        </Container>
    );
};

export default AddGoal;
