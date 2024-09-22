import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostList } from "../store/post-list-store";

const CreatePostWithContext = () => {
  const { addPost } = useContext(PostList);
  const navigate = useNavigate();
  const [image, setImage] = useState(null); // State for the uploaded image

  const handlePostAction = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target);
    const newPost = {
      userId: formData.get("userId"),
      title: formData.get("title"),
      body: formData.get("body"),
      image: image, // Include the image in the post object
      reactions: {
        likes: 0,
        dislikes: 0,
      },
      tags: formData.get("tags")
        ? formData
            .get("tags")
            .split(",")
            .map((tag) => tag.trim())
        : [],
      id: Date.now(), // Simulate unique ID
    };

    addPost(newPost); // Add the new post to the context
    navigate("/"); // Redirect to the home page after submission
  };

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0])); // Preview the image
  };

  return (
    <form onSubmit={handlePostAction}>
      <div>
        <label>User ID:</label>
        <input type="text" name="userId" required />
      </div>
      <div>
        <label>Title:</label>
        <input type="text" name="title" required />
      </div>
      <div>
        <label>Body:</label>
        <textarea name="body" required />
      </div>
      <div>
        <label>Tags (comma-separated):</label>
        <input type="text" name="tags" />
      </div>
      <div>
        <label>Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
      </div>
      {image && (
        <img
          src={image}
          alt="Preview"
          style={{ width: "100%", marginTop: "10px" }}
        />
      )}{" "}
      {/* Preview image */}
      <button type="submit">Post</button>
    </form>
  );
};

export default CreatePostWithContext;
