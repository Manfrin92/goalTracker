export interface IGoal {
    title: string;
    initialDate: Date;
    finalDate: Date;
    months: string[];
}

export interface IGoalDay {
    date: Date;
    done: boolean;
}
export interface IGoalTracker {
    title: string;
    months: string[];
    goalDays: IGoalDay[];
}
