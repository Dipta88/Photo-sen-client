import React, { useEffect, useState } from 'react';

const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState([]);

  useEffect(() => {
    fetch('https://photosen-server-dipta88.vercel.app/classes')
      .then(res => res.json())
      .then(data => {
        const sortedClasses = data.sort((a, b) => b.numberOfStudents - a.numberOfStudents);
        const topClasses = sortedClasses.slice(0, 6);
        setPopularClasses(topClasses);
      })
      .catch(error => {
        console.error('Error fetching classes:', error);
      });
  }, []);

  return (
    <div>
      <h1 className="text-5xl font-bold text-center text-yellow-500">Popular Classes</h1>
      <div className="popular-classes-container grid grid-cols-3 gap-4 max-w-screen-xl mx-auto mt-20 ">
        {popularClasses.map(classItem => (
          <div key={classItem.name} className="class-item text-center">
            <img src={classItem.image} alt={classItem.name} className="class-image w-48 h-48 mx-auto" />
            <h2 className="text-2xl text-yellow-500 mt-4">{classItem.name}</h2>
            <p className="text-lg">Number of Students: {classItem.numberOfStudents}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
