import { Group } from './Group';

export interface Faculty {
  /**
   * Название факультета, желательно краткое
   * формат: regex:`^[А-яЁёA-z\s\.\-]{3, 20}$`
   */
  name: string;
  /**
   * Является ли факультет расписанием для учителей, крайне рекомендуется не более одного такого
   * @default false
   */
  isTeachers?: boolean;
  /**
   * Группы
   */
  groups: Group[];
}
