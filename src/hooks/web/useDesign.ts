/*
 * @Description:
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-03-30 11:01:36
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-03-30 13:41:23
 */
import { useAppProviderContext } from "@/components/Application/src/useAppContext";

const useDesign = (scope: string) => {
  const values = useAppProviderContext();
  return {
    prefixCls: `${values.prefixCls}-${scope}`,
  };
};

export { useDesign };
