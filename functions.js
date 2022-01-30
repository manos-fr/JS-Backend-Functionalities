import mysql from 'mysql';

export function dbActions(data) {
  const con = mysql.createConnection({
    host: 'localhost',
    user: 'yourusername',
    password: 'yourpassword',
    database: 'mydb',
  });
  let keys = Object.keys(data.users[0]);
  let newKeys = [];
  keys.forEach((x) => {
    let s = x?.replace(/\s+/g, '_');
    newKeys.push(s);
  });

  con.connect(function (err) {
    if (err) throw err;
    console.log('Connected!');
    let ifExists = 'SHOW TABLES LIKE users';
    con.query(ifExists, function (err, result) {
      if (err) throw err;
      if (result) {
        console.log('Table exists!');
        return;
      }
    });
    const sql = `CREATE TABLE users (${newKeys[0]} VARCHAR(255), ${newKeys[1]} VARCHAR(255), ${newKeys[2]} VARCHAR(255), ${newKeys[3]} VARCHAR(255), ${newKeys[4]} VARCHAR(255), ${newKeys[5]} VARCHAR(255))`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log('Table created');
    });
  });
  data.users.forEach((element) => {
    var sqlInsert = `INSERT INTO users (${newKeys[0]},${newKeys[1]},${newKeys[2]},${newKeys[3]},${newKeys[4]},${newKeys[5]}) VALUES (${element}.${newKeys[0]},${newKeys[1]},${newKeys[2]},${newKeys[3]},${newKeys[4]},${newKeys[5]})`;
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
