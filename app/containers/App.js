import React from 'react';
import {connect} from 'react-redux';
import {pushState} from 'redux-router';
import 'antd/dist/antd.css';

@connect(state => {
  return state;
}, {
  pushState
})
export default class App extends React.Component {
  static propTypes = {
    pushState: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}
