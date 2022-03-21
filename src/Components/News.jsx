import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  render() {
    return (
        <>
      <div>News Block</div>
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      </>
    )
  }
}

export default News