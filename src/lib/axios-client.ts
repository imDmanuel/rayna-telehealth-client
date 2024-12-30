import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "sonner";

let isRedirecting = false;

const axiosApiClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/v1`,
  withCredentials: true,
});

// Add a response interceptor to handle errors
axiosApiClient.interceptors.response.use(
  (response: AxiosResponse) => response, // Return successful responses
  async (error: AxiosError) => {
    // Handle 401 Unauthorized errors
    if (error.response?.status === 401 && !isRedirecting) {
      isRedirecting = true; // set flag to prevent multiple redirects
      toast.error("Your session has expired, please log in again.");

      // Get the current URL path and query string
      const currentPath = window.location.pathname + window.location.search;

      // Encode the path for safe usage in the URL
      const encodedPath = encodeURIComponent(currentPath);

      // Redirect to the login page with the return path as a query parameter
      window.setTimeout(() => {
        window.location.href = `/login?redirect_url=${encodedPath}`;
      }, 2000);
    }

    // Return a rejected promise for other errors
    return Promise.reject(error);
  }
);

axiosApiClient.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem(
      "accessToken"
    )}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const axiosBaseClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

export { axiosApiClient, axiosBaseClient };
