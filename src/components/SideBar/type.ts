/*
 * @Description:
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-02-10 17:00:12
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-02-10 17:26:57
 */
interface Nav {
  label: string;
  icon: string;
  children?: Nav[];
  fold?: boolean;
}

export { Nav };
