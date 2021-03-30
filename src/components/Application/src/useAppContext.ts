import { useContext, createContext } from "@/hooks/core/useContext";
import { Ref } from "vue";

interface AppProviderContextProps {
  prefixCls: Ref<string>;
}

const key = Symbol();

const createAppProviderContext = (context: AppProviderContextProps) => {
  return createContext<AppProviderContextProps>(context, key);
};

const useAppProviderContext = () => {
  return useContext<AppProviderContextProps>(key);
};

export { createAppProviderContext, useAppProviderContext };
