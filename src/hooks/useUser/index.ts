import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useUserProps } from './types';

const fetchUsers = async (userId: string) => {
  const requestURL = `/api/users/${userId}`;
  try {
    const response = await axios.get(requestURL, {
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

export const useUser: useUserProps = (userId) => {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => fetchUsers(userId),
  });
};
