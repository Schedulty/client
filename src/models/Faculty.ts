import { Group } from './Group';

export interface Faculty {
  /**
   * Название факультета, желательно краткое
   */
  name: string;
  /**
   * Группы
   */
  groups: Group[];
}
