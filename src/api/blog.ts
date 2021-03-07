/*
 * @Description: 
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-03-07 15:31:49
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-03-07 22:12:16
 */
import axios from "axios";

const createBlog = ()=>{
  return axios.post("http://localhost:8000/api/blog", {
    // title,
    // sort,
    // content: wangEditor.txt.html(),
  });
}