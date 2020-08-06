import React from 'react'
import { Menu } from 'antd'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons'

const { SubMenu } = Menu

export default class App extends React.Component {
	state = {
		current: 'mail',
	}

	handleClick = e => {
		console.log('click ', e)
		this.setState({ current: e.key })
	}

	render() {
		const { current } = this.state
		return (
			<Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" style={{ textAlign: 'center' }}>
				<Menu.Item key="mail" icon={<MailOutlined />}>
					Navigation One
				</Menu.Item>
				<Menu.Item key="app" icon={<AppstoreOutlined />}>
					Navigation Two
				</Menu.Item>
				<Menu.Item key="alipay">
					<a href="https://ant.design" target="_blank" rel="noopener noreferrer">
						Navigation Four - Link
					</a>
				</Menu.Item>
			</Menu>
		)
	}
}
