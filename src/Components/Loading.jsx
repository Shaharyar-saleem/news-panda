import React, { Component } from 'react';
import loading from "../img/loading.gif";

export default class Loading extends Component {
  render() {
    return (
      <div className="text-center">
        <img className="my-5" src={loading} alt={loading} width={this.props.width} height={this.props.height}/>
      </div>
    );
  }
}
