import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import memoryUtils from "../../utils/memoryUtils"
import { Layout } from 'antd';
import LeftNav from '../../components/left-nav'
import Header from '../../components/header'


const { Footer, Sider, Content } = Layout;
export default class Admin extends Component {
    render() {
        //必须代码，测试暂时注释！！！！！！！！！！！！
        // const user = memoryUtils.user
        // if(!user || !user._id){
        //     return <Redirect to='/login'/>
        // }
        return (
            <Layout style={{height:'100%'}}>
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout>
                  <Header>Header</Header>
                  <Content style={{backgroundColor:'white'}}>Content</Content>
                  <Footer style={{textAlign:'center'}}>推荐使用谷歌浏览器，以获得最佳的浏览体验</Footer>
                </Layout>
            </Layout>
        )
    }
}
