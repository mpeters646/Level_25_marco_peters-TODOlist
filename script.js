document.querySelector('#addTask').addEventListener('click', addDataToDom);
document.querySelector('#inputField').addEventListener('keyup', event => {
  if (event.keyCode === 13) {
    event.preventDefault();
    addDataToDom();
  }
});

const iconItem = document.querySelectorAll('i');

iconItem.forEach(icon => {
  icon.addEventListener('click', () => {
    alert('You clicked on a icon Item');
  });
});
