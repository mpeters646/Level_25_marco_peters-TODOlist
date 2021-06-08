const url = 'http://localhost:3000';

const getDataFromAPI = async () => {
  const response = await fetch(`${url}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });
  const json = await response.json();
  console.log(json);
  return json;
};

const postDataToAPI = async data => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
    },
  });
  const json = response.json();
  console.log(json);
  return json;
};

document.querySelector('#addTask').addEventListener('click', () => {
  let valueInputField = document.querySelector('#inputField').value;
  postDataToAPI({ description: valueInputField, done: false });
  const list = document.querySelector('#todoList');
  const listItem = document.createElement('li');
  const i = document.createElement('i');

  list.appendChild(listItem);
  listItem.innerHTML = valueInputField;
  listItem.setAttribute('id', getDataFromAPI._id);
  i.className = 'far fa-trash-alt';
  listItem
    .insertBefore(i, listItem.nextSibling)
    .setAttribute('id', 'deleteOne');

  document.querySelector('#inputField').value = '';

  // getDataFromAPI();
});

// getDataFromAPI();

/* FETCH TEST */
const API = 'https://jsonplaceholder.typicode.com';

const fetchUser = async userIndex => {
  const response = await fetch(`${API}/users/${userIndex}`);
  const json = await response.json();
  console.log(json);

  document.getElementById('name').innerHTML = `${json.name}: ${json.username}`;
  document.getElementById('email').innerHTML = json.email;
  document.getElementById('phone').innerHTML = json.phone;
  document.getElementById('status').innerHTML = null;
};

document.querySelector('#fetchUserButton').addEventListener('click', () => {
  const userIndex = document.getElementById('userIndex').value;
  console.log(userIndex);

  if (userIndex <= 0 || userIndex > 10) {
    document.getElementById('status').innerHTML = `Invalid value ${userIndex}`;
    return;
  }
  fetchUser(userIndex);
});
