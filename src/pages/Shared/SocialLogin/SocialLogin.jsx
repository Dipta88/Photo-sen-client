import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

const  handleGoogleSignIn = () => {
    googleSignIn()
    .then(result => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(from, {replace: true });
    })
}
    return (
        <div>
        <div className='divider'></div>
        <div className='w-full text-center my-4'>
        <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
  <div><FaGoogle></FaGoogle></div>
</button>
</div>
        </div>
    );
};

export default SocialLogin;