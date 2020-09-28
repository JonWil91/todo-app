let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    let paragraphButton = document.createElement('button')
    paragraph.classList.add('paragraph-styling');
    paragraphButton.classList.add('paragraph-button');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    paragraph.appendChild(paragraphButton);
    inputField.value = "";
    paragraphButton.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
        paragraphButton.style.backgroundColor = "red";
    })
    paragraphButton.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})