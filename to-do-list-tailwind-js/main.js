const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

const addTask = () => {
    if (inputBox.value === '') {
        const alert = document.getElementById('alert');
        alert.innerHTML = `You must write something <i class="ri-alert-fill"></i>`
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)

        let span = document.createElement('span');
        span.innerHTML = `<i class="ri-close-fill"></i>`;
        li.appendChild(span);
    }

    inputBox.value = '';
}

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
    } else if (e.target.tagName === 'I') {
        e.target.parentElement.parentElement.remove()
    }
}, false)