const url = 'http://localhost:3000';

// const getDataFromAPI = async () => {
//   const response = await fetch(`${url}`, {
//     headers: {
//       'Content-type': 'application/json',
//     },
//   });
//   const json = await response.json();
//   // console.log(json);
//   return json;
// };

const postDataToAPI = async data => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
    },
  });
  const json = response.json();
  // console.log(json);
  return json;
};

// const showListToDom = () => {
//   const apiData = getDataFromAPI();

//   for (let i = 0; i < apiData.length; i++) {
//     let valueInputField = document.querySelector('#inputField').value;
//     const list = document.querySelector('#todoList');
//     const listItem = document.createElement('li');
//     const icon = document.createElement('i');

//     list.appendChild(listItem);
//     listItem.innerHTML = valueInputField;
//     listItem.setAttribute('id', getDataFromAPI._id);
//     icon.className = 'far fa-trash-alt';
//     listItem
//       .insertBefore(icon, listItem.nextSibling)
//       .setAttribute('id', 'deleteOne');
//   }
// };

document.querySelector('#addTask').addEventListener('click', () => {
  let valueInputField = document.querySelector('#inputField').value;
  postDataToAPI({ description: valueInputField, done: false });
  document.querySelector('#inputField').value = '';

  // const list = document.querySelector('#todoList');
  const listItem = document.createElement('li');
  // const icon = document.createElement('i');

  // list.appendChild(listItem);
  listItem.innerHTML = valueInputField;
  // listItem.setAttribute('id', localApiData._id);
  // icon.className = 'far fa-trash-alt';
  // listItem
  //   .insertBefore(icon, listItem.nextSibling)
  //   .setAttribute('id', 'deleteOne');
  // localApiData();
});

// showListToDom();
// // const dataFromAPI = getDataFromAPI();
// // dataFromAPI.then(data => console.log(data));

const localApiData = () => {
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
        let valueInputField = document.querySelector('#inputField').value;
        const list = document.querySelector('#todoList');
        const listItem = document.createElement('li');
        const icon = document.createElement('i');

        list.appendChild(listItem);
        // listItem.innerHTML = valueInputField;
        listItem.innerHTML = data[i].description;
        listItem.setAttribute('id', data._id);
        icon.className = 'far fa-trash-alt';
        listItem
          .insertBefore(icon, listItem.nextSibling)
          .setAttribute('id', 'deleteOne');
      }
    })
    .catch(error => {
      console.log(error);
    });
};
localApiData();
