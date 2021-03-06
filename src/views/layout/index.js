import React, { useState } from 'react'
import { Menu } from 'antd'
import { SmileOutlined, FileTextOutlined, SelectOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
export default function Layout(props) {
  return (
    <div>
      <MyMenu />
      <div style={{ margin: '16px 24px' }}>{props.children}</div>
    </div>
  )
}
function MyMenu() {
  const [current, setCurrent] = useState('home')
  let history = useHistory()
  return (
    <Menu
      onClick={e => {
        setCurrent(e.key)
        history.push(e.key)
      }}
      selectedKeys={[current]}
      mode="horizontal"
      style={{ textAlign: 'center' }}
    >
      <Menu.Item key="home" icon={<SmileOutlined />}>
        首页
      </Menu.Item>
      <Menu.Item key="audit" icon={<FileTextOutlined />}>
        发布单
      </Menu.Item>
      <Menu.Item key="string" icon={<SelectOutlined />}>
        小工具
      </Menu.Item>
    </Menu>
  )
}
