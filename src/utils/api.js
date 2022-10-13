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
  return {
    fetchGet,
    fetchPost,
  };
};
