/*
 * @Description:
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-03-30 11:11:58
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-03-30 14:35:55
 */

import {
  InjectionKey,
  inject,
  reactive,
  readonly as defineReadonly,
  provide,
} from "vue";

interface createContextOptions {
  readonly?: boolean;
}

const createContext = <T>(
  context: any,
  key: InjectionKey<T> = Symbol(),
  options: createContextOptions = {}
) => {
  const { readonly = true } = options;
  const state = reactive(context);
  const provideData = readonly ? defineReadonly(state) : state;
  provide(key, provideData);
};

const useContext = <T>(key: InjectionKey<T>, defaultValue?: any) => {
  return inject(key, defaultValue || {});
};

export { createContext, useContext };
