import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useSurveyor = () => {
  const {user} = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const {data: isSurveyor} = useQuery({
    queryKey: [user?.email, 'isSurveyor'],
    queryFn: async() => {
        const res = await axiosSecure.get(`/users/surveyor/${user?.email}`);
        console.log(res.data);
        
        return res.data?.surveyor;
    }
  })
  return [isSurveyor]
};

export default useSurveyor;