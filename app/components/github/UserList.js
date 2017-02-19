import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';

export default class UserList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.userList && this.props.userList.length) {
      return (
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Row>
            {
              this.props.userList.map(user => {
                return (
                  <Col span={6}>
                    <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                      <div className="custom-image">
                        <img alt="example" width="100%" src={user.avatar_url} />
                      </div>
                      <div className="custom-card">
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                        <p><a href={user.blog}>{user.blog}</a></p>
                      </div>
                    </Card>
                  </Col>
                )
              })
            }
          </Row>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
