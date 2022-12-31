let firstName = "";
let secondName = "";

function enterFirstName () {
    firstName = prompt("Введите ее имя");
}

function enterSecondName () {
    secondName = prompt("Введите его имя");
}

function calc () {
    if (firstName.length > 0 && secondName.length > 0) {
        result =  Math.floor( Math.random() * 100 );
        alert(`${firstName} подходит к ${secondName} на ${result} процентов!`);
    }
    else {
        alert(`Нужно ввести два имени!`);
    }
}