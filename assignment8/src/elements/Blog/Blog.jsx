import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";

import "./Blog.css";
import { ToastContainer } from "react-toastify";
const Blogs = (props) => {
  const { name, BlogName, id, date, authorPic, time, picture } = props.writer;
 const handleBookMark=props.handleBookMark;
  const readingTime=props.retime
  return (
    <div className="blog">
      <img src={picture} alt="" />
      <div className="author">
        <div className="author-image">
          <img src={authorPic} alt="" />
          <div className="name">
            <h2>{name}</h2>
            <p>Posted at {date}</p>
          </div>
        </div>
        <div className="bookmark">
          <p>{time} min read</p>
          <button onClick={()=>handleBookMark(BlogName)}><FontAwesomeIcon icon={faBookBookmark} /></button>
          <ToastContainer></ToastContainer>
        </div>
      </div>
      <div className="content">
        <h1>{BlogName}</h1>
        <p>#beginners #programming</p>
        <button onClick={()=>readingTime(time)}>Mark as read</button>
      </div>
    </div>
  );
};

export default Blogs;