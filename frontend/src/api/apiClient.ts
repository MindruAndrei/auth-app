import axios from "axios";

export const makeApiGetRequest = (url: string) => {
  const token = localStorage.getItem("token");

  return axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((resp) => resp.data);
};

export const makeApiPostRequest = (url: string, body?: any) => {
  const token = localStorage.getItem("token");

  return axios.post(url, {
    body,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(resp => resp.data);
};
