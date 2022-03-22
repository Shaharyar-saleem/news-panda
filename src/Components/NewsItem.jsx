import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, detailUrl} = this.props;
    return (
      <>
        <div className="card" style={{ width: "18rem", boxShadow: '-2px 5px 9px 0px rgba(0,0,0,0.87)' }}>
          <img src={imageUrl} className="card-img-top" alt="..." style={{ height: "180px"}}/>
          <div className="card-body bg-light" style={{ height: "275px", paddingBottom: "5px"}}>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
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
