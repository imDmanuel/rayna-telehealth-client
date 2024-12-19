import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  isAxiosError,
} from "axios";
import { toast } from "sonner";

interface FailedRequestQueue {
  resolve: (value?: unknown) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reject: (reason?: any) => void;
}

// Extend AxiosRequestConfig to include the _retry property
interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean; // Optional _retry flag
}

// Flag to keep track of whether a token refresh request is in progress
let isRefreshing = false;
let failedQueue: FailedRequestQueue[] = [];

const axiosApiClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/v1`,
  withCredentials: true,
});

const processQueue = (
  error: AxiosError | null,
  token: string | null = null
) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

// Add a response interceptor
axiosApiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest: CustomAxiosRequestConfig = error.config!;

    // Check if the error is 401 Unauthorized and the request wasn't retried yet
    if (error.response?.status === 401 && !originalRequest?._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(() => {
            return axiosApiClient(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // Make a request to refresh the token (server-side will handle cookies)
        const response = await axiosApiClient.post(
          "/auth/refresh-token",
          {},
          { withCredentials: true } // Send cookies
        );
        console.log(response.data);

        processQueue(null); // Successfully processed the queue
        return axiosApiClient(originalRequest); // Retry original request after refresh
      } catch (e) {
        processQueue(e as AxiosError, null);
        // If refresh token request fails, redirect to login
        if (isAxiosError(e)) {
          if (
            e.response?.status === 401 ||
            e.response?.status === 403 ||
            e.response?.status === 400
          ) {
            console.log("going to redirect");
            toast.error("Your session has expired, please re-login");
            window.location.href = "/sign-in"; // Redirect to the login page in Next.js
          }
        }
        return Promise.reject(e);
      } finally {
        isRefreshing = false;
      }
    }

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
