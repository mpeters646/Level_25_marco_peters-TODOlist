const url = 'http://localhost:3000';

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

const deleteDataFromAPI = data => {
  fetch(`${url}/${data}`, {
    method: 'DELETE',
  });
  window.location.reload();
};

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
      // console.log(data);
      for (let i = 0; i < data.length; i++) {
        const list = document.querySelector('#todoList');
        const listItem = document.createElement('li');
        const icon = document.createElement('i');

        list.appendChild(listItem);
        listItem.innerHTML = data[i].description;
        listItem.setAttribute('id', data[i]._id);
        icon.className = 'far fa-trash-alt';
        listItem
          .insertBefore(icon, listItem.nextSibling)
          .setAttribute('id', `${data[i]._id}`);

        icon.addEventListener('click', () => {
          alert(`Are you sure to delete ${data[i].description}?`);
          deleteDataFromAPI(data[i]._id);
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
};

const addDataToDom = () => {
  let valueInputField = document.querySelector('#inputField').value;
  postDataToAPI({ description: valueInputField, done: false });
  document.querySelector('#inputField').value = '';

  window.location.reload();
};

getDataFromAPI();
