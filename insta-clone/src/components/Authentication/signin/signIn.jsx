import styles from './signIn.module.css'
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { Link } from 'react-router-dom';

// import { useUser } from '../Context/UserContext';

const SignInForm = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();
    // const { setUser } = useUser();

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/instagram/login', formData);
            const { token } = res.data;
            localStorage.setItem('token', token);

            const decoded = jwtDecode(token);
            const { firstName, lastName, email, id } = decoded;
            // setUser({ firstName, lastName, email, id });
            navigate('/landing');
        } catch (err) {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="container mt-5" style={{ maxWidth: '400px' }}>
            <div className={`p-4 ${styles.signUpBox}`}>
                <h1>Instagram</h1>
                <form onSubmit={handleSubmit}>
                    {['Phone number,Email , username', 'password'].map((field, index) => (
                        <div className="form-floating mb-3" key={index}>
                            <input
                                type={field === 'password' ? 'password' : 'text'}
                                className="form-control"
                                name={field}
                                placeholder={field}
                                value={formData[field]}
                                onChange={handleChange}
                                required
                            />
                            <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                        </div>
                    ))}
                    <button className="btn btn-primary w-100" type="submit">
                        Login
                    </button>
                </form>
                <div className={styles.login}>
                    <p>Have an account? <br/><Link to ="/signUp">Sign Up</Link></p>
                </div>
            </div>
            
        </div>
    );
};

export default SignInForm;
