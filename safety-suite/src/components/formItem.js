import React, { Component } from 'react';

class FormItem extends Component {
  render() {
    return (
      <p>{this.props.fileType}</p>
    );
  }
}

export default FormItem;
