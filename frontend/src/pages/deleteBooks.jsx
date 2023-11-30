import React, {useState} from 'react'
import BackButton from '../components/backButton'
import Spinner from '../components/spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'


const DeleteBooks = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:27017/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert('Error occured');
        console.log(error);
      });
  }

  return (
    <div className="p-4">
      <BackButton />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl my-4 font-bold">Delete Book</h1>
        {loading && <Spinner />}
        <div className="flex flex-col items-center border border-gray-300 rounded-xl p-8 mx-auto w-full md:w-[600px]">
          <h3 className="text-2xl mb-4">Confirm Delete</h3>
          <button
            className="flex items-center bg-red-400 text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-red-700 focus:outline-none focus:shadow-outline-blue"
            onClick={handleDeleteBook}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBooks