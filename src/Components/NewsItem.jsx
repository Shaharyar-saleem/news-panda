import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, detailUrl, publishDate, author, source} = this.props;
    let date = new Date(publishDate)
    return (
      <>
        <div className="card position-relative" style={{ width: "90%", boxShadow: '-2px 5px 9px 0px rgba(0,0,0,0.87)', margin: '0 auto' }}> 
        <span className="badge rounded-pill bg-danger" style={{ position: 'absolute', top: '12px', right: '13px', padding: '10px 20px'}}>{source ? source : 'Unknown'}</span>
          <img src={imageUrl} className="card-img-top" alt="..." style={{ height: "280px"}}/>
          <div className="card-body bg-light" style={{ height: "310px", padding: "30px 40px"}}>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">Written By <b>{author ? author : 'Unknown'}</b> on <b>{date.toUTCString()}</b></small></p>
            <a href={detailUrl} target="_blank" className="btn btn-success" style={{ width: "100%"}}>
                News Detail
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
