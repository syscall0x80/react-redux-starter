import React from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import NavComponent from '../components/NavComponent';
import './home.css';

@connect(state => state, { pushState })
export default class Home extends React.Component {
  static propTypes = {
    children: React.PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(props) {
    this.props = props;
  }

  render() {
    return (
      <div>
        <div style={{position:"relative",zIndex:"100"}}>
           <NavComponent pushState={this.props.pushState}/>
        </div>
        <div style={{padding:"10px 0 10px 20px",width:"98%",margin:"0 auto"}}>
           {this.props.children}
        </div>
      </div>
    );
  }

}
