import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/' }) => {
  return (
    <div className="flex items-center">
      <Link
        to={destination}
        className="flex items-center bg-gray-500 text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-gray-700 focus:outline-none focus:shadow-outline-blue"
      >
        <BsArrowLeft className="text-2xl mr-2" />
        Back
      </Link>
    </div>
  );
};

export default BackButton;
