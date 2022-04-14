import React, { useState } from 'react';
import BlogList from './BlogList';

function ReadMore() {
  const [DeleteOpen, setDeleteOpen] = useState(false)
  const [RemovedID, setRemovedId] = useState(null)

  const [blogs, setBlogs] = useState([
    { title: 'My new website', author: 'mario', id: 1 },
    { title: 'Welcome party!', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', author: 'mario', id: 3 }
  ])

  const handleDelete = () => {

    const newBlogs = blogs.filter(blog => blog.id !== RemovedID);
    setBlogs(newBlogs);
  }

  return (
    <div >
      <BlogList blogs={blogs} title="All Blogs" ShowModal={(id) => { 
        setRemovedId(id);
         setDeleteOpen(true)}} />
         

      { DeleteOpen && ( 
          <div className='modal'> 
            <p>Are You Sure?</p>
              <button className='btn btn--alt' onClick={() => setDeleteOpen(false)}>cancel</button>

            <button className='btn' onClick={() => {
              handleDelete();
              setDeleteOpen(false); }}>  Confirm  </button>

          </div> )}
    </div>
  );
}

export default ReadMore;