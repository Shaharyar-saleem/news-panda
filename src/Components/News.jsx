import React, { Component, useState } from 'react';
import NewsItem from './NewsItem';
import PlaceHolderImg from '../img/placeholder-image.jpg';
import Loading from './Loading.jsx';

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
        console.log("test 1:", this.state.page)
        this.setState({page: this.state.page += 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
        this.setState({loading: true})
        let data = await fetch(url)
        let fetchedData = await data.json()
        this.setState({articles: fetchedData.articles, totalArticles: fetchedData.totalResults, loading: false})
    }
    
    handlePrevious = async () => {
        this.setState({page: this.state.page -= 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
        this.setState({loading: true})
        let data = await fetch(url)
        let fetchedData = await data.json()
        this.setState({articles: fetchedData.articles, totalArticles: fetchedData.totalResults, loading: false})
    }

    async componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
        this.setState({loading: true})
        console.log("API:", url)
        let data = await fetch(url)
        let fetchedData = await data.json()
        this.setState({articles: fetchedData.articles, totalArticles: fetchedData.totalResults, maxPages: fetchedData.totalResults / this.props.pageSize, loading: false})
    }
  render() {
    const customContainer = {
        width: '75%',
        margin: '0 auto',
    }
    const toUpperCase = (word)=>{
       const firstLetter = word.slice(0,1).toUpperCase()
       const lowerLetters = word.slice(1,word.length).toLowerCase();
       return firstLetter + lowerLetters
    }
    return (
        <div className="my-5" style={customContainer}>
            <h2 className="text-center" style={{paddingBottom: '16px', paddingTop: '70px', fontSize: '40px', letterSpacing: '5.5px'}}>News Panda - {toUpperCase(this.props.category)} News</h2>
            {this.state.loading && <Loading width={40} height={40} />}
            <div className="row">
                {
                    !this.state.loading &&
                this.state.articles ? this.state.articles.map((article, key)=>{
                   return <div className="col-md-3 mt-5" key={key}>
                            <NewsItem title={article.title ? article.title.slice(0,55) : ''} description={article.description ? article.description.slice(0,120) : ''} imageUrl={article.urlToImage ? article.urlToImage : PlaceHolderImg} detailUrl={article.url ? article.url : ''} />
                          </div>
                }) : ''
            }
            </div>
            <div className="d-flex justify-content-center my-5">
                <button disabled={this.state.page == 1 ? true : false} className="btn btn-lg btn-outline-success mx-3 px-4" onClick={this.handlePrevious}>&laquo; Previous</button>
                <button disabled={this.state.page >= Math.floor(this.state.maxPages) ? true : false} className="btn btn-lg btn-outline-success mx-3 px-5" onClick={this.handleNext}>Next &raquo;</button>
            </div>
      </div>
    )
  }
}

export default News