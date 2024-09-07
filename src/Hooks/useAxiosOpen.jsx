import axios from 'axios';


const useAxiosOpen = () => {
    const axiosOpen = axios.create({
        baseURL: 'https://b9a12-server-side-three.vercel.app'
    })
    return axiosOpen;
};

export default useAxiosOpen;