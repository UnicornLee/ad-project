import { Button } from 'antd';
import React, { Component } from 'react';
import axios from 'axios';
import './style.scss';

class IndexPage extends Component {
  componentDidMount() {
    axios.get('/ad/index/gray').then((res) => {
      console.log('res: ', res.data);
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="index-page">
        <div className="middle-box">
          <span>Here is index page.</span>
          <Button type="primary">按钮</Button>
        </div>
      </div>
    );
  }
}

export default IndexPage;
