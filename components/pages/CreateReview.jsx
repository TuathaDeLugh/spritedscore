"use client"
import React from 'react';
import { useFormik } from 'formik';

const ReviewForm = (createdby,avatar) => {
  const  { values, errors, touched, handleBlur, handleChange, handleSubmit,setValues }  = useFormik({
    initialValues: {
      title: '',
      category: '',
      image: '',
      rating: '',
      detail: '',
      creator:createdby,avatar,
      characters: [],
      comments: [],
    },
    onSubmit: (values) => {
      // Log the form values or send them to your server
      console.log(values);
    },
  });

  const addCharacter = () => {
    setValues((prevValues) => ({
      ...prevValues,
      characters: [
        ...prevValues.characters,
        {
          id: Math.floor(Math.random() * 1000000), // Generate a random number as an ID
          name: '',
          role: '',
        },
      ],
    }));
  };

  const deleteCharacter = (index) => {
    setValues((prevValues) => ({
      ...prevValues,
      characters: prevValues.characters.filter((_, i) => i !== index),
    }));
  };

  const addComment = () => {
    setValues((prevValues) => ({
      ...prevValues,
      comments: [
        ...prevValues.comments,
        {
          id: Math.floor(Math.random() * 1000000), // Generate a random number as an ID
          useravatar: '',
          username: '',
          comment: '',
        },
      ],
    }));
  };

  const deleteComment = (index) => {
    setValues((prevValues) => ({
      ...prevValues,
      comments: prevValues.comments.filter((_, i) => i !== index),
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded">
      <label htmlFor="title" className="block text-sm font-medium text-gray-600 mb-2">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={values.title}
        onChange={handleChange}
        required
        className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />

      <label htmlFor="category" className="block text-sm font-medium text-gray-600 mb-2">Category:</label>
      <input
        type="text"
        id="category"
        name="category"
        value={values.category}
        onChange={handleChange}
        required
        className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />

      <label htmlFor="image" className="block text-sm font-medium text-gray-600 mb-2">Image URL:</label>
      <input
        type="text"
        id="image"
        name="image"
        value={values.image}
        onChange={handleChange}
        required
        className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />

      <label htmlFor="rating" className="block text-sm font-medium text-gray-600 mb-2">Rating:</label>
      <input
        type="text"
        id="rating"
        name="rating"
        value={values.rating}
        onChange={handleChange}
        required
        className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />

      <label htmlFor="detail" className="block text-sm font-medium text-gray-600 mb-2">Review:</label>
      <textarea
        id="detail"
        name="detail"
        rows="4"
        value={values.detail}
        onChange={handleChange}
        required
        className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      ></textarea>

      

      {/* Characters */}
      <label htmlFor="characters" className="block text-sm font-medium text-gray-600 mb-2">Characters:</label>
      {values.characters.map((character, index) => (
        <div key={index} className="mb-4">
          <input
            type="hidden"
            name={`characters[${index}].id`}
            placeholder="Character ID"
            value={character.id}
            readOnly
            className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name={`characters[${index}].name`}
            placeholder="Character Name"
            value={character.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name={`characters[${index}].role`}
            placeholder="Character Role"
            value={character.role}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <button
            type="button"
            onClick={() => deleteCharacter(index)}
            className="bg-red-500 text-white px-4 py-2 rounded ml-2 hover:bg-red-600 focus:outline-none focus:shadow-outline-red active:bg-red-800"
          >
            Delete Character
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addCharacter}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Add Character
      </button>
      {/* Comments */}
      <label htmlFor="comments" className="block text-sm font-medium text-gray-600 mb-2">Comments:</label>
      {values.comments.map((comment, index) => (
        <div key={index} className="mb-4">
          <input
            type="hidden"
            name={`comments[${index}].id`}
            placeholder="Comment ID"
            value={comment.id}
            readOnly
            className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name={`comments[${index}].useravatar`}
            placeholder="User Avatar"
            value={comment.useravatar}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name={`comments[${index}].username`}
            placeholder="Username"
            value={comment.username}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name={`comments[${index}].comment`}
            placeholder="Comment Text"
            value={comment.comment}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <button
            type="button"
            onClick={() => deleteComment(index)}
            className="bg-red-500 text-white px-4 py-2 rounded ml-2 hover:bg-red-600 focus:outline-none focus:shadow-outline-red active:bg-red-800"
          >
            Delete Comment
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addComment}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Add Comment
      </button>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600 focus:outline-none focus:shadow-outline-green active:bg-green-800"
      >
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;