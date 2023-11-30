import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/spinner';
import { Link } from 'react-router-dom';
import {BsInfoCircle} from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';



const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:27017/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800">My Book Wishlist</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-4xl text-gray-500 hover:text-gray-700 transition duration-300" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className="w-full table-auto bg-white border-separate border border-gray-300 rounded-md shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left">No</th>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left hidden md:table-cell">Author</th>
              <th className="py-3 px-4 text-left hidden md:table-cell">Publish Year</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id} className="hover:bg-gray-50 transition duration-300">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{book.title}</td>
                <td className="py-2 px-4 hidden md:table-cell">{book.author}</td>
                <td className="py-2 px-4 hidden md:table-cell">{book.publishYear}</td>
                <td className="py-2 px-4 text-center">
                  <div className="flex justify-center items-center gap-x-4">
                    <Link
                      to={`/books/details/${book._id}`}
                      className="text-green-600 hover:text-green-800 transition duration-300"
                    >
                      <BsInfoCircle className="text-2xl" />
                    </Link>
                    <Link
                      to={`/books/delete/${book._id}`}
                      className="text-red-600 hover:text-red-800 transition duration-300"
                    >
                      <MdOutlineDelete className="text-2xl" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};


export default Home;