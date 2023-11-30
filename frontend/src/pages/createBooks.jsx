import React, {useState} from 'react'
import BackButton from '../components/backButton'
import Spinner from '../components/spinner'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post('http://localhost:27017/books', data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert('Error occured');
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl my-4 font-bold">Create Book</h1>
        {loading && <div className="spinner"></div>}
        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="mb-6">
            <label className="block text-xl text-gray-800">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input-field-outline w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="mb-6">
            <label className="block text-xl text-gray-800">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="input-field-outline w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="mb-6">
            <label className="block text-xl text-gray-800">Publish Year</label>
            <input
              type="number"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className="input-field-outline w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <button
            className="flex items-center bg-gray-500 text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-gray-700 focus:outline-none focus:shadow-outline-blue"
            onClick={handleSaveBook}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBooks