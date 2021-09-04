import { Lesson } from './Lesson';

export interface Group {
  /**
   * Имя группы (e.g. 4-42)
   */
  name: string;
  /**
   * Пары
   */
  lessons: Lesson[];
}
