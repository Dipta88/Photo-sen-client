import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../useCart';


const Classes = () => {
  const [classes, setClasses] = useState([]);
  const { user } = useContext(AuthContext);
  const [, , refetchCart] = useCart();
  
  const navigate = useNavigate();
  const location = useLocation();

  const handleToCart = (classItem) => {
    console.log(classItem);
    if (user && user.email) {
      const cartItem = {
        classitemId: classItem._id,
        name: classItem.name,
        image: classItem.image,
        price: classItem.price,
        email: user.email,
      };

      fetch('http://localhost:5000/classItem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartItem),
      })
        .then(res => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetchCart();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Course added to cart!',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          console.error('Error adding course to cart:', error);
        });
    } else {
      Swal.fire({
        title: 'Please log in to add to cart',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Log In now!',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      });
    }
  };

  useEffect(() => {
    fetch('http://localhost:5000/classes')
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      })
      .catch((error) => {
        console.error('Error fetching classes:', error);
      });
  }, []);

  return (
    <div>
      <h1 className="text-5xl font-bold text-center text-yellow-500 mb-30 mt-30 pt-20">All Classes</h1>
      <div className="popular-classes-container grid grid-cols-5 gap-10 max-w-screen-xl mx-auto mb-20 mt-20">
        {classes.map((classItem) => (
          <div key={classItem._id} className="class-item text-center">
            <img src={classItem.image} alt={classItem.name} className="class-image w-48 h-48 mx-auto" />
            <h2 className="text-2xl text-yellow-500 mt-4">{classItem.name}</h2>
            <p className="text-lg">Number of Students: {classItem.numberOfStudents}</p>
            <p className="text-lg">Instructor: {classItem.instructor}</p>
            <p className="text-lg">Available Seats: {classItem.availableSeats}</p>
            <p className="text-lg">Price: {classItem.price}</p>
            <button onClick={() => handleToCart(classItem)} className="btn btn-warning mb-10">
              Select Course
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;