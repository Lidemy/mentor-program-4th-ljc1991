const list = document.querySelector('#my-todo');

// 看完自我檢討後補上跳脫字元的處理
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function addItem(text) {
  const newItem = document.createElement('li');
  newItem.innerHTML = `
    <label for="todo">${escapeHtml(text)}</label>
    <i class="delete fa fa-trash"></i>
  `;
  list.appendChild(newItem);
}

// Create
const addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', () => {
  const inputValue = document.querySelector('#newTodo').value;
  if (!inputValue) return; // 看完自我檢討後補上未輸入內容時的處理
  addItem(inputValue);
  document.querySelector('#newTodo').value = '';
});

// Delete and check
list.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete')) {
    const li = event.target.parentElement;
    li.remove();
  } else if (event.target.tagName === 'LABEL') {
    event.target.classList.toggle('checked');
  }
});
