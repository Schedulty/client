import { GetTokenStatsResponse, SetScheduleRequest } from '../api';
export declare class SchedultyClient {
    private readonly apiToken;
    private readonly apiUrl;
    private call;
    constructor(apiToken: string);
    setSchedule(schedule: SetScheduleRequest): Promise<any>;
    checkToken(): Promise<boolean>;
    getTokenStats(): Promise<GetTokenStatsResponse>;
}
