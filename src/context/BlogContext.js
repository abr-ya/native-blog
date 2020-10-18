import React, { createContext, useState } from 'react';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([
    { title: 'Blog Post #1' }, 
    { title: 'Blog Post #2' },
    { title: 'Blog Post #3' },
  ]);

  const addBlogPost = () => {
    setBlogPosts([
      ...blogPosts,
      { title: `Blog Post #${blogPosts.length + 1}`, }
    ]);
  };

  return (
    <BlogContext.Provider value={{blogPosts, addBlogPost}}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
