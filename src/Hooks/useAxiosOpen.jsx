import axios from 'axios';


const useAxiosOpen = () => {
    const axiosOpen = axios.create({
        baseURL: 'http://localhost:5000'
    })
    return axiosOpen;
};

export default useAxiosOpen;