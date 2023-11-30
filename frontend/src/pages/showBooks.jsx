import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import BackButton from '../components/backButton';
import Spinner from '../components/spinner';


const ShowBooks = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:27017/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [])

  return (
    <div className="p-4">
      <BackButton />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl my-4 font-bold">Show Book</h1>
        {loading ? (
          <Spinner />
        ) : (
          <div className="border border-gray-800 rounded-xl p-4">
            <div className="my-4 flex flex-col">
              <label className="text-xl text-gray-800">Id</label>
              <span>{book._id}</span>
            </div>
            <div className="my-4 flex flex-col">
              <label className="text-xl text-gray-800">Title</label>
              <span>{book.title}</span>
            </div>
            <div className="my-4 flex flex-col">
              <label className="text-xl text-gray-800">Author</label>
              <span>{book.author}</span>
            </div>
            <div className="my-4 flex flex-col">
              <label className="text-xl text-gray-800">Publish Year</label>
              <span>{book.publishYear}</span>
            </div>
            <div className="my-4 flex flex-col">
              <label className="text-xl text-gray-800">Create Time</label>
              <span>{new Date(book.createdAt).toString()}</span>
            </div>
            <div className="my-4 flex flex-col">
              <label className="text-xl text-gray-800">Last Update Time</label>
              <span>{new Date(book.updatedAt).toString()}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


export default ShowBooks