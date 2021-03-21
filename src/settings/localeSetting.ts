/*
 * @Description:
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-03-20 14:43:24
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-03-21 14:06:03
 */
import type { DropMenu } from "@/components/Dropdown/src/types";
import type { LocaleType } from "#/config";

const LOCALE: { [key: string]: LocaleType } = {
  ZH_CN: "zh_CN",
  EN_US: "en",
};

// locale list
export const localeList: DropMenu[] = [
  {
    text: "简体中文",
    event: LOCALE.ZH_CN,
  },
  {
    text: "English",
    event: LOCALE.EN_US,
  },
];
