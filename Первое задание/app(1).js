const inputNumberX = document.querySelector('.numberX')
const inputNumberY = document.querySelector('.numberY')
const muvBlock = document.querySelector('.muv-block')
const btn = document.querySelector('.button')

btn.addEventListener('click', function(){
    const numbersX = inputNumberX.value
    const numbersY = inputNumberY.value

    muvBlock.style.left = numbersX + "px"
    muvBlock.style.top = numbersY + "px"
});