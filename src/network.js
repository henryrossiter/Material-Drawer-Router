const apiHost = () => {
  'http://127.0.0.1:5000/'
};

export const get = (route, authToken, queryObj = {}, extraHeaders = {}) => {

  const url = `${apiHost()}/${route}`;

  const headers = {
    ...extraHeaders,
  };

  return fetch(url, {
    mode: 'cors',
    headers,
  }).then(res => (res.status === 200 ? res.json() : Promise.reject(res)));
};

export const getDummy = () => get(
  'dummy',
  null,
  null,
);
