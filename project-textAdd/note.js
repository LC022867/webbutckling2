"use strict";

//skapa varabel för all inputs
const blockText = document.querySelectorAll(".card");
const notes = document.querySelector('.notes');


//skapar en ny delete btn med samma klass 
function createBtn() {
    let btnDelete = document.createElement('button');
    btnDelete.setAttribute('class', 'delete_btn');
    btnDelete.innerHTML = "Delete";
    btnDelete.addEventListener("click", deleteCard)
    return document.body.appendChild(btnDelete);
}

//när man trycker på skcika btn
document.querySelector(".btn").addEventListener('click', function () {
    //tar in data av alla inputs
    const input1 = document.querySelector(".input1").value;
    const input2 = document.querySelector(".input2").value;

    //kompinerar input1 + input2
    const inputs = input1.concat(" " + input2);
    //test
    console.log(inputs);


    //skapar en helt ny div block
    let divi = document.createElement('div');
    //sätter en klass och sa hetta "card"
    divi.setAttribute('class', 'card');
    //divi.innerHTML = inputs;

    //skapar h3 med utrymme
    const h3 = document.createElement('h3', "<br>");
    const textNoteh3 = document.createTextNode(input1);

    //skapar p text med utrymme
    const text = document.createElement('p', "<br>");
    const textP = document.createTextNode(input2);


    h3.append(textNoteh3);
    divi.append(h3);

    text.append(textP);
    divi.append(text);

    divi.append(createBtn());
    notes.append(divi);
    document.body.append(notes);
})
;


let deleteButtons = document.querySelectorAll(".delete_btn");

deleteButtons.forEach((button) => {
    button.addEventListener('click', deleteCard);

})

function deleteCard (event) {
    event.target.parentNode.remove();
}