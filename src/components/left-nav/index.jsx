import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import './index.less'
const { SubMenu } = Menu;
export default class LeftNav extends Component {
    render() {
        return (
            <div className="left-nav">
                <Link to='/' className = "left-nav-header">
                    <h2>硅谷后台</h2>
                </Link>
                <div style={{ width: 200 }}>
                    <Menu
                      defaultSelectedKeys={['1']}
                      defaultOpenKeys={['sub1']}
                      mode="inline"
                      theme="dark"
                    >
                      <Menu.Item key="1" icon={<PieChartOutlined />}>
                        首页
                      </Menu.Item>
                      <SubMenu key="sub1" icon={<MailOutlined />} title="商品">
                        <Menu.Item key="2">品类管理</Menu.Item>
                        <Menu.Item key="3">商品管理</Menu.Item>
                      </SubMenu>
                      <Menu.Item key="4" icon={<DesktopOutlined />}>
                        用户管理
                      </Menu.Item>
                      <Menu.Item key="5" icon={<ContainerOutlined />}>
                        角色管理
                      </Menu.Item>
                    </Menu>
                </div>
            </div>
        )
    }
}
