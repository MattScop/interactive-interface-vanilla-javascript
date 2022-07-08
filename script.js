// create a li element with the content of the value submitted by the form
// when clicking the submit button, append the li element in the list
// append delete button as well
// when clicking the button, remove parent element
// for the filter, if the input value matches the elements,
// show them, if not, hide them.

const liList = document.getElementsByTagName('li');
const items = document.getElementById('items');
const form = document.getElementById('addForm');
const formText = document.getElementById('item');
const filter = document.getElementById('filter');


form.addEventListener('submit', addItem);

function addItem(e) {
    // prevent the default action of submitting
    e.preventDefault();
    
    const li = document.createElement('li');
    const text = document.createTextNode(formText.value);
    li.appendChild(text);
    li.className = 'list-group-item';
    
    const btn = document.createElement('button');
    btn.textContent = 'X';
    btn.className = 'btn btn-danger btn-sm float-right delete';
    li.appendChild(btn);

    items.appendChild(li);
}


items.addEventListener('click', removeItem);

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if(confirm('Are You Sure?')) {
            e.target.parentElement.remove()
        }
    }
}


filter.addEventListener('keyup', searchItem);

function searchItem() {
    const arr = Array.from(liList);
    const filterLoweredCase = filter.value.toLowerCase();

    arr.forEach(item => {
        const itemTextLowered = item.firstChild.textContent.toLowerCase();

        if (itemTextLowered.includes(filterLoweredCase)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}

