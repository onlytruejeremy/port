import axios from "axios";

export const sendMessage = (payload) => {
  const config = {
    method: "POST",
    data: payload,
    url: "https://submit-form.com/lB7B6FXl",
    headers: {
      "content-type": "application/json"
    }
  };
  return axios(config);
};
