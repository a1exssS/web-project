import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";

interface CastomInternalAxiosRequestConfig extends InternalAxiosRequestConfig {
   _retry: boolean;
}

export const $api = axios.create({
   baseURL: __API__,
   withCredentials: true,
});

$api.interceptors.response.use(
   (response: AxiosResponse) => response,
   async (error: AxiosError) => {
      const originalRequest = error.config as CastomInternalAxiosRequestConfig;

      if (error.response?.status === 401 && originalRequest && !originalRequest._retry) {
         originalRequest._retry = true;

         try {
            await axios.post(`${__API__}v1/auth/refresh`, {}, {});

         } catch (refreshError) {
            console.error("Рефреш не удался:", refreshError);
         }
      }

      return Promise.reject(error);
   }
);



