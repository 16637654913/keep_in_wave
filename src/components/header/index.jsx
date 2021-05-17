import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { Modal} from 'antd';
import './index.less'
import {formateDate} from '../../utils/dataUtils'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'
import {reqWeather} from '../../api/index'
import menuList from '../../config/menuConfig'
class Header extends Component {
    state={
        currentTime:formateDate(Date.now()),
        weather:''
    }
    getTime=() => {
        this.intervalId = setInterval(() => {
          const currentTime = formateDate(Date.now())
          this.setState({
              currentTime
          })
        },1000)
    }
    getWeather= async() => {
        const {weather} = await reqWeather()
        this.setState({
            weather
        })
    }
    // getTitle=(menuList) => {
    //     const path = this.props.location.pathname
    //     return menuList.map(item => {
    //         if(item.key===path || item.key==='/products'){
    //             if(item.children){
    //                 return this.getTitle(item.children)
    //             }else{
    //                 return item.title
    //             }
                
    //         }else{
    //             return ''
    //         }
    //     })
    // }自写，足用，但有部分写死的缺陷
    getTitle=() => {
        const path = this.props.location.pathname
        let title
        menuList.forEach(item => {
            if(item.key===path){
                title=item.title
            }else if(item.children){
                const cItem = item.children.find(cItem => cItem.key === path)
                if(cItem){
                    title=cItem.title
                }
            }
        })
        return title
    }
    logOut=() => {
        Modal.confirm({
            content:'确认退出吗？',
            //onOk(){},若这样写，由于箭头函数内部无this，会报错
            onOk:()=>{
                storageUtils.removeUser()
                memoryUtils.user={}
                this.props.history.replace('/login')
            }
        })
    }
    //第一次render()之后执行一次，一般再次执行异步操作，ajax、定时器
    componentDidMount(){
        this.getTime()
        this.getWeather()
    }
    componentWillUnmount(){
        clearInterval(this.intervalId)//清理getWeather的定时器
    }
    render() {
        const { weather,currentTime } = this.state
        const title = this.getTitle()
        // const user = memoryUtils.user
        return (
            <div className="header">
                <div className="header-top">
                    <span>
                        欢迎 ,admin
                    </span>
                    <a href="#" onClick={this.logOut}>退出</a>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">{title}</div>
                    <div className="header-bottom-right">
                        <span>{currentTime}</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>{weather}</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Header)
