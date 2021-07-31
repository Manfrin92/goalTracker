import React, { useState, useCallback } from 'react';

import { Alert, TouchableOpacity, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { Container, Text, SelectorContainer } from './styles';

const DateSelector: React.FC = () => {
    const [showFirstDate, setShowFirstDate] = useState(false);
    const [showFinalDate, setShowFinalDate] = useState(false);
    const [initialDate, setInitialDate] = useState(new Date());
    const [finalDate, setFinalDate] = useState(new Date());

    return (
        <Container>
            <SelectorContainer>
                <TouchableOpacity
                    onPress={() => {
                        setShowFirstDate(true);
                        console.log('showFirstDate: ', showFirstDate);
                    }}
                >
                    <Text>First date</Text>
                    <Text>{moment(initialDate).format('MM/DD/YYYY')}</Text>
                </TouchableOpacity>

                {showFirstDate && (
                    <View
                        style={{
                            backgroundColor: '#f9f9f9',
                        }}
                    >
                        <DateTimePicker
                            value={initialDate}
                            mode='date'
                            is24Hour
                            display='calendar'
                            onChange={(event, date) => {
                                if (date) setInitialDate(date);
                                setShowFirstDate(false);
                            }}
                        />
                    </View>
                )}
            </SelectorContainer>

            <SelectorContainer>
                <TouchableOpacity onPress={() => setShowFinalDate(true)}>
                    <Text>Final date</Text>
                    <Text>{moment(finalDate).format('MM/DD/YYYY')}</Text>
                </TouchableOpacity>

                {showFinalDate && (
                    <View
                        style={{ marginTop: '60%', backgroundColor: 'white' }}
                    >
                        <DateTimePicker
                            value={finalDate}
                            mode='date'
                            is24Hour
                            display='calendar'
                            onChange={(event, date) => {
                                if (date) setFinalDate(date);
                                setShowFinalDate(false);
                            }}
                        />
                    </View>
                )}
            </SelectorContainer>
        </Container>
    );
};

export default DateSelector;
