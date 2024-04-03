// CALCULATOR PROGRAM

const display = document.getElementById('display');

function appendOperation(input){
    display.value += input;
}
function cancelOperation() {
    display.value = '';
}
function calculate() {
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = 'SYNTAX ERROR'
    }
}