import ajax from './ajax'
// export function reLogin(username,password){
//     ajax('/login',{username,password},'POST')
// }
export const reLogin = (username,password) => ajax('/login',{username,password},'POST')//箭头函数，如果后面无中括号，不需加return，有则加
export const reqAddUser = (user) => ajax('/manage/user/add',user,'POST')