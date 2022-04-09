import React, { Component, useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import PlaceHolderImg from "../img/placeholder-image.jpg";
import Loading from "./Loading.jsx";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import propTypes from "prop-types";

const News = (props) => {

  News.prototype = {
    country: PropTypes.string,
    apiKey: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  }
  
  News.defaultProps = {
    category: "general",
    pageSize: 12,
  }

  let [articles, setArticles] = useState([]);
  let [loading, setLoading] = useState(false);
  let [page, setPage] = useState(1);
  let [totalArticles, setTotalArticles] = useState(0);
  let [maxPage, setMaxPage] = useState(null);

  const updateContent = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let fetchedData = await data.json();
    props.setProgress(50);
    setArticles(fetchedData.articles);
    setTotalArticles(fetchedData.totalResults);
    setMaxPage(fetchedData.totalResults / props.pageSize);
    setLoading(false);
    props.setProgress(100);
    document.title = `${captilizeString(props.category)} - NewsPanda`;
    setPage(page+1)
  };

  const captilizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    updateContent();
  }, []);

  const fetchMoreData = async () => {
    setPage(page+1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
    setLoading(true)
    let data = await fetch(url)
    let fetchedData = await data.json()
    setArticles(articles.concat(fetchedData.articles))
    setLoading(false)
    setTotalArticles(fetchedData.totalResults)
  }

  const customContainer = {
    width: "90%",
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
        News Panda - {toUpperCase(props.category)} News
      </h2>
      {
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalArticles}
          loader={<Loading width={40} height={40} />}
        >
          <div style={customContainer}>
            <div className="row">
              {articles &&
                articles.map((article, key) => {
                  return (
                    <div className="col-md-4 mt-5 pt-3" key={key}>
                      <NewsItem
                        title={article.title ? article.title.slice(0, 100) : ""}
                        description={article.description ? article.description.slice(0, 100) : ""}
                        imageUrl={article.urlToImage ? article.urlToImage : PlaceHolderImg}
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
};

export default News;
