import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useReport = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
   const {refetch, data: reports = []} = useQuery({
     queryKey: ["reports", user?.email],
     queryFn: async () =>{
        const res = await axiosSecure.get(`/reports?email=${user?.email}`)
        return res.data;
     }
   })
   return [reports, refetch]
};

export default useReport;