import React, { Component } from 'react'
import { Card ,Button ,Table , Space} from 'antd';
import {
    PlusOutlined
  } from '@ant-design/icons';
export default class Catagory extends Component {
    render() {
        const title = "一级分类列表"
        const extra = (
            <Button type="primary">
                <PlusOutlined />
                添加
            </Button>
        )
        const dataSource = [
            {
              key: '1',
              name: '胡彦斌',
              age: 32,
              address: '西湖区湖底公园1号',
            },
            {
              key: '2',
              name: '胡彦祖',
              age: 42,
              address: '西湖区湖底公园1号',
            },
          ];
          
          const columns = [
            {
              title: '姓名',
              dataIndex: 'name',
              key: 'name',
            },
            {
                title: 'Action',
                width: 300,
                dataIndex: 'action',
                key: 'action',
                render: () => (
                  <Space size="middle">
                    <a href="#">Invite</a>
                    <a href="#">Delete</a>
                  </Space>
                ),
              },
          ];
          
          
        return (
            <div>
                <Card title={title} extra={extra}>
                    <Table dataSource={dataSource} columns={columns} bordered/>;
                </Card>
            </div>
        )
    }
}
