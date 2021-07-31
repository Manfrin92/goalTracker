import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Container } from './styles';

interface AddGoalProps {
    showAddGoalModal(): void;
}

const AddGoal: React.FC<AddGoalProps> = ({ showAddGoalModal }) => {
    return (
        <Container onPress={showAddGoalModal}>
            <Ionicons name='add' size={42} color='white' />
        </Container>
    );
};

export default AddGoal;
