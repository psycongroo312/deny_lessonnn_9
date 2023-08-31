const inputText = document.querySelector('#input');
const buttonText = document.querySelector('#btn');
const resultText = document.querySelector('#result')

buttonNumber.addEventListener('click', function(){
    const answer = inputText.value
    let result = "Введите число"
   

    if(isNaN(answer)){
       resultText.innerHTML = result;
    }
    else {
        const stepen = answer ** 2;
        resultText.innerHTML = stepen;
    }
 
});