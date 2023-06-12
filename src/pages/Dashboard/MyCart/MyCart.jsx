import React from 'react';
import useCart from '../../../useCart';

const MyCart = () => {
    const [classItem, refetchClassItem] = useCart();
  
    const total = classItem.reduce((sum, item) => item.price + sum, 0);
  
    const handleDelete = (classitemId) => {
      fetch(`https://photosen-server-dipta88.vercel.app/classItem/${classitemId}`, {
        method: 'DELETE',
      })
        .then(() => {
          refetchClassItem();
      
        })
        .catch((error) => {
          console.error('Error deleting item:', error);
        
        });
    };
  
    return (
      <div>
        <div className='uppercase justify-evenly h-10 items-center mb-10'>
          <h3 className="text-3xl">Total items: {classItem.length}</h3>
          <h3 className="text-3xl">Total amount: {total}</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* table head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Course Name</th>
                <th>Course Fee</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {classItem.map((item, index) => (
                <tr key={item.classitemId}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} alt={item.name} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.name}</div>
                        <div className="text-sm opacity-50">{item.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>{item.price}</td>
                  <td>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-xs"
                      onClick={() => handleDelete(item.classitemId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  

  export default MyCart;
  