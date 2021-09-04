export interface Lesson {
  /**
   * С какого по какое время проходят пары
   */
  time: {
    /**
     * Время начала занятия
     * `HH:ii`
     */
    start: string;
    /**
     * Время окончания занятия
     * `HH:ii`
     */
    end: string;
  };
  /**
   * С какого по какое число проходят пары
   */
  date: {
    /**
     * Дата начала занятия
     * `YYYY-MM-DD`
     */
    start: string;
    /**
     * Дата окончания занятия
     * `YYYY-MM-DD`
     */
    end: string;
  };
  /**
   * Номер недели, обычно 1 или 2
   */
  week: number;
  /**
   * Номер недели, обычно 1 или 2
   */
  weekday: number;
  /**
   * Аудитории
   */
  audiences: string[];
  /**
   * Преподаватели
   */
  teachers: string[];
}
