"use client"
import React from 'react';
import { useFormik } from 'formik';
import { AiFillDelete } from "react-icons/ai";

const ReviewForm = (createdby, avatar) => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, setValues } = useFormik({
    initialValues: {
      title: '',
      category: '',
      image: '',
      rating: '',
      detail: '',
      creator: createdby, avatar,
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

  const categoryOptions = ['Category1', 'Category2', 'Category3', 'Category4']; // Add your category options here
  return (
    <div className="w-full">
      <div className="relative rounded-lg bg-slate-50 p-8 shadow-lg dark:bg-slate-800 sm:p-12 border dark:border-slate-600">
        <form onSubmit={handleSubmit}>
          <div className='mb-6'>

            <input
              className={`${errors.fullname && touched.fullname ? "border-red-400 dark:border-red-600 placeholder-red-600/50" : "dark:border-gray-600"} w-full rounded border border-stroke px-[14px] py-3 text-base bg-white dark:bg-slate-800 focus:outline-none`}
              type="text"
              id="title"
              placeholder='Title'
              name="title"
              value={values.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className='flex flex-wrap justify-between gap-3 mb-6  bg-white rounded border dark:border-gray-600  dark:bg-slate-800 border-stroke px-[14px] py-3'>
            <label htmlFor="category" className="block font-medium text-gray-600 dark:text-gray-200 mr-2">Category:</label>
            <div className='flex grow md:justify-evenly gap-3  flex-wrap'>

            {categoryOptions.map((option) => (
              <div key={option} className="flex items-center ">
                <input
                  type="checkbox"
                  id={option}
                  name="category"
                  value={option}
                  checked={values.category.includes(option)}
                  onChange={handleChange}
                  className="mr-2"
                  />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
            </div>
          </div>


          <div className='md:flex gap-4 w-full mb-6'>
              <div className=' mb-6 md:mb-0 w-full md:w-6/12'>

            <input
              className={`${errors.fullname && touched.fullname ? "border-red-400 dark:border-red-600 placeholder-red-600/50" : "dark:border-gray-600"} w-full rounded border border-stroke px-[14px] py-3 text-base bg-white dark:bg-slate-800 focus:outline-none`}
              type="file"
              id="image"
              placeholder='Image'
              name="image"
              value={values.image}
              onChange={handleChange}
              />
              </div>

            <div className="flex flex-wrap items-center justify-between w-full md:w-6/12 bg-white rounded border dark:border-gray-600  dark:bg-slate-800 border-stroke px-[14px] py-3 text-base">
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-200 mr-2"> Rating: </label>
            <div className='flex grow justify-evenly'>

            {[...Array(10).keys()].map((rating) => (
              <div key={rating} className="mr-1">
                <input
                  type="radio"
                  id={`rating-${rating}`}
                  name="rating"
                  value={rating}
                  checked={values.rating === rating.toString()}
                  onChange={handleChange}
                  className="hidden"
                  />
                <label
                  htmlFor={`rating-${rating}`}
                  className={`cursor-pointer text-xl ${values.rating >= rating.toString() ? 'text-yellow-500' : 'text-gray-300'
                }`}
                >
                  &#9733;
                </label>
              </div>
            ))}
            </div>
          </div>
          </div>
          {/* Characters */}
          <div className='mb-6'>

          {values.characters.map((character, index) => (
            <div key={index} className="mb-4 md:flex gap-4">
              <div className='md:flex mb-6 md:mb-0 md:w-1/2'>
              
              <input
                type="hidden"
                name={`characters[${index}].id`}
                placeholder="Character ID"
                value={character.id}
                readOnly/>
              <input
                type="text"
                name={`characters[${index}].name`}
                placeholder="Character Name"
                value={character.name}
                onChange={handleChange}
                required
                className="dark:border-gray-600 w-full rounded border border-stroke px-[14px] py-3 text-base bg-white dark:bg-slate-800 focus:outline-none"
                />
              </div>
              <div className='flex  md:w-1/2'>

              <input
                type="text"
                name={`characters[${index}].role`}
                placeholder="Character Role"
                value={character.role}
                onChange={handleChange}
                required
                className="dark:border-gray-600 w-full rounded border border-stroke px-[14px] py-3 text-base bg-white dark:bg-slate-800 focus:outline-none"
                />
              <button
                type="button"
                onClick={() => deleteCharacter(index)}
                className="bg-red-500 text-white  p-2 rounded ml-4 my-1 hover:bg-red-600 focus:outline-none focus:shadow-outline-red active:bg-red-800"
                >
                <AiFillDelete size={20}/>
              </button>
                </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addCharacter}
            className="text-purple-500 border border-purple-500 bg-transparent px-4 py-2 rounded hover:bg-purple-600 hover:text-white focus:outline-none focus:shadow-outline-blue"
          >
            Add Character
          </button>
          </div>


          <div className='mb-6'>

            <textarea
              className={`${errors.detail && touched.detail ? "border-red-400 dark:border-red-600 placeholder-red-600/50" : "dark:border-gray-600"} w-full resize-none rounded border border-stroke px-[14px] py-3 text-base  outline-none bg-white dark:bg-slate-800 `}
              rows="18"
              name='detail'
              value={values.detail}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Details'
            ></textarea>
            {errors.detail && touched.detail ? (
              <p className=" text-red-600 dark:text-red-500 text-sm">* {errors.detail}</p>
            ) : null}
          </div>



          

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600 focus:outline-none focus:shadow-outline-green active:bg-green-800"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;