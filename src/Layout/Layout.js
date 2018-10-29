import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Divider } from 'antd';

// import GenericCard from '../components/GenericCard/GenericCard';
import './Layout.css';

// import CommandCardJson from '../Templates/CommandCard.json';
import CommandCardGridJson from '../Templates/CommandCardGrid.json';

// import SimpleCardJson from '../Templates/SimpleCard.json';
import SimpleCardGridJson from '../Templates/SimpleCardGrid.json';

import TemplateCard from '../components/TemplateCard/TemplateCard';


import SideBar from '../components/SideBar/SideBar';
import MenuJson from './menu.json';
import SoundSpectrum from '../components/SoundSpectrum/SoundSpectrum';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

const simpleCardsDataFeched = [
  {
    title: 'Datasets',
    info: '6',
    type: 'database'
  },
  {
    title: 'Languages',
    info: '7',
    type: 'insurance'
  },
  {
    title: 'Evaluation',
    info: '12',
    type: 'snippets'
  },
  {
    title: 'Datasets',
    info: '6',
    type: 'database'
  }
]

const commandCardsDataFeched = [
  {
    command: 'Turn on!!',
    title: 'Accuracy',
    accuracy: '6%',
    status: 'StatusYellow',
    languages: ["EN", "PT", "KO", "HI", "EN", "PT", "KO", "HI", "EN", "PT", "KO", "HI"]
  },
  {
    command: 'Close the door',
    title: 'Accuracy',
    accuracy: '12%',
    languages: ["HI", "EN", "PT", "KO", "HI", "EN", "PT", "KO", "HI"],
    status: 'StatusRed'
  },
  {
    command: 'Turn off!!',
    title: 'Accuracy',
    accuracy: '70%',
    languages: ["PT", "KO", "HI"],
    status: 'StatusGreen'
  },
  {
    command: 'Lights the lights On!',
    title: 'Accuracy',
    accuracy: '79%',
    languages: ["EN"],
    status: 'StatusGreen'
  }, {
    command: 'Close the door',
    title: 'Accuracy',
    accuracy: '10%',
    languages: ["PT", "KO", "HI", "EN", "PT", "KO", "HI", "EN", "PT", "KO", "HI", "EN", "PT", "KO", "HI"],
    status: 'StatusRed'
  }
]


export default class SiderMenu extends React.Component {
  state = {
    collapsed: false,
  };
  
  
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }
  render() {
    // let simpleCardTemplate = templateParser(SimpleCardJson)
    return (
      <Layout style={{ minHeight: '100vh'}}>

        <SideBar menu={MenuJson} theme="light"/>

        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>

            <Divider>Simple Cards</Divider>
            <div>
              {simpleCardsDataFeched.map((card, index) => {
                return (
                  < TemplateCard key={index} template={SimpleCardGridJson} {...card}/>
                )
              })}
            </div>

            <Divider>Commands Cards</Divider>

            <div>
              {commandCardsDataFeched.map((card, index) => {
                return (
                  < TemplateCard key={index} template={CommandCardGridJson} {...card}/>
                )
              })}
            </div>

            
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}