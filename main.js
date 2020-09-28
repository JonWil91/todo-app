let addTaskButton = document.getElementById('add-task');
let listContainer = document.getElementById('list-container');
let inputField = document.getElementById('input-field');

addTaskButton.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    let paragraphButton = document.createElement('button')
    paragraph.classList.add('paragraph-styling');
    paragraphButton.classList.add('paragraph-button');
    paragraph.innerText = inputField.value;
    listContainer.appendChild(paragraph);
    paragraph.appendChild(paragraphButton);
    inputField.value = "";
    paragraphButton.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
        paragraphButton.style.backgroundColor = "red";
    })
    paragraphButton.addEventListener('dblclick', function(){
        listContainer.removeChild(paragraph);
    })
})