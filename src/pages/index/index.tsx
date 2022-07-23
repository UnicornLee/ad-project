import { Button } from 'antd';
import React, { Component } from 'react';

class IndexPage extends Component {
  render() {
    return (
      <div className="box">
        Hello, React.
        <span>Here is index page.</span>
        <Button type="primary">按钮</Button>
      </div>
    );
  }
}

export default IndexPage;
