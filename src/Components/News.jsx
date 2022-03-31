import React, { Component, useState } from "react";
import NewsItem from "./NewsItem";
import PlaceHolderImg from "../img/placeholder-image.jpg";
import Loading from "./Loading.jsx";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  // 4053b8b400004c86982aebd728731683  //News API key

  static defaultProps = {
    country: "us",
    apiKey: "4053b8b400004c86982aebd728731683",
    category: "general",
    pageSize: 12,
  };

  static propTypes = {
    country: PropTypes.string,
    apiKey: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };

  constructor() {
    super();
    this.state = {
      articles: "",
      loading: false,
      page: 1,
      totalArticles: 0,
      maxPages: null,
    };
  }

  updateContent = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let fetchedData = await data.json();
    this.setState({
      articles: fetchedData.articles,
      totalArticles: fetchedData.totalResults,
      maxPages: fetchedData.totalResults / this.props.pageSize,
      loading: false,
    });

    document.title = `${this.captilizeString(this.props.category)} - NewsPanda`;
  };

  captilizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  async componentDidMount() {
    this.updateContent();
  }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`
    this.setState({ loading: true })
    let data = await fetch(url)
    let fetchedData = await data.json()
    console.log("API URL:", url)
    this.setState({
      articles: this.state.articles.concat(fetchedData.articles),
      loading: false,
      totalArticles: fetchedData.totalResults,
    })
  }

  render() {
    const customContainer = {
      width: "85%",
      margin: "0 auto",
    };
    const toUpperCase = (word) => {
      const firstLetter = word.slice(0, 1).toUpperCase();
      const lowerLetters = word.slice(1, word.length).toLowerCase();
      return firstLetter + lowerLetters;
    };
    return (
      <div className="my-5">
        <h2
          className="text-center"
          style={{
            paddingBottom: "16px",
            paddingTop: "70px",
            fontSize: "40px",
            letterSpacing: "5.5px",
          }}
        >
          News Panda - {toUpperCase(this.props.category)} News
        </h2>
        {/* {this.state.loading && <Loading width={40} height={40} />} */}
        {
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalArticles}
            loader={<Loading width={40} height={40} />}
          >
            <div style={customContainer}>
            <div className="row">
              {this.state.articles &&
                this.state.articles.map((article, key) => {
                  return (
                    <div className="col-md-4 mt-5 pt-3" key={key}>
                      <NewsItem
                        title={article.title ? article.title.slice(0, 100) : ""}
                        description={
                          article.description
                            ? article.description.slice(0, 150)
                            : ""
                        }
                        imageUrl={
                          article.urlToImage
                            ? article.urlToImage
                            : PlaceHolderImg
                        }
                        detailUrl={article.url ? article.url : ""}
                        publishDate={article.publishedAt}
                        author={article.author}
                        source={article.source.name}
                      />
                    </div>
                  );
                })}
            </div>
            </div>
          </InfiniteScroll>
        }
      </div>
    );
  }
}

export default News;
