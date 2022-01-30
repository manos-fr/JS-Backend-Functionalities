import { data, checkDate } from './data.js';
import { addMyEmail, checkDates, dbActions } from './functions.js';
import { postData } from './service.js';

const datesToBeChecked = [
  {
    date: data.date,
  },
  {
    date: checkDate,
  },
];

function mainFunctionality(data, dates, postData) {
  addMyEmail(data);
  if (checkDates(dates, dates)) {
    // getData(data);
    dbActions(data);
  } else {
    postData(data);
  }
}

mainFunctionality(data, datesToBeChecked, postData);
