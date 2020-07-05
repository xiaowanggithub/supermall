import {request} from './request';
// 如果没有用defulte导出都要加大括号

export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}
