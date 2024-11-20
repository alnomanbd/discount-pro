// src/components/ProfilePage.js
import { FaEdit } from 'react-icons/fa'; // Edit icon for updating profile
const ProfilePage = () => {
    const currentUser = {
        displayName: "Al Noman",
        photoURL: 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745',
        email: 'toalnoman@gmail.com'
    }
  if (!currentUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Cover Section */}
      <div
        className="relative bg-cover bg-center h-56"
        style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/lBoHzOgft2QfpjkVVvZCqeM4ttT.jpg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute bottom-5 left-5 text-white">
          <h1 className="text-4xl font-bold">Welcome, {currentUser.displayName || 'User'}</h1>
        </div>
      </div>

      {/* Profile Content */}
      <div className="max-w-4xl mx-auto py-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-6">
            {/* User Photo */}
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <img
                src={currentUser.photoURL || '/path/to/default-avatar.jpg'}
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>

            {/* User Info */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">{currentUser.displayName || 'Your Name'}</h2>
              <p className="text-gray-600">{currentUser.email}</p>
            </div>

            {/* Edit Profile Button */}
            <button className="ml-auto p-2 text-blue-600 hover:text-blue-800">
              <FaEdit size={20} />
            </button>
          </div>

          {/* Update Section (Placeholder for now) */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800">Update Profile</h3>
            <p className="text-gray-600 mt-2">
              You can update your profile here.
            </p>
            {/* You can add form elements here for updating profile */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
