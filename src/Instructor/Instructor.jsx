import React, { useContext, useEffect, useState } from 'react';


const Instructor = () => {
  const [instructors, setInstructors] = useState([]);


  useEffect(() => {
    fetch('https://photosen-server-dipta88.vercel.app/classes')
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
      })
      .catch((error) => {
        console.error('Error fetching instructors:', error);
      });
  }, []);

  return (
    <div>
      <h1 className="text-5xl font-bold text-center text-yellow-500 mb-30 mt-30 pt-20">All Instructors</h1>
      <div className="instructors-container grid grid-cols-3 gap-10 max-w-screen-xl mx-auto mb-20 mt-20">
        {instructors.map((instructor) => (
          <div key={instructor._id} className="instructor-item text-center">
            <img src={instructor.instructorimage} alt={instructor.name} className="instructor-avatar w-48 h-48 mx-auto" />
            <h2 className="text-2xl text-yellow-500 mt-4">{instructor.instructor}</h2>
            <p className="text-lg">Email: {instructor.instructoremail}</p>
            <p className="text-lg">Number of Classes: {instructor.availableClasses}</p>
            
         
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructor;
