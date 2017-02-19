import React, { Component } from 'react';
import { Menu, Button } from 'antd';
import './nav.css'

export default class NavComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pushState = this.props.pushState;
    const SubMenu = Menu.SubMenu;
    return (
      <div style={{position:"relative"}}>
        <Menu mode="horizontal"
          style={{paddingTop:"10px",paddingBottom:"0px"}}>

          <Menu.Item>
            <span onClick={() => {pushState(null, '/')}}>REACT-REDUX</span>
          </Menu.Item>

          <Menu.Item>
            <a onClick={() => {pushState(null, '/')}}>首页</a>
          </Menu.Item>
          <SubMenu title={<span>demo</span>}>
            <Menu.Item className="menuItem">
              <a onClick={() => {pushState(null, '/counter')}}>counter</a>
            </Menu.Item>
            <Menu.Item className="menuItem">
              <a onClick={() => {pushState(null, '/github')}}>github</a>
            </Menu.Item>
          </SubMenu>
        </Menu>
        <span style={{position:"absolute",top:"1rem",right:"0"}}>
            <Button style={{float:"right",marginRight:"10px"}} onClick={() => {pushState(null,'/logout')}}>退出</Button>
        </span>
    </div>
    )
  }
}
