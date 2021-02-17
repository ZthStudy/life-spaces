/*
 * @Description:
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-02-10 17:00:12
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-02-17 10:36:55
 */
interface Nav {
  label: string;
  icon: string;
  children?: Nav[];
  fold?: boolean;
  index: number;
  path?: string;
}

export { Nav };
