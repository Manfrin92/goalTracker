import React, { useState, useCallback } from 'react';

import { Alert, TouchableOpacity, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { Container, Text, SelectorContainer } from './styles';

interface DateSelectorProps {
    setFirstDate(date: Date | undefined): void;
    setSecondDate(date: Date | undefined): void;
}

const DateSelector: React.FC<DateSelectorProps> = ({
    setFirstDate,
    setSecondDate,
}) => {
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
                                if (date) {
                                    if (date > finalDate) {
                                        Alert.alert(
                                            'Error',
                                            'Initial date should not be superior than final date'
                                        );
                                    } else {
                                        setInitialDate(date);
                                        setFirstDate(date);
                                    }
                                    setShowFirstDate(false);
                                }
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
                                if (date) {
                                    if (finalDate < initialDate) {
                                        Alert.alert(
                                            'Error',
                                            'Final date should not be inferior than initial date'
                                        );
                                    } else {
                                        setFinalDate(date);
                                        setSecondDate(date);
                                    }
                                    setShowFinalDate(false);
                                }
                            }}
                        />
                    </View>
                )}
            </SelectorContainer>
        </Container>
    );
};

export default DateSelector;
