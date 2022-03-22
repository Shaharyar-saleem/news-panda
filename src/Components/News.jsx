import React, { Component, useState } from 'react';
import NewsItem from './NewsItem';


export class News extends Component {
    // 4053b8b400004c86982aebd728731683  //News API key

    constructor() {
        super()
        this.state = {
           articles: this.articles,
           loading: false,
        }
    }

    async componentDidMount() {
        const url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4053b8b400004c86982aebd728731683";
        let data = await fetch(url)
        let fetchedData = await data.json()
        console.log("cmd data:",fetchedData.articles)
        this.setState({articles: fetchedData.articles})
        console.log("state value", this.state.articles)
    }
  render() {
    const customContainer = {
        width: '80%',
        margin: '0 auto',
    }
    return (
        <div className="my-5" style={customContainer}>
            <h2 className="text-center">News Panda - latest News</h2>
            <div className="row">
                {
                this.state.articles ? this.state.articles.map((article, key)=>{
                   return <div className="col-md-3 mt-4" key={key}>
                            <NewsItem title={article.title} description={article.description} imageUrl={article.urlToImage}/>
                          </div>
                }) : ''
            }
            </div>
      </div>
    )
  }
}

export default News