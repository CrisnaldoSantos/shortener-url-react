import { AxiosError } from 'axios';
import { errorToast } from './toasts';

export function catchAxiosErrors(err: AxiosError, baseMsg: string) {
  if (err.response !== undefined) {
    const { statusCode, message } = err.response.data;
    errorToast(`${baseMsg}: ${statusCode} - ${message}`);
  } else {
    errorToast(`${baseMsg} ${err}`);
  }
}
