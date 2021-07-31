import React from 'react';
import { SafeAreaView } from 'react-native';

import AddGoalModal from '../components/addGoalModal';

const Main: React.FC = () => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                alignItems: 'center',
                marginTop: '7%',
                backgroundColor: '#c5c6d0',
            }}
        >
            <AddGoalModal />
        </SafeAreaView>
    );
};

export default Main;
