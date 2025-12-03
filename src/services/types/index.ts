import { AxiosInstance } from 'axios';

export type ApiRequestEventCallback = (
  eventName: 'refreshAuthToken' | 'removeAuthToken',
  payload?: any
) => void;

export type ApiRequestProps = (
  configOverride?: any,
  eventCallBack?: ApiRequestEventCallback
) => AxiosInstance;
