import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchUsers = async () => {
  try {
    const response = await axios.get('/api/users', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching sensors data:', error);
    throw error;
  }
};

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });
};
