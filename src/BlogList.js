import React from 'react';
function BlogList({ blogs, title, ShowModal }) {


    return (
        <div className="blog-list">
            <h2>{title}</h2>

            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id} >
                    <h2>{title}</h2>
                    <h1>{blog.id}</h1>
                    <p>Written by {blog.author}</p>
                    <div>
                        <button className='btn' onClick={() => ShowModal(blog.id)}> Delete </button>
                    </div>
                </div>
            ))}
        </div>
    );
}


export default BlogList;