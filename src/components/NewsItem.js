import React from "react";

const NewsItem = (props) => {
    let { title, description, img_url, url, author, date, source } = props;
    return (
      <>
        <div className="card">
          <img
            src={img_url}
            className="card-img-top"
            alt={title.slice(0, 30)}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on dated{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={url} target="_blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }

export default NewsItem;