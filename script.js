// qustion 1

let num = 1 , num1 = 7;

function SmallNumber(num , num1){

    if (num < num1){
        console.log(num);
    }

    else{
        console.log(num1);
    }

}

SmallNumber(num , num1);

// qustion 2

let name1 = 'ron' , name2 = 'ruso' , name3 = 'nadav' , name4 = 'nissim';

let counter = 0;

function SmallStr(name1 , name2 , name3 , name4){

    if (name1.length > 3){
        counter ++
    }

    if (name2.length > 3){
        counter ++
    }

    if (name3.length > 3){
        counter ++
    }

    if (name4.length > 3){
        counter ++
    }

}

SmallStr(name1 , name2 , name3 , name4);

console.log(counter);

// qustion 3

function inp(){

    let name = document.getElementById('text10').value;

    if (name.charAt(5) >= 'A' && name.charAt(90) <= 'Z'){
        return console.log(name.toLowerCase())
    }

    else {
        console.log(name);
    }

}

// 4

console.log(inp);

let num2 = -9;

function EvenOdds(num){

    if (num % 2 == 0 && num > 0 ){
        console.log('even possitive');
    }

    else if (num % 2 != 0 && num > 0){
        console.log('odds possitive');
    }

    else if (num % 2 == 0 && num < 0){
        console.log('even niggative');
    }

    else if (num % 2 != 0 && num < 0){
        console.log('odds niggative');
    }

    else {
        console.log('0');
    }

}

EvenOdds(num2);

// 5

let text1 = 'gello worlg';

function LastFirst(text){
    
    if (text.charAt(0) == text.charAt(text.length -1)){
        console.log(text.slice(1 , text.length -1));
    }

    else {
        console.log(text);
    }

}

LastFirst(text1);

// 6 

let str = 'hello guys'

function hashtang(str) {

    if (str.indexOf('*') != -1){
        str1 = str.slice(0 , str.indexOf('*')) + str.slice(str.lastIndexOf('*') +1);
        console.log(str1);
    }

    else if (str.indexOf('@') != -1){
        str2 = '*';
        str3 = str.slice(0 , str.indexOf('@')) + str2 + str.slice(str.indexOf('@') , str.indexOf('@') +1) + str2 + str.slice(str.indexOf('@') +1)
        console.log(str3);
    }

    else if (str.indexOf('₪') != -1){
        console.log('new shekel');
    }

    else {
        console.log(str);
    }
}

hashtang(str);

// converter number's

function inp0(){

    inp1 = document.getElementById('inp1').value;

    inp2 = document.getElementById('inp2').value;

    inp3 = document.getElementById('inp3').value;

    inp4 = document.getElementById('inp4').value;

    inp5 = document.getElementById('inp5').value;

    if (inp1 == 0){
        alert('e is not a number')
    }

    else if (inp2 == inp3){
        console.log(inp1 * inp3);
    }
    
    else if (inp2 == inp4){
        console.log(inp1 * inp4);
    }
    
    else if (inp2 == inp5){
        console.log(inp1 * inp5);
    }
    
}

