let arrRaw = "";

function enterArr (value) {
    arrRaw = value;
}

function calcDinnerPaymenter () {
    let arr = parseArr(arrRaw);
    let randomIndex = Math.floor ( Math.random() * arr.length-1 );
    alert( `Оплачивать будет ${arr[randomIndex]}` );
}

function parseArr (value) {
    let modifiedSentence = value.split(" ").map(item => item.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"]/g,"")).filter(item => item.length >=3);
    return modifiedSentence;
}