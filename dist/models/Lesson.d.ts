export interface Lesson {
    time: {
        start: string;
        end: string;
    };
    date: {
        start: string;
        end: string;
    };
    week: number;
    weekday: number;
    audiences: string[];
    teachers: string[];
}
