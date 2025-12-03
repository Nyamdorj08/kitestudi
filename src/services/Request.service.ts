import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { ApiRequestProps } from './types';

export const ApiRequest: ApiRequestProps = (configOverride = {}, _eventCallBack): AxiosInstance => {
  const apiHeaders = {
    'Content-Type': 'application/json',
  };

  const config = { ...configOverride };

  if (configOverride && configOverride.headers) {
    config.headers = {
      ...apiHeaders,
      ...configOverride.headers,
    };
  } else {
    config.headers = apiHeaders;
  }

  const apiInstance: AxiosInstance = axios.create(config);

  apiInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    async (error) => {
      try {
        if (axios.isCancel(error)) {
          return new Promise((resolve) => resolve(null));
        }
      } catch (error) {
        return;
      }
      const errorMessage =
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : error;

      throw new axios.Cancel(errorMessage);
    }
  );
  return apiInstance;
};
