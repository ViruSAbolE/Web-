let yearRaw = 0;

function enterYear (value) {
    yearRaw = value;
}

function calc_year () {
    let year = parseInt(yearRaw);

    if ( isNaN(year) || year <= 0 ){
        alert ("Введено некорректное значение");
        return;
    }

    if (year % 4 == 0 && !((year % 100 == 0) && (year % 400 != 0))) {
        alert ("Год високосный");
    }
    else {
        alert ("Не является високосным");

    }

//     Год считается високосным, если он делится на 4 без остатка.
// Кроме случаев, когда этот год также делится на 100 без остатка
// Если только этот год не делится на 400 без остатка.

}