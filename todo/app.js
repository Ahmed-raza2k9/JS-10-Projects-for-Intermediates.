const inputBox = document.getElementById("input-box");
const addBtn = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear");
let taskContainer = document.getElementById("list-container");

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputBox.value.trim() === '') {
        alert('Input Field Required');
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        taskContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData()
});

taskContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('selected');
        saveData()
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData()
    }
});

function saveData() {
    localStorage.setItem('data', taskContainer.innerHTML);
}
function showData() {
    taskContainer.innerHTML = localStorage.getItem('data');
}

showData();
clearBtn.addEventListener('click', () => {
    let confirmation = prompt('Enter Password to clear tasks');
    let count;
    if (confirmation === 'ahmedraza') {
        localStorage.clear();
        window.location.reload();
    }
    else {

        window.location.href = 'error.html?error=you are entering wrong passwords';

    }
});












// addBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (inputBox.value.trim() === '') {
//         alert('Input Field Required');
//     }
//     else {
//         let li = document.createElement('li');
//         li.innerHTML = inputBox.value;
//         taskContainer.appendChild(li);
//         let span = document.createElement('span');
//         span.innerHTML = "\u00d7";
//         li.appendChild(span);
//     }
//     inputBox.value = '';
//     saveData()
// });

// taskContainer.addEventListener('click', function (e) {
//     if (e.target.tagName === 'LI') {
//         e.target.classList.toggle('selected');
//         saveData()
//     }
//     else if (e.target.tagName === 'SPAN') {
//         e.target.parentElement.remove();
//         saveData();
//     }
// });

// function saveData() {
//     localStorage.setItem('data', taskContainer.innerHTML);
// }
// function showData() {
//     taskContainer.innerHTML = localStorage.getItem('data');
// }
// showData();
// clearBtn.addEventListener('click', () => {
//     var confirmation = prompt('Enter Password to Clear Tasks');
//     if (confirmation === 'ahmedraza') {
//         localStorage.clear();
//         window.location.reload();
//     }
//     else {
//         // alert('password is wrong')
//         window.location.href = 'error.html?error=you are trying to enter wrong password please leave.';
//     }
// });