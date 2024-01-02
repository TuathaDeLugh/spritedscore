"use client"
import React from 'react';
import { useFormik } from 'formik';
import { AiFillDelete, AiOutlineUser } from "react-icons/ai";
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import {ref,deleteObject,uploadBytes,getDownloadURL} from "firebase/storage";
import { storage } from '@/util/firebase';
import { EditReviewSchema } from '@/yupschema';
import Image from 'next/image';
import RichTextEditor from '../RichTextArea';

function EditReviewForm ({review}) {
  const router = useRouter();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, setValues,setFieldValue} = useFormik({
    initialValues: {
      title: review.title,
      category: review.category,
      rating: (parseInt(review.rating)-1),
      trailer: review.trailer,
      episodes:review.episodes,
      detail: review.detail,
      creator: review.creator,
      characters: review.characters,
    },
    validationSchema: EditReviewSchema,
    onSubmit: (async (values, action) => {
        const putapi = async () => {
            router.back();
        if(values.image == null){
            const projectdata = {
            title: values.title,
            category: values.category,
            rating: (parseInt(values.rating)+1),
            trailer: values.trailer,
            episodes:values.episodes,
            detail: values.detail,
            creator: values.creator,
            characters: values.characters,
               
              };
              await fetch(`/api/review/${review._id}`, {
                method: "PUT",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify(projectdata),
              });
        }
    else{
        const imagedel = ref(storage, `images/${review.image.name}`);
        await deleteObject(imagedel);
        const imageRef = ref(storage, `images/${values.image.name}`);
        const snapshot = await uploadBytes(imageRef, values.image);
        const downloadURL = await getDownloadURL(snapshot.ref);
        const projectdata = {
          title: values.title,
      category: values.category,
      image: {
        name:values.image.name,
        link:downloadURL
      },
      rating: (parseInt(values.rating)+1),
      trailer: values.trailer,
      episodes:values.episodes,
      detail: values.detail,
      creator: values.creator,
      characters: values.characters,
         
        };
        await fetch(`/api/review/${review._id}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(projectdata),
        });
    }
        router.refresh();
      }

      toast.promise(putapi(), {
        pending: "Review adding to database",
        success: "Review Added Successfully",
        error: "Failed To Add"
      });

      action.resetForm();
    })
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

  
  const categoryOptions =
  ['Action', 'Advanture', 'Comedy', 'Drama', 'Ecchi', 'Fantasy','Harem', 'Horror', 'Isekai', 'Mystery', 'Romance', 'Sci-fi', 'Sport', 'slice_of_life', 'shonan', 'Seinen', 'Suspense', 'super_natural'];
  // Add your category options here
  return (
    <div className="w-full">
      <div className="relative rounded-lg bg-slate-50 p-8 shadow-lg dark:bg-slate-800 sm:p-12 border dark:border-slate-600">
        <form onSubmit={handleSubmit}>
          <div className='mb-6'>

            <input
              className={`${errors.title && touched.title ? "border-red-400 dark:border-red-600 placeholder-red-600/50" : "dark:border-gray-600"} w-full rounded border border-stroke px-[14px] py-3 text-base bg-white dark:bg-slate-800 focus:outline-none`}
              type="text"
              id="title"
              placeholder='Title'
              name="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.title && touched.title ? (
              <p className=" text-red-600 dark:text-red-500 text-sm">* {errors.title}</p>
            ) : null}
          </div>
          <div className='mb-6 '>

            <div className={`${errors.category && touched.category ? "border-red-400 dark:border-red-600 " : " dark:border-gray-600 "}flex flex-wrap justify-between gap-3  bg-white rounded border  dark:bg-slate-800 border-stroke px-[14px] py-3`}>
              <label htmlFor="category" className={`${errors.category && touched.category ? "text-red-400 dark:text-red-600 " : " text-gray-600 dark:text-gray-200 "} block font-medium mr-2`}>Category:</label>
              <div className='flex grow md:justify-start flex-wrap md:w-[80%]'>

                {categoryOptions.map((option) => (
                  <div key={option} className="flex items-center w-1/2 md:w-[30%] lg:w-[14%] mb-2">
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
            {errors.category && touched.category ? (
              <p className=" text-red-600 dark:text-red-500 text-sm">* {errors.category}</p>
            ) : null}
          </div>


          <div className='md:flex gap-4 w-full mb-6'>
            <div className=' mb-6 md:mb-0 w-full md:w-6/12'>

              <input
                className={`${errors.image && touched.image ? "border-red-400 dark:border-red-600 placeholder-red-600/50" : "dark:border-gray-600"} w-full rounded border border-stroke px-[14px] py-3 text-base bg-white dark:bg-slate-800 focus:outline-none`}
                type="file"
                accept="image/png, .jpg, jpeg, .svg"
                id="image"
                placeholder='Image'
                name="image"
                onChange={(e) => {
                  setFieldValue('image', e.currentTarget.files[0])
                }}
              />
              {errors.image && touched.image ? (
                <p className=" text-red-600 dark:text-red-500 text-sm">* {errors.image}</p>
              ) : null}
            </div>
            <div className='w-full md:w-6/12'>

              <div className={` ${errors.rating && touched.rating ? "border-red-400 dark:border-red-600 " : " dark:border-gray-600 "} flex flex-wrap items-center justify-between w-full  bg-white rounded border dark:bg-slate-800 border-stroke px-[14px] py-3 text-base`}>
                <label className={`${errors.rating && touched.rating ? "text-red-400 dark:text-red-600 " : " text-gray-600 dark:text-gray-200 "}block text-sm font-medium text-gray-600 dark:text-gray-200 mr-2`}> Rating: </label>
                <div className='flex grow justify-evenly'>

                  {[...Array(10).keys()].map((rating) => (
                    <div key={rating} className="mr-1">
                      <input
                        type="radio"
                        id={`rating-${rating}`}
                        name="rating"
                        value={rating}
                        checked={values.rating === (rating).toString()}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <label
                        htmlFor={`rating-${rating}`}
                        className={`cursor-pointer text-xl ${values.rating >= (rating).toString() ? 'text-yellow-500' : 'text-gray-300'
                          }`}
                      >
                        &#9733;
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              {errors.rating && touched.rating ? (
                <p className=" text-red-600 dark:text-red-500 text-sm">* {errors.rating}</p>
              ) : null}
            </div>

          </div>
          <div className='md:flex gap-4 w-full mb-6'>
            <div className=' mb-6 md:mb-0 w-full md:w-6/12'>

            <input
              className={`${errors.trailer && touched.trailer ? "border-red-400 dark:border-red-600 placeholder-red-600/50" : "dark:border-gray-600"} w-full rounded border border-stroke px-[14px] py-3 text-base bg-white dark:bg-slate-800 focus:outline-none`}
              type="text"
              id="trailer"
              placeholder='Trailer Link'
              name="trailer"
              value={values.trailer}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.trailer && touched.trailer ? (
              <p className=" text-red-600 dark:text-red-500 text-sm">* {errors.trailer}</p>
            ) : null}
          </div>
          <div className=' mb-6 md:mb-0 w-full md:w-6/12'>

            <input
              className={`${errors.episodes && touched.episodes ? "border-red-400 dark:border-red-600 placeholder-red-600/50" : "dark:border-gray-600"} w-full rounded border border-stroke px-[14px] py-3 text-base bg-white dark:bg-slate-800 focus:outline-none`}
              type="text"
              id="episodes"
              placeholder='No. of Episodes'
              name="episodes"
              value={values.episodes}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.episodes && touched.episodes ? (
              <p className=" text-red-600 dark:text-red-500 text-sm">* {errors.episodes}</p>
            ) : null}
          </div>
          </div>
          {/* Characters */}
          <div className='mb-6'>

            {values.characters.map((character, index) => (
              <div key={index} className="mb-4 md:flex gap-4 p-1 border border-slate-200 dark:border-slate-700 rounded">
              <div className='md:flex mb-2 md:mb-0 md:w-1/2'>

                  <input
                    type="hidden"
                    name={`characters[${index}].id`}
                    placeholder="Character ID"
                    value={character.id}
                    readOnly />
                  <div className='w-full'>
                    <input
                      type="text"
                      name={`characters[${index}].name`}
                      placeholder="Character Name"
                      value={character.name}
                      onChange={handleChange}
                      className="dark:border-gray-600 w-full rounded border border-stroke px-[14px] py-3 text-base bg-white dark:bg-slate-800 focus:outline-none"
                    />
                  </div>
                </div>
                <div className='flex gap-2  md:w-1/2'>

                  <input
                    type="text"
                    name={`characters[${index}].role`}
                    placeholder="Character Role"
                    value={character.role}
                    onChange={handleChange}
                    className="dark:border-gray-600 w-full rounded border border-stroke px-[14px] py-3 text-base bg-white dark:bg-slate-800 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => deleteCharacter(index)}
                    className="bg-red-500 text-white  p-2 rounded my-1 hover:bg-red-600 focus:outline-none focus:shadow-outline-red active:bg-red-800"
                  >
                    <AiFillDelete size={20} />
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

          <RichTextEditor
              className={`${errors.detail && touched.detail ? "border-red-400 dark:border-red-600 placeholder-red-600/50" : "dark:border-gray-600"} w-full resize-none rounded border border-stroke px-[14px] py-3 text-base  outline-none bg-white dark:bg-slate-800 `}
              value={values.detail}
            onChange={(value) => setFieldValue('detail', value)}
          />
            {errors.detail && touched.detail ? (
              <p className=" text-red-600 dark:text-red-500 text-sm">* {errors.detail}</p>
            ) : null}
          </div>


          <span className='flex items-center text-base font-semibold  text-purple-700 dark:text-purple-400 '>
          Review Posted by :{' '}
          {review.creator.avatar ? (
            <Image width={50} height={50}
              src={review.creator.avatar}
              alt={review.creator.createdby}
              className='ml-3 mr-1 w-7 h-7 rounded-full'
            />
          ) : (
            <AiOutlineUser
              size={20}
              className='ml-3 mr-1 w-7 h-7 rounded-full'
            />
          )}{' '}
          {review.creator.createdby}
        </span>




          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600 focus:outline-none focus:shadow-outline-green active:bg-green-800"
          >
            Update Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditReviewForm;