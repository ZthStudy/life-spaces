/*
 * @Description:
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-02-10 17:00:12
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-02-11 10:57:42
 */
interface Nav {
  label: string;
  icon: string;
  children?: Nav[];
  fold?: boolean;
  index: number;
}

export { Nav };
