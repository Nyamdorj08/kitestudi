import { ApiRequest } from './Request.service';
import { StudiiServiceProps } from './types/Studii.type';

export const StudiiService: StudiiServiceProps = (requestInstance = ApiRequest()) => ({
  answers: (payload) => {
    return requestInstance.post('/api/studii', payload).catch((err) => {
      throw err;
    });
  },

  paymentCheck: (_id) => {
    return requestInstance.get(`/api/studii/${_id}`).catch((err) => {
      throw err;
    });
  },
});
