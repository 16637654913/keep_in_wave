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
    const path = this.props.location.pathname
    return menuList.map(item => {
      if(!item.children){
        return(
          <Menu.Item key={item.key} icon={<PieChartOutlined />}>
                    <Link to={item.key}>{item.title}</Link>
          </Menu.Item>
        )
      }else{
        const cItem = item.children.find(cItem => cItem.key===path)
        if(cItem){
          this.openKey=item.key
        }
        return(
          <SubMenu key={item.key} icon={<MailOutlined />} title={item.title}>
            {this.getMenuNodes(item.children)}
          </SubMenu>
        )
      }
    })
  }
  componentWillMount(){
    this.menuNodes = this.getMenuNodes(menuList)
  }//第一次render前执行一次，为第一次render准备数据（同步）
    render() {
      const path = this.props.location.pathname
      const openKey = this.openKey
      
        return (
            <div className="left-nav">
                <Link to='/' className = "left-nav-header">
                    <h2>demo</h2>
                </Link>
                <div style={{ width: 200 }}>
                    <Menu
                      selectedKeys={[path]}
                      defaultOpenKeys={[openKey]}
                      mode="inline"
                      theme="dark"
                    >
                      {this.menuNodes}
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
