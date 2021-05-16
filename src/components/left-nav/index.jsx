import React, { Component } from 'react'
import {Link,withRouter} from 'react-router-dom'
import { Menu } from 'antd';
import {
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import './index.less'
import menuList from '../../config/menuConfig'
const { SubMenu } = Menu;
class LeftNav extends Component {
  getMenuNodes=(menuList) => {
    return menuList.map(item => {
      if(!item.children){
        return(
          <Menu.Item key={item.key} icon={<PieChartOutlined />}>
                    <Link to={item.key}>{item.title}</Link>
          </Menu.Item>
        )
      }else{
        return(
          <SubMenu key={item.key} icon={<MailOutlined />} title={item.title}>
            {this.getMenuNodes(item.children)}
          </SubMenu>
        )
      }
    })
  }
    render() {
      const path = this.props.location.pathname
        return (
            <div className="left-nav">
                <Link to='/' className = "left-nav-header">
                    <h2>硅谷后台</h2>
                </Link>
                <div style={{ width: 200 }}>
                    <Menu
                      selectedKeys={[path]}
                      openKeys={[path]}
                      mode="inline"
                      theme="dark"
                    >
                      {this.getMenuNodes(menuList)}
                      {/* <Menu.Item key="1" icon={<PieChartOutlined />}>
                        <Link to='/home'>首页</Link>
                      </Menu.Item>
                      <SubMenu key="sub1" icon={<MailOutlined />} title="商品">
                        <Menu.Item key="2"><Link to='/catagory'>品类管理</Link></Menu.Item>
                        <Menu.Item key="3"><Link to='/product'>商品管理</Link></Menu.Item>
                      </SubMenu>
                      <Menu.Item key="4" icon={<DesktopOutlined />}>
                      <Link to='/user'>用户管理</Link>
                      </Menu.Item>
                      <Menu.Item key="5" icon={<ContainerOutlined />}>
                      <Link to='/role'>角色管理</Link>
                      </Menu.Item> */}
                    </Menu>
                </div>
            </div>
        )
    }
}
export default withRouter(LeftNav)
//高阶组件，封装leftNav,使其拥有三个属性，history,location，match
