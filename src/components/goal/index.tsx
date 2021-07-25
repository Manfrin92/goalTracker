import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import GoalDay from '../goalDay';

import { Container } from './styles';

const Goal: React.FC = () => {
    const monthDays = new Array(293).fill(null);

    return (
        <Container>
            <Text
                style={{
                    color: '#232023',
                    fontSize: 22,
                    fontWeight: '600',
                }}
            >
                Goal Title
            </Text>
            <View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <Text style={{ marginLeft: 32, color: '#232023' }}>
                        May{' '}
                    </Text>
                    <Text style={{ color: '#232023' }}>Jun </Text>
                    <Text style={{ marginRight: 32, color: '#232023' }}>
                        Jul
                    </Text>
                </View>
                <ScrollView
                    horizontal={true}
                    style={{
                        borderColor: 'black',
                        borderWidth: 2,
                        padding: 4,
                    }}
                >
                    <View
                        style={{
                            maxHeight: 340,
                            flexWrap: 'wrap',
                            paddingRight: 24,
                        }}
                    >
                        {monthDays.map((month, index) => (
                            <>
                                <GoalDay
                                    key={Math.random()}
                                    done={index % 2 !== 0 && true}
                                />
                            </>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </Container>
    );
};

export default Goal;
