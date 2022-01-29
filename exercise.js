import { data, checkDate } from './data.js';
import { addMyEmail, checkDates } from './functions.js';
import { getData } from './service.js';

const datesToBeChecked = [
  {
    date: data.date,
  },
  {
    date: checkDate,
  },
];

mainFunctionality(data, datesToBeChecked, getData);

function mainFunctionality(data, dates, getData) {
  addMyEmail(data);
  if (checkDates(dates, dates)) {
    //...Sql implementation
  } else {
    getData(data);
  }
}
