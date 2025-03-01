const filmInput = document.getElementById('film-input');
const addBtn = document.getElementById('add-btn');
const filmList = document.getElementById('film-list');

addBtn.addEventListener('click', function () {

    const div = document.createElement('div');
    div.classList.add('film-item');
    div.textContent += filmInput.value;
    filmInput.value = '';

    filmList.appendChild(div);
});
