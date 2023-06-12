import React, { useEffect, useState } from 'react';

const PopularInstructors = () => {
  const [popularInstructors, setPopularInstructors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/classes')
      .then(res => res.json())
      .then(data => {
        const sortedInstructors = data.sort((a, b) => b.numberOfStudents - a.numberOfStudents);
        const topInstructors = sortedInstructors.slice(0, 6);
        setPopularInstructors(topInstructors);
      })
      .catch(error => {
        console.error('Error fetching instructors:', error);
      });
  }, []);

  return (
    <div>
      <h1 className="text-5xl font-bold text-center text-yellow-500 mt-40">Popular Instructors</h1>
      <div className="popular-instructors-container grid grid-cols-3 gap-4 max-w-screen-xl mx-auto mt-10">
        {popularInstructors.map(instructor => (
          <div key={instructor.instructor} className="instructor-item text-center mb-40 mt-10">
            <img src={instructor.instructorimage} alt={instructor.name} className="instructor-image w-48 h-48 mx-auto" />
            <h2 className="text-4xl text-yellow-500 mt-4">{instructor.instructor}</h2>
            <h2 className="text-xl text-yellow-500 mt-4">{instructor.name}</h2>
            <p className="text-lg">Number of Students: {instructor.numberOfStudents}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;

