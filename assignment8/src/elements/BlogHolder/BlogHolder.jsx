import React, { useState } from "react";
import "./BlogHolder.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import author from "../../Assignment8.json";

const BlogHolder = () => {
  const [value, setvalue] = useState([]);
  const [retime, setretime] = useState(0);
  const handleBookMark = (post) => {
    if (value.includes(post)) {
      toast.error("You already added this Blog");
    } else {
      const newBlog = [...value, post];
      setvalue(newBlog);
    }
  };
  const readingTime = (minit) => {
    minit = retime + parseInt(minit);
    setretime(minit);
    console.log(retime);
  };

  return (
    <div className="blogHolder">
      <div className="blogs">
        {author.map((auth) => (
          <Blogs
            writer={auth}
            key={auth.id}
            handleBookMark={handleBookMark}
            retime={readingTime}
          ></Blogs>
        ))}
      </div>
      <Bookmark blogName={value} time={retime}></Bookmark>
    </div>
  );
};
import BookMark from "../Bookmarks/Bookmarks";
import Blog from "../Blog/Blog";
export default BlogHolder;
