const inputNumber = document.querySelector('#input');
const buttonNumber = document.querySelector('#btn');
const resultNumber = document.querySelector('#result')

buttonNumber.addEventListener('click', function(){
    const answer = inputNumber.value
    let result = "Введите число"
   

    if(isNaN(answer)){
       resultNumber.innerHTML = result;
    }
    else {
        const stepen = answer ** 2;
        resultNumber.innerHTML = stepen;
    }
 
});