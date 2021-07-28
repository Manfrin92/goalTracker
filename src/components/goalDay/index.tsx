import React, { useCallback } from 'react';
import { useState } from 'react';

import { Day } from './styles';

interface GoalDayData {
    id: number | string;
    done: boolean;
    toggleDone(id: number | string): void;
}

const GoalDay: React.FC<GoalDayData> = ({ id, done, toggleDone }) => {
    const [goalDone, setGoalDone] = useState(done);

    const handleToggleDone = useCallback(() => {
        toggleDone(id);
        setGoalDone(!goalDone);
    }, [goalDone, setGoalDone]);

    return <Day done={goalDone} onPress={handleToggleDone} />;
};

export default GoalDay;
