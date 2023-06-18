/**
 * 判断是否为润年
 * @description 闰年需要满足以下两个条件，1、能被4整除，但不能被100整除；2、能被400整除
 * @param {string} year 年份
 * @return {Boolean}
 * @example
 * isLeap(2023)
 */
export const isLeap = function (year: number): boolean {
    const bool = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    return bool
};

/**
 * 获取日期的星期
 * @description 使用Date自带的getDay方法可以获得指定日期的星期，返回的数值为0到6，分别代表星期天到星期六
 * @param {string} date 日期
 * @return {string} 星期
 * @example
 * getWeek('2022-06-18')
 */
export const getWeek = function (date: string | number | Date): string {
    let Stamp = new Date(date);
    let weeks = ["日", "一", "二", "三", "四", "五", "六"];
    return weeks[Stamp.getDay()];
};

/**
 * 获取月份天数
 * @description 只需要区分大小月，然后再特殊处理一下二月份闰年的情况即可
 * @param {string} year  年份
 * @param {string} month 月份
 * @return {number} 月份天数
 * @example
 * getMonthDays(2023,6)
 */
export const getMonthDays = (year: number, month: string | number): number | string => {
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const monthIndex = +month - 1;
    const days = monthIndex < 0 || monthIndex > 11 ? "" : isLeap(year) ? months[1] : months[monthIndex];
    return days;
};

