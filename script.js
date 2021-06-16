const url = 'http://localhost:3000';

const getDataFromAPI = async () => {
  fetch(url, {
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        const list = document.querySelector('#todoList');
        const listItem = document.createElement('li');
        const icon = document.createElement('i');

        list.appendChild(listItem);
        listItem.innerHTML = data[i].description;
        listItem.setAttribute('id', data._id);
        icon.className = 'far fa-trash-alt';
        listItem
          .insertBefore(icon, listItem.nextSibling)
          .setAttribute('id', `${data[i]._id}`);
      }
    })
    .catch(error => {
      console.log(error);
    });
};

getDataFromAPI();

const postDataToAPI = async data => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
    },
  });
  const json = response.json();
  return json;
};

const addDataToDom = () => {
  let valueInputField = document.querySelector('#inputField').value;
  postDataToAPI({ description: valueInputField, done: false });
  document.querySelector('#inputField').value = '';

  const list = document.querySelector('#todoList');
  const listItem = document.createElement('li');
  const icon = document.createElement('i');

  list.appendChild(listItem);
  listItem.innerHTML = valueInputField;
  listItem.setAttribute('id', `${getDataFromAPI._id}`);
  icon.className = 'far fa-trash-alt';
  listItem
    .insertBefore(icon, listItem.nextSibling)
    .setAttribute('id', `${getDataFromAPI._id}`);

  console.log(`${getDataFromAPI._id}`);
};

document.querySelector('#addTask').addEventListener('click', addDataToDom);
document.querySelector('#inputField').addEventListener('keyup', event => {
  if (event.keyCode === 13) {
    event.preventDefault();
    addDataToDom();
  }
});
