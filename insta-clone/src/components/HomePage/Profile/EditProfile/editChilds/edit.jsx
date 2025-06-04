import styles from './editchild.module.css';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AuthenticationContext from '../../../../Contexts/AuthenticationContext/AuthenticationContext';

const Editing = () => {
  const { emailContext } = useContext(AuthenticationContext);
  const mail = emailContext.emailForOtp; // 
  console.log("email......",mail)
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/instagram/getusernames/${mail}`);
        console.log("Fetched user:", response.data);

        setUser(response.data);
      } catch (error) {
        alert("Cannot get usernames");
        console.error("Error fetching user:", error);
      }
    };

    if (mail) {
      fetchUser();
    }
  }, [mail]);

  return (
    <>
      <div>Editing</div>
      {user ? (
        <>
          <div>{user.username}</div>
          <div>{user.fullName}</div>
        </>
      ) : (
        <div>Loading user...</div>
      )}
    </>
  );
};

export default Editing;
