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
                    <Text style={{ marginLeft: 32 }}>May </Text>
                    <Text>Jun </Text>
                    <Text style={{ marginRight: 32 }}>Jul</Text>
                </View>
                <View
                    style={{
                        borderColor: 'black',
                        borderWidth: 2,
                        padding: 4,
                        height: '85%',
                        backgroundColor: 'blue',
                    }}
                >
                    {monthDays.map(() => (
                        <GoalDay done={true} />
                    ))}
                </View>
            </View>
        </Container>
    );
};

export default Goal;
