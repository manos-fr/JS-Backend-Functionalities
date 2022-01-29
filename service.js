import axios from 'axios';

export const getData = (data) => {
  axios
    .post('https://workflows.routee.net/test_assessment', data.users)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
