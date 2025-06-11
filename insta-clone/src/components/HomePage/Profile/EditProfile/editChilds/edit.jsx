import styles from './editchild.module.css';
import { useContext, useEffect, useState, useRef } from 'react';
import axios from 'axios';
import AuthenticationContext from '../../../../Contexts/AuthenticationContext/AuthenticationContext';

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dbexemhmr/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'sajawal_unsigned_preset';

const Editing = () => {
  const { emailContext } = useContext(AuthenticationContext);
  const mail = emailContext?.emailForOtp;
  const [user, setUser] = useState(null);
  const fileInputRef = useRef(null);
  const [bio, setBio] = useState('');
  const [gender, setGender] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false)


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/instagram/getusernames/${mail}`);
        setUser(response.data);
        setBio(response.data.bio);
        setGender(response.data.gender);
        setShowSuggestions(response.data.showSuggestions);

      } catch (error) {
        alert("Cannot get usernames");
        console.error("Error fetching user:", error);
      }
    };

    if (mail) {
      fetchUser();
    }
  }, [mail]);

  const handleFileChange = async (event) => {
    setLoading(true)
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file.");
      setLoading(false)
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    try {
      const cloudinaryRes = await axios.post(CLOUDINARY_URL, formData);
      const imageUrl = cloudinaryRes.data.secure_url;
      console.log(imageUrl);

      await axios.post('http://localhost:5000/instagram/updateProfilePic', {
        email: mail,
        profilePicture: imageUrl,
      });

      setUser((prev) => ({ ...prev, profilePic: imageUrl }));
      setLoading(false)

    } catch (error) {
      alert("Image upload failed.");
      console.error("Upload error:", error);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };


  const handleSubmit = async () => {
    try {
      setSubmitLoading(true)
      const userEditing = {
        email: mail,
        bio,
        gender,
        showSuggestions,
      };
      const response = await axios.post('http://localhost:5000/instagram/userediting', userEditing);

      if (response.data) {
        const updateData = response.data;
        setTimeout(()=>{
        setSubmitLoading(false)

        },2000);
        setBio(updateData.bio);
        setGender(updateData.gender);
        setShowSuggestions(updateData.showSuggestions);
      }
    } catch (err) {
      alert('Cannot update bio');
      console.error('Error submitting form:', err.response?.data || err.message);
    }
  };

  return (
    <div className={styles.edit}>
      <h4>Edit profile</h4>
      <div className={styles.changeprofile}>
        <div className={styles.profilePic}>
          <div className={styles.profile}>
            <img
              src={user?.profilePic || 'https://via.placeholder.com/150'}
              alt='Profile'
            />          </div>
          <div className={styles.usernames}>
            {user ? (
              <>
                <h6>{user.username}</h6>
                <p>{user.fullName}</p>
              </>
            ) : (
              <p>Loading usernames...</p>
            )}
          </div>
        </div>

        <div className={styles.changebutton}>
          {/* <button onClick={handleButtonClick}>Change Photo</button> */}
          <button
          className="btn btn-primary  d-flex justify-content-center align-items-center"
          type="button"
          onClick={() => handleButtonClick()}
          disabled={loading}
          style={{ height: '40px' }}
        >
          {loading ? (
            <span className={styles.spinner} />
          ) : (
            "Change Photo"
          )}
        </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </div>
      </div>
      <div className={styles.websiteLinks}>
        <h5 className="mt-4">Websites</h5>
        <input type="url" placeholder="Website" disabled></input>
        <p>Editing your links is only available on mobile. Visit the Instagram app and edit your profile to change the websites in your bio</p>
      </div>
      <div className={styles.bio}>
        <h5>Bio</h5>
        <textarea placeholder="Add bio" value={bio} onChange={(e) => setBio(e.target.value)} className={styles.bioInput} />
      </div>
      <div className={styles.gender}>
        <h5>Gender</h5>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="custom">Custom</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className={styles.suggestions}>
        <h5>Show Accounts Suggestions on Profile</h5>
        <div className={styles.suggestionContent}>
          <div className={styles.suggestionHeading}>
            <h6>Show accounts suggestions on profile</h6>
            <p>Choose whether people can see similar account suggestions on your profile, and whether your account can be suggested on other profiles.</p>
          </div>
          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={showSuggestions}
              onChange={() => setShowSuggestions(!showSuggestions)}
            />
            <span className={styles.slider}></span>
          </label>
        </div>
      </div>
      <div className={styles.submit}>
        <button
          className="btn btn-primary  d-flex justify-content-center align-items-center"
          type="button"
          onClick={() => handleSubmit()}
          disabled={submitLoading}
          style={{ height: '40px' }}
        >
          {submitLoading? (
            <span className={styles.spinner} />
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </div>
  );
};

export default Editing;
