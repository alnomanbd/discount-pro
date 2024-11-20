import NotFoundImg from '../assets/images/not-found.svg'
const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 text-center">
      <div>
        <img 
          src={NotFoundImg} 
          alt="404 Not Found" 
          className="mx-auto w-80 mb-6" 
        />
        {/* <h1 className="text-6xl font-extrabold text-red-500">404</h1> */}
        <p className="mt-4 text-xl font-medium text-gray-600">
          Oops! The page you are looking for does not exist.
        </p>
        <p className="mt-2 text-gray-500">
          It might have been moved or deleted. Try checking the URL or go back to the homepage.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
