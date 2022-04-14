import React, { useState } from 'react';
import BlogList from './BlogList';
import DeleteModal from './DeleteModal'
function ReadMore() {
  const [RemovedID, setRemovedId] = useState(null)

  const [blogs, setBlogs] = useState([
    { title: 'My new website', author: 'mario', id: 1 },
    { title: 'Welcome party!', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', author: 'mario', id: 3 }
  ])

  const handleDelete = () => {

    const newBlogs = blogs.filter(blog => blog.id !== RemovedID);
    setBlogs(newBlogs);
    setRemovedId(null)
  }

  const handleShowModal = (id) => {
    setRemovedId(id);
  }

  return (
    <div >
      <BlogList blogs={blogs} title="All Blogs" ShowModal={handleShowModal} />

      {
        RemovedID && 
        <DeleteModal
          onConfirm={() => {
            handleDelete();
          }}
          onCancle={() => setRemovedId(null)} />

      }
    
    </div>
  );
}

export default ReadMore;