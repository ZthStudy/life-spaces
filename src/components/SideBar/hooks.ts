/*
 * @Description:
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-02-10 16:47:26
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-02-15 09:54:51
 */
import { ref } from "vue";
import { Nav } from "./type";
const parent = ref([
  {
    index: 0,
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
  },
  {
    index: 1,
    label: "Node.js",
    icon: "icon-fanqie",
    children: [],
  },
  {
    index: 2,
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
  },
  {
    index: 3,
    label: "Note",
    icon: "icon-ningmeng",
    children: [],
  },
]);

const clickParentIndex = ref(-1);
const clickChildIndex = ref(-1);

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

const childClick = (index: number, parent: Nav) => {
  clickChildIndex.value = index;
  clickParentIndex.value = parent.index;
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
