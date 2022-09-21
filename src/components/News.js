import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, settotalResults] = useState(0)

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const UpdateNews = async() => {
    props.setProgress(0)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    props.setProgress(30)
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(70)
    setArticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100)
  }

  useEffect(() => {
      document.title = `${capitalizeFirstLetter(
    props.category  
  )} - PakaoNews`;
    UpdateNews();
  }, [])

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;

    setPage(page+1)

    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    settotalResults(parsedData.totalResults)
  };

    return (
      <>
        <div className="container my-2">
          <h2
            className="text-center"
            style={{ marginBottom: "35px", marginTop: "20px" }}
          >
            PakaoNews - {capitalizeFirstLetter(props.category)}{" "}
            Headlines
          </h2>
          {/* {state.loading && <Spinner />} */}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length != totalResults}
            loader={<Spinner></Spinner>}
          >
            <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4 my-2" key={element.url}>
                    <NewsItem
                      title={element.title? element.title.split("-")[0] : "No title"}
                      description={
                        element.description
                          ? element.description
                          : "There is no description avialable for this news, kidnly click on the read more to visit official source of the news. THANK YOU"
                      }
                      img_url={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://cdn.pixabay.com/photo/2013/07/12/19/16/newspaper-154444__340.png"
                      }
                      url={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    ></NewsItem>
                  </div>
                );
              })}
            </div>
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }

News.defaultProps = {
  country: "in",
  pageSize: 5,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
