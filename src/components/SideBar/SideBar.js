import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import './SideBar.css';
import logocollapsed from './logocollapsed.png';
import logo from './logo.png';
const SubMenu = Menu.SubMenu;
const { Sider } = Layout;
export default class SideBar extends React.Component {
    state = {
        collapsed: false,
    };


    onCollapse = (collapsed) => {
        this.setState({
            collapsed
        });
    }

    render() {
        return (
            <div>
                <Sider
                    className={this.props.theme || "light"}
                    style={{height: '100%'}}
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                    
                >
                {this.state.collapsed && 
                 <img src={logocollapsed} alt="Paris" className="logoCollapsed"/>
                }
                {!this.state.collapsed && 
                    <img src={logo} alt="Paris" className="logo"/>
                }
                <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
                    { this.props.menu.map(menuItem => {
                        if (menuItem.children) {
                            return (
                                <SubMenu
                                    className={(this.props.theme || "light")+"Sub"}
                                    key="sub1"
                                    title={<span><Icon type="user"/><span>User</span></span>}
                                    >
                                    {menuItem.children.map(itemMenuChild => {
                                        return (
                                            <Menu.Item key={itemMenuChild.id}>{itemMenuChild.name}</Menu.Item>
                                        )
                                    })}
                                </SubMenu>
                            )
                        } else {
                            return (
                                <Menu.Item key={menuItem.id}>
                                    <Icon type={menuItem.icon} />
                                    <span>{menuItem.name}</span>
                                </Menu.Item>

                            )
                        }
                    })}
                    </Menu>
                </Sider>
            </div>
        )
    }
}