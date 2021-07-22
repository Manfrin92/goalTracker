import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import GoalDay from '../goalDay';

import { Container } from './styles';

const Goal: React.FC = () => {
    const monthDays = new Array(30).fill(null);

    return (
        <Container>
            <Text>Goal Title</Text>
            <View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <Text>May </Text>
                    <Text>Jun </Text>
                    <Text>Jul</Text>
                </View>
                <View>
                    <GoalDay />
                </View>
            </View>
        </Container>
    );
};

export default Goal;
