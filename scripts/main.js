function loadData() {
    console.log("Loading from server!!");
}

function sayHelloToAPerson(name) {
    console.log("Hi there, " + name);
}

function sum(num1, num2) {
    let result = num1 + num2;
    console.log("The result is: ", + result);
    return result;

    console.log("below a return");
}

function testValidation() {
    let num = 9;

    if (num < 10) {
        console.log("Error, num to low");
        return;
    }
    console.log("Saved");
}

function printSomeNumbers() {
    for (let i = 1; i < 21; i++) {
        if (i != 7 && i != 13) { // "!=" = not, "&&" = and, "||" = or
            console.log(i);
        }
    }
}

function sumSomeNumbers() {
    let list = [12, 32, 12, 456, 12, 87, 345, 56, 3, 7, 5678, 2, 4587, 243, 09, 234, -3, 4567, -9, 0];

    let total = 0;
    let sol = list[0];
    let small = list[0];
    for (let i = 0; i < list.length; i++) {
        let num = list[i];
        // total = total + num; ( same as total += num )
        total += num;
        if (num > sol) {
            sol = num;
        }
        if (num < small) {
            small = num;
        }
    }
    console.log("sum: ", total);
    console.log("biggest: ", sol);
    console.log("smallest: ", small);
}

function init() {
    console.log("DOM ready");

    // catch events

    // load previous data
    loadData();

    sayHelloToAPerson("Bob");
    sayHelloToAPerson("Jose");
    sayHelloToAPerson("Ivan");

    //make it work
    let res = sum(21, 21);
    console.log(res);

    // for lopos
    printSomeNumbers(); // nums from 0 to 20

    sumSomeNumbers(); // let list = [12,32,12,456,12,87,345,56,3,7,5678,2,4587,243,09,234,-3,4567,-9,0];

};

// when the browser finishes rednering all the html, do this
window.onload = init;