import axios from 'axios';

const BASE_URL = 'http://192.168.56.1:3000/api'; // your local IP + backend port

// Example: Fetch all jobs
export const fetchJobs = async () => {
  const response = await axios.get(`${BASE_URL}/jobs`);
  return response.data;
};

// Example: Login (if not done already)
export const loginUser = async (email: string, password: string) => {
  const response = await axios.post(`${BASE_URL}/auth/login`, {
    email,
    password
  });
  return response.data;
};
