var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function primeNum(number) {
    var primeNumbers = "";
    for (let i = 0; i <= number; i++) {
        var flag = 0;
        for (let j = 2; j < i; j++) {
            if(i % j == 0) {
                flag = 1;
                break;
            } 
        }
        if(i > 1 && flag == 0){
            primeNumbers += i + " ";
        }
    }
    console.log(primeNumbers);
}

rl.question('Enter a number: ', function (x) {
        var number = parseInt(x);
        primeNum(number)
        rl.close();
});