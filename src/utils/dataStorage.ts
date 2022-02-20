const ACCESS_TOKEN = 'access-token-sua';
const USER = 'user';
const EMAIL = 'email';

interface LocalStorageProps {
  accessToken: string;
  email: string;
  userId: string;
}

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);

export const getUserData = () => {
  return {
    userId: localStorage.getItem(USER),
    email: localStorage.getItem(EMAIL),
  };
};

export const setAccessToken = ({
  accessToken,
  email,
  userId,
}: LocalStorageProps) => {
  localStorage.setItem(ACCESS_TOKEN, accessToken);
  localStorage.setItem(USER, userId);
  localStorage.setItem(EMAIL, email);
};

export const removeStorage = () => {
  localStorage.clear();
};

export const isAuthenticated = () => getAccessToken() !== null;
