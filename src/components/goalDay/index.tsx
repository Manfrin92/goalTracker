import React from 'react';

import { Day } from './styles';

const GoalDay: React.FC<{ done: boolean }> = ({ done }) => {
    return <Day done={done} />;
};

export default GoalDay;
