import React, { Component } from 'react';
import loading from "../img/loading.gif";

const Loading = (props) => {
    return (
      <div className="text-center">
        <img className="my-5" src={loading} alt={loading} width={props.width} height={props.height}/>
      </div>
    );
}

export default Loading;