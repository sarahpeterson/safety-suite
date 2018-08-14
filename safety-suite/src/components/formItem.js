import React, { Component, Button } from 'react';

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
