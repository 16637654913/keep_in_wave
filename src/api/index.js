import ajax from './ajax'
import jsonp from 'jsonp'
import {message} from 'antd'
// export function reLogin(username,password){
//     ajax('/login',{username,password},'POST')
// }
export const reLogin = (username,password) => ajax('/login',{username,password},'POST')//箭头函数，如果后面无中括号，不需加return，有则加
export const reqAddUser = (user) => ajax('/manage/user/add',user,'POST')
export const reqWeather = () => {
    return new Promise((resolve,reject) => {
        const url = 'https://restapi.amap.com/v3/weather/weatherInfo?city=310000&key=5f99498d19ea18f01b73da499c071e8a'
        jsonp(url,{},(err,data)=>{
        if(!err && data.status){
           const{weather}=data.lives[0]
           resolve({weather})
        }else{
            message.error('获取天气信息失败')
        }
    })
    })
    
}
export const reqCategorys = (parentId) => ajax('/manage/category/list',{parentId})
export const reqAddCategory =(parentId,categoryName) =>ajax('/manage/category/add',{parentId,categoryName},'POST')
export const reqUpdateCategory = ({categoryName,categoryId}) => ajax('/manage/category/update',{categoryName,categoryId},'POST')