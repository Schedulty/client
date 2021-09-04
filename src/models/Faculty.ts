import { Group } from './Group';

export interface Faculty {
  /**
   * Название факультета, желательно краткое
   * формат: regex:`^[А-яЁёA-z\s\.\-]{3, 20}$`
   */
  name: string;
  /**
   * Группы
   */
  groups: Group[];
}
