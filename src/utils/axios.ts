// import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
// const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
// // Create instance
// const axiosInstance = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001',
//   withCredentials: true, // 👈 Important: send cookies like accessToken
// });
// console.log(baseURL);
// console.log("in aiox");
// // Add response interceptor
// axiosInstance.interceptors.response.use(
//   (res: AxiosResponse) => res,

//   async (err: AxiosError) => {
//    console.log("in error",err);
//     const originalReq = err.config as AxiosRequestConfig & { _retry?: boolean };
//     console.log("originalreq", originalReq);
//     console.log("eror status",err.response?.status);
//     if (err.response?.status === 401 && !originalReq._retry) {
//       originalReq._retry = true;

//       try {
//         console.log("in try")
//         await axiosInstance.get("/users/refresh-token"); // Backend will reset accessToken
//         return axiosInstance(originalReq); // Retry original request
//       } catch (refreshError) {
//         console.log("in error", refreshError);
//         if (typeof window !== 'undefined') {
//           window.location.href = '/auth/login'; // Redirect to login
//         }
//       }
//     }
// console.log("here", err);
//     return Promise.reject(err);
//   }
// );

// export default axiosInstance;

import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001';

// 🔹 Axios instance for regular API calls
const axiosInstance = axios.create({
  baseURL,
  withCredentials: true, // important to send cookies (accessToken + refreshToken)
});

// 🔸 Plain axios instance used ONLY to call refresh API (no interceptors)
const plainAxios = axios.create({
  baseURL,
  withCredentials: true,
});
console.log("in axios here");

// 🔄 Add response interceptor to handle 401 errors
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };
    const statusCode = error.response?.status;

    console.log("Error status code:", statusCode);

    // 🔁 Handle 401 and prevent infinite retry
    if (statusCode === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        console.log("Attempting to refresh token...");

        // Call refresh-token endpoint
        await plainAxios.get('/users/refresh-token', {
          withCredentials: true,
        });

        console.log("Token refreshed. Retrying original request...");

        // Retry the original request after refresh
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error("Refresh token failed:", refreshError);

        // 🔐 Redirect to login if refresh fails
        if (typeof window !== 'undefined') {
          window.location.href = '/auth/login';
        }
      }
    }

    // ❌ Any other error or second failure
    return Promise.reject(error);
  }
);

export default axiosInstance;
