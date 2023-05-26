import React, { useState } from 'react';

const BlogForm = () => {
  const [blogName, setBlogName] = useState('');
  const [description, setDescription] = useState('');
  const [authorName, setAuthorName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API or update state.
  };

  return (
    <div>
      <h1>Add Blog</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="blogName">Blog Name:</label>
        <input
          type="text"
          id="blogName"
          value={blogName}
          onChange={(e) => setBlogName(e.target.value)}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <label htmlFor="authorName">Author Name:</label>
        <input
          type="text"
          id="authorName"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BlogForm;
