import React, { createContext, useState, useEffect } from "react";

export const PostList = createContext();

const PostListProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("https://dummyjson.com/posts");
      const data = await response.json();

      // Update posts to include images
      const updatedPosts = data.posts.map((post) => ({
        ...post,
        image: `https://picsum.photos/seed/${post.id}/400/200`, // Generate a random image based on post ID
      }));

      setPosts(updatedPosts);
    };

    fetchPosts();
  }, []);

  const addPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  const deletePost = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  return (
    <PostList.Provider value={{ posts, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
