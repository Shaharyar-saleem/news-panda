import React, { Component } from "react";

const NewsItem = (props) => {
    let date = new Date(props.publishDate)
    return (
      <>
        <div className="card position-relative" style={{ width: "90%", boxShadow: '-2px 5px 9px 0px rgba(0,0,0,0.87)', margin: '0 auto' }}> 
        <span className="badge rounded-pill bg-danger" style={{ position: 'absolute', top: '12px', right: '13px', padding: '10px 20px'}}>{props.source ? props.source : 'Unknown'}</span>
          <img src={props.imageUrl} className="card-img-top" alt="..." style={{ height: "200px"}}/>
          <div className="card-body bg-light" style={{ height: "310px", padding: "20px 15px"}}>
            <h5 className="card-title">{props.title}...</h5>
            <p className="card-text">{props.description}...</p>
            <p className="card-text"><small className="text-muted">Written By <b>{props.author ? props.author : 'Unknown'}</b> on <b>{date.toUTCString()}</b></small></p>
            <a href={props.detailUrl} target="_blank" className="btn btn-success" style={{ width: "100%"}}>
                News Detail
            </a>
          </div>
        </div>
      </>
    );
}

export default NewsItem;
