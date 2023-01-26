import { addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { Alert, Button } from 'flowbite-react';
import React, { useRef, useState } from 'react';
import { readingTime } from 'reading-time-estimator';
import { db, storage } from '../../backend/firebase';
import { useAuth } from '../../contexts/AuthContext';

const NewBlogPage = () => {
  const { currentUser } = useAuth();
  const [errorMessage, setErrorMessage] = useState('');
  const [titleErrorMessage, setTitleErrorMessage] = useState('');
  const [bodyErrorMessage, setBodyErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [blogImage, setBlogImage] = useState('');
  const blogTitleRef = useRef();
  const blogBodyRef = useRef();
  const [blogCharacterCount, setBlogCharacterCount] = useState('');

  const handleBlogImage = (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      const fileType = file.type.split('/')[0];
      if (fileType !== 'image') {
        return setErrorMessage('Please upload an image file');
      }
      if (file.size > 1024 * 1024) {
        return setErrorMessage('Please upload an image less than 1MB in size');
      }
    }

    return setBlogImage(e.target.files[0]);
  };

  const handleBlogImageUpload = async () => {
    const fileRef = ref(
      storage,
      `blogs/${currentUser.uid}/blog-image/${blogImage.name}`
    );
    const uploadTask = await uploadBytes(fileRef, blogImage);
    const downloadURL = await getDownloadURL(uploadTask.ref);

    return downloadURL;
  };

  const calculateReadTime = (text) => {
    const readTime = readingTime(text, 10);
    return readTime;
  };

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const createBlog = async () => {
    const minsRead = calculateReadTime(blogBodyRef.current.value);

    try {
      await addDoc(collection(db, 'blogs'), {
        title: blogTitleRef.current.value,
        body: blogBodyRef.current.value,
        authId: currentUser.uid,
        image: await handleBlogImageUpload(),
        minsRead: minsRead.text,
        date: formatDate(new Date()),
        authName: currentUser.displayName,
        authImage: currentUser.photoURL,
      });
      console.log(currentUser.displayName);
      setSuccessMessage('Blog created successfully');
    } catch (error) {
      setErrorMessage('Failed to create blog');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setTitleErrorMessage('');
    setBodyErrorMessage('');
    setSuccessMessage('');
    if (blogTitleRef.current.value === '') {
      return setTitleErrorMessage('Please enter a title for your blog');
    }
    if (blogBodyRef.current.value === '') {
      return setBodyErrorMessage('Please enter a body for your blog');
    }
    if (blogImage === '') {
      return setErrorMessage('Please upload an image for your blog');
    }
    if (blogCharacterCount < 100) {
      return setErrorMessage(
        'Please enter a body for your blog more than 100 characters'
      );
    }
    await createBlog();
    return setSuccessMessage('Blog created successfully');
  };

  const handleCancel = () => {
    setErrorMessage('');
    setSuccessMessage('');
    setBlogImage('');
    blogTitleRef.current.value = '';
    blogBodyRef.current.value = '';
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-10 flex justify-center items-center gap-10 flex-col"
    >
      {errorMessage && (
        <Alert color="failure" className="mt-4">
          <span className="font-medium">{errorMessage}</span>
        </Alert>
      )}
      {successMessage && (
        <Alert color="success" className="mt-4">
          <span className="font-medium">{successMessage}</span>
        </Alert>
      )}
      <div className="w-full px-28 ">
        <img
          className=" h-64 md:h-96 w-full rounded-md object-cover object-center"
          src={
            blogImage
              ? URL.createObjectURL(blogImage)
              : 'https://flowbite.com/docs/images/examples/image-1@2x.jpg'
          }
          alt="description"
        />
      </div>
      <div>
        <input
          onChange={handleBlogImage}
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          aria-describedby="blog-image"
          id="blog-image"
          type="file"
        />
        <div
          className="mt-1 text-sm text-gray-500 dark:text-gray-300"
          id="blog-image"
        >
          please upload an image related to the blog you are publishing
        </div>
      </div>

      <div>
        <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Blog Title
        </span>
        {titleErrorMessage && (
          <Alert color="failure" className="mt-4">
            <span className="font-medium">{titleErrorMessage}</span>
          </Alert>
        )}
        <input
          type="text"
          id="blog-title"
          ref={blogTitleRef}
          className=" w-96 rounded-lg  bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500    text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="blog title"
        />
      </div>

      <div className="w-full ">
        <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Blog Body
        </span>
        {bodyErrorMessage && (
          <Alert color="failure" className="mt-4">
            <span className="font-medium">{bodyErrorMessage}</span>
          </Alert>
        )}
        <textarea
          id="blog-body"
          rows="15"
          ref={blogBodyRef}
          onChange={(e) => {
            setBlogCharacterCount(e.target.value.length);
          }}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Leave a comment..."
        />
      </div>

      <div className="save-button flex flex-wrap gap-4">
        <Button type="submit">Upload</Button>
        <Button onClick={handleCancel} color="dark">
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default NewBlogPage;
