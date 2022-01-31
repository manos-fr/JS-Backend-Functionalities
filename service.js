import axios from 'axios';

let axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  },
};

export const postData = (data) => {
  axios
    .post(
      'https://workflows.routee.net/test_assessment',
      JSON.stringify(data?.users),
      axiosConfig
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(`Cannot execute: ${error}`);
      console.log(error.response);
    });
};
