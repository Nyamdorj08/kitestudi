import { ApiRequest } from './Request.service';
import { StudyyServiceProps } from './types/Studyy.type';

export const StudyyService: StudyyServiceProps = (requestInstance = ApiRequest()) => ({
  answers: (payload) => {
    return requestInstance.post('/studyy', payload).catch((err) => {
      throw err;
    });
  },

  paymentCheck: (_id) => {
    return requestInstance.post(`/studyy/${_id}`).catch((err) => {
      throw err;
    });
  },
});
