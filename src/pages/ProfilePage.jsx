import { useContext, useState } from 'react';
import { FaEdit } from 'react-icons/fa'; // Edit icon for updating profile
import { AuthContext } from '../context/authContext';
import { updateEmail, updateProfile } from 'firebase/auth'; // To update email address
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { auth } from '../services/firebase.config';

const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    displayName: user.displayName || '',
    photoURL: user.photoURL || '',
    email: user.email || '',
    phoneNumber: user.phoneNumber || '',  // New field for phone number
  });
  const [error, setError] = useState('');
  const [imageFile, setImageFile] = useState(null); // To store selected image
  const [isUploading, setIsUploading] = useState(false); // To track image upload progress

  if (!user) {
    return <div>Loading...</div>;
  }

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  // Handle form submission to update profile
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, photoURL, email, phoneNumber } = formData;
    try {
      // If a new image is selected, upload it to Firebase Storage
      let updatedPhotoURL = photoURL;
      if (imageFile) {
        setIsUploading(true);
        const storage = getStorage();
        const storageRef = ref(storage, `profile_images/${user.uid}`);

        // Upload file
        await uploadBytes(storageRef, imageFile);

        // Get the URL of the uploaded image
        updatedPhotoURL = await getDownloadURL(storageRef);
        setIsUploading(false);
      }

      // Update Firebase Authentication profile with the new data
      await updateProfile(auth.currentUser, { displayName, photoURL: updatedPhotoURL });

      // Optionally, update email address
      if (email !== user.email) {
        await updateEmail(auth.currentUser, email);
      }

      // Here, you can save the phone number in Firestore or other DB if required
      // Example:
      // await savePhoneNumberToFirestore(phoneNumber); 

      setIsEditing(false); // Close the form
    } catch (err) {
      setError('Error updating profile. Please try again later.');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Cover Section */}
      <div
        className="relative bg-cover bg-center h-56"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original/lBoHzOgft2QfpjkVVvZCqeM4ttT.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute bottom-5 left-5 text-white">
          <h1 className="text-4xl font-bold">Welcome, {user.displayName || 'User'}</h1>
        </div>
      </div>

      {/* Profile Content */}
      <div className="max-w-4xl mx-auto py-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-6">
            {/* User Photo */}
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <img
                src={user.photoURL || 'https://via.placeholder.com/150'}
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>

            {/* User Info */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">{user.displayName || 'Your Name'}</h2>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-gray-600">{user?.phoneNumber}</p>
            </div>

            {/* Edit Profile Button */}
            <button
              className="ml-auto p-2 text-blue-600 hover:text-blue-800"
              onClick={() => setIsEditing(!isEditing)} // Toggle editing state
            >
              <FaEdit size={20} />
            </button>
          </div>

          {/* Profile Edit Form (only when editing) */}
          {isEditing && (
            <form className="mt-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700" htmlFor="displayName">
                  Display Name
                </label>
                <input
                  type="text"
                  id="displayName"
                  name="displayName"
                  value={formData.displayName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700" htmlFor="photoURL">
                  Profile Photo URL
                </label>
                <input
                  type="text"
                  id="photoURL"
                  name="photoURL"
                  value={formData.photoURL}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700" htmlFor="phoneNumber">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                />
              </div>

              {/* Image Upload */}
              <div className="mt-4">
                <label className="block text-gray-700">Change Profile Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                />
              </div>

              {/* Error message */}
              {error && <p className="text-red-500 mt-2">{error}</p>}

              {/* Show Uploading Status */}
              {isUploading && <p className="text-blue-500 mt-2">Uploading image...</p>}

              <div className="mt-4 flex space-x-4">
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
                  Save Changes
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
                  onClick={() => setIsEditing(false)} // Close the form
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          {/* Update Section (Placeholder for now)
          {!isEditing && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">Update Profile</h3>
              <p className="text-gray-600 mt-2">
                You can update your profile here.
              </p>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
