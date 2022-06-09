/* eslint-disable linebreak-style */

const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');
const putBtn = document.getElementById('put-btn');
const deleteBtn = document.getElementById('delete-btn');

let userId = 1;

const requestURL = 'http://127.0.0.1:8000/user';

const user = {
  userName: 'U1',
  firstName: 'user1',
  lastName: 'user1',
  email: 'user1@gmail.com',
  password: '111222',
  phone: '1111111',
};

const userChanged = {
  userName: 'U1',
  firstName: 'user1-changed',
  lastName: 'user1-changed',
  email: 'user1@gmail.com',
  password: '111222',
  phone: '1111111',
};

const getData = () => {
  axios.get(`${requestURL}`).then((data) => {
    userId = data.data.id;
    console.log(data);
  })
      .catch((err) => console.log(err));
};

const sendData = () => {
  axios.post(requestURL, user).then((data) => {
    console.log(data);
  })
      .catch((err) => console.log(err));
};

const putData = () => {
  axios.put(`${requestURL}/${userId}`, userChanged).then((data) => {
    console.log(data);
  })
      .catch((err) => console.log(err));
};

const deleteData = () => {
  axios.delete(`${requestURL}/1`).then((data) => {
    userId = data.is;
    console.log(data);
  })
      .catch((err) => console.log(err));
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
putBtn.addEventListener('click', putData);
deleteBtn.addEventListener('click', deleteData);
