// import React, { useContext } from 'react';
// import { useQuery } from '@tanstack/react-query'
// import { AuthContext } from './provider/AuthProvider';
// const UseCart = () => {
//     const {user} = useContext(AuthContext);


//     const { isLoading, isError, data, error } = useQuery({
//         queryKey: ['cart', user?.email],
//         queryFn: async () =>{
//             const response = await fetch(`http://localhost:5000/classes?email=${user.email}`)
//             return response.json
//         },
//       })
//     return (
//         <div>
//         </div>
//     );
// };

// export default UseCart;