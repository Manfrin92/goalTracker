const arrayOfMonths = [
    'Jan',
    'Fev',
    'Mar',
    'Apr',
    'Mai',
    'Jun',
    'Jul',
    'Aug',
    'Set',
    'Oct',
    'Nov',
    'Dec',
];

export function getMonthNamesArray(
    firstDate: Date,
    secondDate: Date
): string[] {
    const firstMonth = firstDate.getMonth();
    const secondMonth = secondDate.getMonth();

    if (firstDate.getFullYear() === secondDate.getFullYear()) {
        const differenceOfDatesInMonths = secondMonth - firstMonth;
        const calculatedArrayMonthsNames = [arrayOfMonths[firstMonth]];
        for (let i = 0; i <= differenceOfDatesInMonths; i++) {
            calculatedArrayMonthsNames.push(arrayOfMonths[i + firstMonth]);
        }
        return calculatedArrayMonthsNames;
    }

    return ['olar'];
}
