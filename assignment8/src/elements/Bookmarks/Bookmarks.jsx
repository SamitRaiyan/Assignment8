import React from 'react';
import './Bookmarks.css'
const BookMark = (props) => {
    const blog=props.blogName
    // console.log(blog)
    let bookmark=blog.length;
    let time=props.time
    
    return (
        <div className='bookmarked'>
            <div className="calculate">
                <p>Spent time on read : {time}  min.</p>
            </div>
            <div className="topic">
                <h3>Bookmarked Blogs: {bookmark} </h3>
                {
                    blog.map(name=><div className="showing"><p>{name}</p></div>)
                }
                
            </div>
        </div>
    );
};

export default BookMark;