import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import Header from '../components/header';

const Main: React.FC = () => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: 'yellow',
                marginTop: '7%',
            }}
        >
            <Header />
            <Text>Olarr</Text>
        </SafeAreaView>
    );
};

export default Main;
