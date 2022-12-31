let weightRaw = 0
let heightRaw = 0

function enterWeight (value) {
    weightRaw = value
}

function enterHeight (value) {
    heightRaw = value
}

function calc_bmi () {
    weight = parseInt(weightRaw);
    height = parseInt(heightRaw);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Нужно ввести два целых значения");
        return;
    }

    result = weight / height ** 2;

    if (result <= 18.5) alert("Недостаточный вес");
    if (result > 18.5 && result <= 25) alert("Нормально");
    if (result > 25 && result <= 30) alert("У вас излишек веса");
    if (result > 30) alert("Ожирение");
}

