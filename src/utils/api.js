import { getCookie } from "./cookie";
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

  const fetchSecureGet = () => {
    const promise = fetch(url, {
      method: "GET",
      headers: { ...headers, Authorization: getCookie("accessToken") },
    });
    return checkPromise(promise);
  };

  const fetchSecurePost = (data) => {
    const promise = fetch(url, {
      method: "POST",
      headers: { ...headers, Authorization: getCookie("accessToken") },
      body: JSON.stringify(data),
    });
    return checkPromise(promise);
  };

  const fetchSecurePatch = (data) => {
    const promise = fetch(url, {
      method: "PATCH",
      headers: { ...headers, Authorization: getCookie("accessToken") },
      body: JSON.stringify(data),
    });
    return checkPromise(promise);
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

  return {
    fetchGet,
    fetchPost,
    refreshToken,
    fetchSecurePost,
    fetchSecurePatch,
    fetchSecureGet,
  };
};
