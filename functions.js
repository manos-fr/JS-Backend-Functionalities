import mysql from 'mysql';

export function dbActions(data) {
  const con = mysql.createConnection({
    host: 'localhost',
    user: 'yourusername',
    password: 'yourpassword',
    database: 'mydb',
  });
  let keys = Object.keys(data.users[0]);

  con.connect(function (err) {
    if (err) throw err;
    console.log('Connected!');
    const sql = `CREATE TABLE users (${keys[0]} VARCHAR(255), ${keys[1]} VARCHAR(255), ${keys[2]} VARCHAR(255), ${keys[3]} VARCHAR(255), ${keys[4]} VARCHAR(255), ${keys[5]} VARCHAR(255))`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log('Table created');
    });
  });
  data.users.forEach((element) => {
    var sqlInsert = `INSERT INTO users (${keys[0]},${keys[1]},${keys[2]},${keys[3]},${keys[4]},${keys[5]}) VALUES (${element}.${keys[0]},${keys[1]},${keys[2]},${keys[3]},${keys[4]},${keys[5]})`;
    con.query(sqlInsert, function (err, result) {
      if (err) throw err;
      console.log(` record inserted`);
    });
  });
}

export const addMyEmail = (data) => {
  let myEmail = 'manoskakarakis@gmail.com';
  Object.assign(data, { owner: myEmail });
  console.log(data.owner);
};

export function convertFromStringToDate(date) {
  let dateArray = date?.toString().split('/');
  const freshDate = new Date(+dateArray[2], +(dateArray[1] - 1), +dateArray[0]);
  return freshDate;
}

export function checkDates(firstDate, secondDate) {
  let date = convertFromStringToDate(firstDate[0].date);
  let formattedCheckDate = convertFromStringToDate(secondDate[1].date);
  if (date < formattedCheckDate) {
    return true;
  }
}
