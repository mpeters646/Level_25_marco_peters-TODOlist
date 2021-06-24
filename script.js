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
        listItem.setAttribute('id', data[i]._id);
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

// getDataFromAPI();

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

  window.location.reload();
};

document.querySelector('#addTask').addEventListener('click', addDataToDom);
document.querySelector('#inputField').addEventListener('keyup', event => {
  if (event.keyCode === 13) {
    // event.preventDefault();
    addDataToDom();
  }
});

/* testing */
/* const listItem = document.getElementById(
  'e2fefd6f-223d-4c14-8654-3c2fa34f5037'
);
console.log(listItem);
listItem.addEventListener('click', () => {
  alert('You clicked on a listitem');
});
 */
const iconItem = document.querySelector('i');
console.log(iconItem);

iconItem.addEventListener('click', () => {
  alert('You clicked on a icon Item');
});
