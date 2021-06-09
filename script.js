const url = 'http://localhost:3000';

/*
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
*/
