import React, { Component, Button } from 'react';
import '../App.css';

class FormItem extends Component {
  render() {
    return (
      <div>
        <p>{this.props.fileType}</p>
      </div>
    );
  }
}

export default FormItem;
