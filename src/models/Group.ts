import { Lesson } from './Lesson';

export interface Group {
  /**
   * Имя группы (e.g. 4-42)
   * формат: regex:`^\S{2, 10}$`
   */
  name: string;
  /**
   * Пары
   */
  lessons: Lesson[];
}
