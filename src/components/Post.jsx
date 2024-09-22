import React, { useState } from "react";
import { FaTrash } from "react-icons/fa"; // Import the trash icon

const Post = ({ post, deletePost }) => {
  const [likes, setLikes] = useState(post.reactions.likes || 0);
  const [dislikes, setDislikes] = useState(post.reactions.dislikes || 0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div className="post">
      <button className="delete-button" onClick={() => deletePost(post.id)}>
        <FaTrash />
      </button>
      {post.image && <img src={post.image} alt="Post" className="post-image" />}{" "}
      {/* Display the image */}
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <div className="post-meta">Posted by user {post.userId}</div>
      <div className="post-details">
        <p>Likes: {likes}</p>
        <p>Dislikes: {dislikes}</p>
        {post.tags && post.tags.length > 0 && (
          <p>
            Tags: <b>{post.tags.join(" ")}</b>
          </p>
        )}
      </div>
      <div className="reaction-buttons">
        <button className="like-button" onClick={handleLike}>
          👍 Like
        </button>
        <button className="dislike-button" onClick={handleDislike}>
          👎 Dislike
        </button>
      </div>
    </div>
  );
};

export default Post;
