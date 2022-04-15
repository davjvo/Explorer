import { Quarter } from "../models/quarter";

function roundNumber(value: number): number{
    if(value < 0)
        return roundNumber(-value);
    
    return Math.round(value * 100) / 100;
}

export default {
    getDaily: () : Quarter[] => {
        const weekDays: string[] = [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
        ];
        const today = new Date();
        today.setDate(today.getDate() - 3);
        let quarters: Quarter[] = [...Array(7).keys()].map(index => {
            const date = new Date(today);
            date.setDate(date.getDate() + index);
            const day = date.getDay();
            let amount = roundNumber(Math.random() * 100 * day);

            return {
                description: weekDays[day],
                amount: amount
            };
        });

        return quarters;
    },
    getMonthly: (): Quarter[] => {
        const months: string[] = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];

        const today = new Date();
        today.setMonth(today.getMonth() - 6);
        console.log(today);
        let quarters: Quarter[] = [...Array(12).keys()].map(index => {
            const date = new Date(today);
            date.setMonth(date.getMonth() + index);
            const month = date.getMonth();
            let amount = roundNumber(Math.random() * 100 * month);

            return {
                description: months[month],
                amount: amount
            };
        });


        return quarters;
    },
    getYearly: (): Quarter[] => {
        
        const today = new Date();
        
        let quarters: Quarter[] = [...Array(3).keys()].map(index => {
            let year = today.getFullYear() - 2 + index;
            let amount = roundNumber(Math.random() * 100 * year);

            return {
                description: year.toString(),
                amount: amount
            };
        });

        return quarters;
    },
}