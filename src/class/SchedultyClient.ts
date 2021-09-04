import fetch from 'node-fetch';
import {
  CheckTokenResponse,
  GetTokenStatsResponse,
  SetScheduleRequest,
  SetScheduleResponse,
} from '../api';

export class SchedultyClient {
  private readonly apiUrl: string = process.env.SCHEDULTY_API_URL || 'https://api.schedulty.ru';

  private async call<T>(method: string, params: any = {}): Promise<T> {
    const fullUrl: string = this.apiUrl + method;
    params.token = this.apiToken;
    const response = await fetch(fullUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json() as unknown as T;
  }

  public constructor(private readonly apiToken: string) {}

  /**
   * Записать распиание
   * @param schedule расписание
   * @returns
   */
  public async setSchedule(schedule: SetScheduleRequest): Promise<any> {
    return this.call<SetScheduleResponse>('/schedule', schedule);
  }

  /**
   * Проверить токен на работоспособность
   * @returns true - всё ок, false - токен не существует или заблокирован
   */
  public async checkToken(): Promise<boolean> {
    return (await this.call<CheckTokenResponse>('/token/check')).isValid;
  }

  /**
   * Получить статистику по токену
   * @returns статистика
   */
  public async getTokenStats(): Promise<GetTokenStatsResponse> {
    return this.call<GetTokenStatsResponse>('/token/stats');
  }
}
