import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchUsers = async () => {
  const response = await axios.get('api/users', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });
};
