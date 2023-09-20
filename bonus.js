let userName = prompt('give me your name, please');
const rightPrice = Math.ceil(Math.random() * 100);
console.log(rightPrice);


const game = function() {
    let userNumber = prompt('choose a number, please');
    if (userNumber < rightPrice) {
        console.log('it\'s more');
        game();
    }
    
    if (userNumber > rightPrice) {
        console.log('it\'s less');
        game();
    }
    
    if (userNumber == rightPrice) {
        console.log(userName + ' win !!!!');
    }
}

game();