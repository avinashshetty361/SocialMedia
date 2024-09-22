import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import LoadingSpinner from "./LoadingSpinner";
import { PostList } from "../store/post-list-store";

export const postLoader = async () => {
  const response = await fetch("https://dummyjson.com/posts");
  const data = await response.json();
  return data.posts;
};

const PostListComponent = () => {
  const { posts, deletePost } = useContext(PostList);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (posts) setIsLoading(false);
  }, [posts]);

  return (
    <div className="post-list">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        // Reverse the posts array to display latest first
        posts
          .slice()
          .reverse()
          .map((post) => (
            <Post key={post.id} post={post} deletePost={deletePost} />
          ))
      )}
    </div>
  );
};

export default PostListComponent;
