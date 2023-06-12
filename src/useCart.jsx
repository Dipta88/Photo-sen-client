import React, { useContext } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { AuthContext } from './provider/AuthProvider';

const useCart = () => {
  const { user } = useContext(AuthContext);
  const queryClient = useQueryClient();

  const { isLoading, data: classItem = [] } = useQuery({
    queryKey: ['classItem', user?.email],
    queryFn: async () => {
      const response = await fetch(`http://localhost:5000/classes?email=${user.email}`);
      return response.json();
    },
  });

  const refetchClassItem = () => {
    queryClient.refetchQueries('classItem');
  };

  return [classItem, isLoading, refetchClassItem];
};

export default useCart;

