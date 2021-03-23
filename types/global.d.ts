/*
 * @Description:
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-03-23 16:20:22
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-03-23 16:23:17
 */
declare type Nullable<T> = T | null;

declare type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>;
