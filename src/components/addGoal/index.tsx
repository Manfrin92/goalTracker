import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Container } from './styles';

const AddGoal: React.FC = () => {
    return (
        <Container>
            <Ionicons name='add' size={42} color='white' />
        </Container>
    );
};

export default AddGoal;
