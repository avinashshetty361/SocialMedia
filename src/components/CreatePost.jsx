import React from "react";
import { Form } from "react-router-dom";


const CreatePost = ({ action }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.formHeader}>Create a New Post</h1>
      <Form method="post" action={action} className={styles.createPostForm}>
        <label htmlFor="userId">User ID</label>
        <input type="text" id="userId" name="userId" required />

        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />

        <label htmlFor="body">Body</label>
        <textarea id="body" name="body" required></textarea>

        <label htmlFor="tags">Tags (comma-separated)</label>
        <input type="text" id="tags" name="tags" required />

        <label htmlFor="image">Image:</label>
        <input type="file" id="image" name="image" accept="image/*" required />

        <button type="submit">Post</button>
      </Form>
    </div>
  );
};

export default CreatePost;
