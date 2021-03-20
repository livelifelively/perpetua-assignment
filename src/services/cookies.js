import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const getCookie = (name) => {
  return cookies.get(name);
};

export const setCookie = (key, val, options) => {
  cookies.set(key, val, options);
};

export const removeCookie = (key, options) => {
  cookies.remove(key, options);
};
