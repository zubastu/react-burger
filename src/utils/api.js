import { getCookie, setCookie } from "./cookie";
import { REFRESH_TOKEN_URL } from "./constants";

export const api = (url) => {
  const checkPromise = (promise) =>
    promise.then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
    );

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json: charset=utf-8",
  };

  const fetchGet = () => {
    const promise = fetch(url, {
      method: "GET",
      headers,
    });
    return checkPromise(promise);
  };

  const fetchPost = (data) => {
    const promise = fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    });
    return checkPromise(promise);
  };

  const refreshToken = () => {
    const promise = fetch(REFRESH_TOKEN_URL, {
      method: "POST",
      headers,
      body: JSON.stringify({ token: getCookie("refreshToken") }),
    });
    return checkPromise(promise);
  };

  const checkAuth = () => {
    return refreshToken().then((res) => {
      setCookie("refreshToken", res.refreshToken, {
        expires: 99999 * 999,
      });
      setCookie("accessToken", res.accessToken, { expires: 1200 });
      return res;
    });
  };

  return {
    fetchGet,
    fetchPost,
    refreshToken,
    checkAuth,
  };
};
