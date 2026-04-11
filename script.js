//genrate number 
let genratrand = Math.floor(Math.random()*100);

//body function
function loG() {
//variables
let input = document.getElementById('input').value;
let result =  document.getElementById('result');
let userNumbr =  Number(input);
//if usr don't enter any number
if (!input){
result.textContent = 'enter number';
}
//equal to the rand number
 else if (genratrand===userNumbr){
    result.textContent = 'the correct number'
//up to the random number
}else if (genratrand>userNumbr){
  result.textContent ='up';
//down to the rondom number
}else if(genratrand<userNumbr){
    result.textContent = 'down';

}
}
