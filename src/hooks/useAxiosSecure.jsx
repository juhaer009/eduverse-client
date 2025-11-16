import axios from "axios";

const instance = axios.create({
  baseURL: "https://eduverse-server-five.vercel.app",
});

const useAxiosSecure = () => {
  return instance;
};

export default useAxiosSecure;
