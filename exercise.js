// import { data } from './data.json';
// import * as helpers from './functions.js';
import { addMyEmail } from './functions.js';
import axios from 'axios';
// const axios = require('axios').default;
// import axios

const inputData = {
  date: '23/07/2021',

  users: [
    {
      name: 'AAAAAAAAAAA',

      'Total Phone Calls': 9,

      'Changed status to terminated': 0,

      'Changed status to lost from competitor': '0',

      'Total Unique Accounts': '9',

      'Calls Duration >120"': '2',
    },

    {
      name: 'BBBBBBBBBBB',

      'Total Phone Calls': 39,

      'Changed status to terminated': 0,

      'Changed status to lost from competitor': '0',

      'Total Unique Accounts': '37',

      'Calls Duration >120"': '3',
    },

    {
      name: 'CCCCCCCCCCCC',

      'Total Phone Calls': 6,

      'Changed status to terminated': 0,

      'Changed status to lost from competitor': '0',

      'Total Unique Accounts': '6',

      'Calls Duration >120"': '0',
    },
  ],
};
const checkDate = '01/09/2021';

const datesToBeChecked = [
  {
    date: inputData.date,
  },
  {
    date: checkDate,
  },
];

const getData = (data) => {
  axios
    .post('https://workflows.routee.net/test_assessment', data.users)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

// const addMyEmail = (data) => {
//   let myEmail = 'manoskakarakis@gmail.com';
//   Object.assign(data, { owner: myEmail });
//   console.log(data.owner);
// };

function convertFromStringToDate(date) {
  let dateArray = date?.toString().split('/');
  console.log(new Date(+dateArray[2], +(dateArray[1] - 1), +dateArray[0]));
  return new Date(+dateArray[2], +dateArray[1], +dateArray[0]);
}

function checkDates(firstDate, secondDate) {
  let date = convertFromStringToDate(firstDate[0].date);
  let formattedCheckDate = convertFromStringToDate(secondDate[1].date);
  if (date < formattedCheckDate) {
    return true;
  }
}

function mainFunctionality(data, dates, addMyEmail, getData) {
  addMyEmail(data);
  if (checkDates(dates, dates)) {
    console.log(true);
    //...Sql implementation
  } else {
    getData(data);
  }
}

mainFunctionality(inputData, datesToBeChecked, addMyEmail, getData);
