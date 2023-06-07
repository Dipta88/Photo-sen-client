import React from 'react';
import startb from '../../../assets/images/startb.jpg'
const Start = () => {
    return (
        <div>

        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={startb} className="max-w-xl rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Join Us!</h1>
            <p className="py-6 text-xl">Here we question what photography actually is. We study the science of this craft by referring to photography from the past and the camera obscura.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Start;