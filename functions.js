export const addMyEmail = (data) => {
  let myEmail = 'manoskakarakis@gmail.com';
  Object.assign(data, { owner: myEmail });
  console.log(data.owner);
};
