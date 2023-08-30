const inputJs = document.querySelector('#input');
const buttonJs = document.querySelector('#btn');
const outputJs = document.querySelector('#output');


buttonJs.addEventListener('click', function(){
    const answer = inputJs.value;
    let output = "Нийса язина";

    if(answer === ''){
        output = "Поле обязательно для заполнения";
    }
    else if (answer.length < 3 ){
        output = "Поле должно содержать не менее 3-х символов"
    }

    outputJs.innerHTML = output;
});
