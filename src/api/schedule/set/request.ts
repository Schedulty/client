import { Faculty } from '../../../models/Faculty';

export interface SetScheduleRequest {
  /**
   * Факультеты
   */
  schedule: Faculty[];
}
