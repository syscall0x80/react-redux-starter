import React from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { Form, Icon, Input, Button, Col, Row, Card } from 'antd';
import { getUserInfo } from '../../actions/github';
import UserList from '../../components/github/UserList';

const FormItem = Form.Item;

@connect(state => {
  return state;
}, {
  pushState, getUserInfo,
})
class User extends React.Component {
  static propTypes = {
  };

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(props) {
    this.props = props;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (values.name) {
        this.props.getUserInfo(values.name)
      }
    });
  };

  render() {
    const { userList } = this.props.github;
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input a github username!' }],
            })(
              <Input addonBefore={<Icon type="user" />} placeholder="Please input a github username" />
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" >
              搜索
            </Button>
          </FormItem>
        </Form>
        <UserList userList={this.props.github.userList}/>
      </div>
    );
  }
}

export default Form.create()(User);
