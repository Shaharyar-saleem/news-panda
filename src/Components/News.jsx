import React, { Component, useState } from 'react';
import NewsItem from './NewsItem';
import PlaceHolderImg from '../img/placeholder-image.jpg';


export class News extends Component {
    // 4053b8b400004c86982aebd728731683  //News API key

    constructor() {
        console.log("i am a constructor")
        super()
        this.state = {
           articles: '',
           loading: false,
           page: 1,
           totalArticles: 0,
           maxPages: null,
        }
    }

    handleNext = async () => {
        this.setState({page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4053b8b400004c86982aebd728731683&pageSize=16&page=${this.state.page}`;
        console.log("API:", url)
        let data = await fetch(url)
        let fetchedData = await data.json()
        this.setState({articles: fetchedData.articles, totalArticles: fetchedData.totalResults})
    }
    
    handlePrevious = async () => {
        this.state.page > 1 ? this.setState({page: this.state.page - 1 }) : this.setState({page: 1})
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4053b8b400004c86982aebd728731683&pageSize=16&page=${this.state.page}`;
        console.log("API:", url)
        let data = await fetch(url)
        let fetchedData = await data.json()
        this.setState({articles: fetchedData.articles, totalArticles: fetchedData.totalResults})
    }

    async componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4053b8b400004c86982aebd728731683&pageSize=16&page=${this.state.page}`;
        console.log("API:", url)
        let data = await fetch(url)
        let fetchedData = await data.json()
        this.setState({articles: fetchedData.articles, totalArticles: fetchedData.totalResults, maxPages: fetchedData.totalResults / 12})
        console.log("max pages:", this.state.maxPages)
    }
  render() {
    const customContainer = {
        width: '70%',
        margin: '0 auto',
    }
    return (
        <div className="my-5" style={customContainer}>
            <h2 className="text-center">News Panda - latest News</h2>
            <div className="row">
                {
                this.state.articles ? this.state.articles.map((article, key)=>{
                   return <div className="col-md-3 mt-5" key={key}>
                            <NewsItem title={article.title ? article.title.slice(0,55) : ''} description={article.description ? article.description.slice(0,120) : ''} imageUrl={article.urlToImage ? article.urlToImage : PlaceHolderImg} detailUrl={article.url ? article.url : ''} />
                          </div>
                }) : ''
            }
            </div>
            <div className="d-flex justify-content-center my-5">
                <button disabled={this.state.page == 1 ? true : false} className="btn btn-lg btn-outline-success mx-3 px-4" onClick={this.handlePrevious}>&laquo; Previous</button>
                <button disabled={this.state.page >= this.state.maxPages ? true : false} className="btn btn-lg btn-outline-success mx-3 px-5" onClick={this.handleNext}>Next &raquo;</button>
            </div>
      </div>
    )
  }
}

export default News