/*
 * @Description:
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-02-10 16:47:26
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-02-10 17:38:20
 */
import { ref } from "vue";
import { Nav } from "./type";
const parent = ref([
  {
    label: "前端",
    icon: "icon-mangguo",
    children: [
      {
        label: "js",
        icon: "icon-shuimitao",
      },
      {
        label: "css",
        icon: "icon-huolongguo",
      },
    ],
    fold: true,
  },
  {
    label: "Node.js",
    icon: "icon-fanqie",
    children: [],
  },
  {
    label: "Life",
    icon: "icon-xigua",
    children: [
      {
        label: "旅行",
        icon: "icon-shuimitao",
      },
      {
        label: "随记",
        icon: "icon-huolongguo",
      },
    ],
    fold: false,
  },
  {
    label: "Note",
    icon: "icon-ningmeng",
    children: [],
  },
]);

const clickParentIndex = ref(0);
const clickChildIndex = ref(0);

const hasChildren = (item: Nav): boolean => {
  return !!item.children?.length;
};

const parentClick = (item: Nav, index: number): void => {
  clickParentIndex.value = index;
  if (hasChildren(item)) {
    const curfold = !!item.fold;
    item.fold = !curfold;
  }
};

const childClick = (index: number) => {
  clickChildIndex.value = index;
};

const useNav = () => {
  return {
    parent,
    hasChildren,
    clickParentIndex,
    clickChildIndex,
    parentClick,
    childClick,
  };
};

export { useNav };
