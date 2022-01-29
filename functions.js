export const addMyEmail = (data) => {
  let myEmail = 'manoskakarakis@gmail.com';
  Object.assign(data, { owner: myEmail });
  console.log(data.owner);
};

export function convertFromStringToDate(date) {
  let dateArray = date?.toString().split('/');
  const freshDate = new Date(+dateArray[2], +(dateArray[1] - 1), +dateArray[0]);
  console.log(freshDate);
  return freshDate;
}

export function checkDates(firstDate, secondDate) {
  let date = convertFromStringToDate(firstDate[0].date);
  let formattedCheckDate = convertFromStringToDate(secondDate[1].date);
  if (date < formattedCheckDate) {
    return true;
  }
}
