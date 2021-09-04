export interface Lesson {
    subject: string;
    type: string;
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
