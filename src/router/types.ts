/*
 * @Description:
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-03-11 10:59:49
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-03-11 14:19:45
 */
type Component<T extends any = any> = () => Promise<T>;

interface RouteMeta {
  title?: string;
}

interface AppRouteRecordRaw {
  path: string;
  name: string;
  component?: Component | string;
  children?: AppRouteRecordRaw[];
  meta?: RouteMeta;
  redirect?: string;
}

export { AppRouteRecordRaw };
