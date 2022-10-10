export const api = (url) => {
  const checkPromise = (promise) => {
    return promise.then((res) => {
      return res ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
    });
  };

  const fetchGet = () => {
    const promise = fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json: charset=utf-8",
      },
    });
    return checkPromise(promise);
  };

  const fetchPost = (data) => {
    const promise = fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json: charset=utf-8",
      },
      body: JSON.stringify(data),
    });

    return checkPromise(promise);
  };
  return {
    fetchGet,
    fetchPost,
  };
};
