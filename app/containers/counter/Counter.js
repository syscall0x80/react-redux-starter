import React from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { Form, Icon, Input, Button } from 'antd';
import { increment, double, add } from '../../actions/counter';

const FormItem = Form.Item;

@connect(state => {
  return state;
}, {
  pushState, increment, double, add,
})
class Counter extends React.Component {
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
      if (parseInt(values.num)) {
        this.props.add(parseInt(values.num));
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <h1>{this.props.counter.count}</h1>
        <hr/>
        <Button type="primary" onClick={() => this.props.increment()}>加一</Button>
        <Button type="ghost" onClick={() => this.props.double()}>翻倍</Button>
        <Form inline onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('num', {
              rules: [{ required: true, message: 'Please input a number!' }],
            })(
              <Input addonBefore={<Icon type="user" />} placeholder="123" />
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">
              加
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Form.create()(Counter);
