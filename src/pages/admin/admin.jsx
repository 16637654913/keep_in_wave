import React, { Component } from 'react'
import {Redirect ,Route,Switch} from 'react-router-dom'
import memoryUtils from "../../utils/memoryUtils"
import { Layout } from 'antd';
import LeftNav from '../../components/left-nav'
import Header from '../../components/header'
import Category from '../catagory/catagory'
import Home from '../home/home'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'

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
                  <Content style={{margin:15,backgroundColor:'white'}}>
                      <Switch>
                          <Route path='/home' component={Home}/>
                          <Route path='/category' component={Category}/>
                          <Route path='/product' component={Product}/>
                          <Route path='/role' component={Role}/>
                          <Route path='/user' component={User}/>
                          <Redirect to='/home'/>
                      </Switch>
                  </Content>
                  <Footer style={{textAlign:'center'}}>推荐使用谷歌浏览器，以获得最佳的浏览体验</Footer>
                </Layout>
            </Layout>
        )
    }
}
