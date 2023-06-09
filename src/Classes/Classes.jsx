import React, { useEffect, useState } from 'react';

const Classes = () => {
  const [Classes, setClasses] = useState([]);

  useEffect(() => {
    fetch('classes.json')
      .then(res => res.json())
      .then(data => {
        setClasses(data);
      })
      .catch(error => {
        console.error('Error fetching classes:', error);
      });
  }, []);

  return (
    <div>
      <h1 className="text-5xl font-bold text-center text-yellow-500 mb-30 mt-30 pt-20">All Classes</h1>
      <div className="popular-classes-container grid grid-cols-5 gap-10  max-w-screen-xl mx-auto mb-20 mt-20 ">
        {Classes.map(classItem => (
          <div key={classItem.name} className="class-item text-center">
            <img src={classItem.image} alt={classItem.name} className="class-image w-48 h-48 mx-auto" />
            <h2 className="text-2xl text-yellow-500 mt-4">{classItem.name}</h2>
            <p className="text-lg">Number of Students: {classItem.numberOfStudents}</p>
            <p className="text-lg">Instructor: {classItem.instructor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;