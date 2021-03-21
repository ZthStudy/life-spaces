/*
 * @Description:
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-03-20 14:35:57
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-03-20 14:41:22
 */
interface DropMenu {
  text: string;
  event: string;
  onClick?: () => {};
}

export { DropMenu };
