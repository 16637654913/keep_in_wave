import React, { Component } from 'react'
import { Form, Input, Button ,message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Redirect} from 'react-router-dom'
import './login.less'
import {reLogin} from '../../api/index'
import memoryUtils from "../../utils/memoryUtils"
import storageUtils from "../../utils/storageUtils"
const NormalLoginForm =() => {
    //已登录则调转
    const user = memoryUtils.user
    if(user && user._id){
      return <Redirect to='/'/>
    }

    const onFinish =async (values) => {
      const {username,password} = values
      try{
        const response = await reLogin(username,password)
        console.log('请求成功',response.data)
        const result = response.data.status
        if(!result){
          message.success('登陆成功')
          const user = response.data
          memoryUtils.user = user
          storageUtils.saveUser(user)
          this.props.value.replace('/')
        }else{
          message.error(response.data.msg)
        }
      } catch(error){
        console.log("请求出错",error)
      }
      //async,await,作用：简化promise对象的使用，不再用then来指定成功和失败的回调
      console.log('Received values of form: ', values);
    };
  
    return (
        <div className="login">
        <header className="login-header">后台管理系统</header>
        <section className = "login-content">
            <h2>用户登录</h2> 
            <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
            {
                min:4,
                message: 'length should be more than 3'
            },
            {
                max:12,
                message:'length shoule be less than 13'
            },
            {
                pattern:/^\w+$/,
                message:'only"letters,nums,_"'
            }
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
            {
                min:4,
                message: 'length should be more than 3'
            },
            {
                max:12,
                message:'length shoule be less than 13'
            },
            {
                pattern:/^\w+$/,
                message:'only"letters,nums,_"'
            }
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
        </section>
        </div>
 
    );
  };
  export default NormalLoginForm