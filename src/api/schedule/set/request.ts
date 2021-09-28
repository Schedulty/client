import { Faculty } from '../../../models/Faculty';

export interface SetScheduleRequest {
  /**
   * Если true строит расписание для преподавателей
   * @default true
   */
  buildTeachers?: boolean;
  /**
   * Факультеты
   */
  schedule: Faculty[];
}
