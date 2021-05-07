import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.less'
const NormalLoginForm = () => {
    const onFinish = (values) => {
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