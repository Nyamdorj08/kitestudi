import { ApiRequest as CoreApiRequest } from './Request.service';
import { StudyyService as CoreStudyyService } from './Studyy.service';

export const ApiRequest = () => {
  const apiHeaders: any = {
    'Content-Type': 'application/json',
  };

  const config: any = {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: apiHeaders,
    withCredentials: true,
  };

  return CoreApiRequest(config);
};

export const UploadRequest = () => {
  const apiHeaders: any = {
    'Content-Type': 'multipart/form-data',
  };

  const config: any = {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: apiHeaders,
    withCredentials: true,
  };

  return CoreApiRequest(config);
};

export const StudyyService = () => CoreStudyyService(ApiRequest());
