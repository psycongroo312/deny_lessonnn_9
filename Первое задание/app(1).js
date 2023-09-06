const $inputX = $('.numberX')
const $inputY = $('.numberY')


$('.button').on('click', function(){
    const numbersX = parseInt($inputX.val())
    const numbersY = parseInt($inputY.val())

    $('.moveBlock').css({left: numbersX + "px"})
    $('.moveBlock').css({top: numbersY + "px"})
})



// const inputNumberX = document.querySelector('.numberX')
// const inputNumberY = document.querySelector('.numberY')
// const moveBlock = document.querySelector('.moveBlock')
// const btn = document.querySelector('.button')

// btn.addEventListener('click', function(){
//     const numbersX = inputNumberX.value
//     const numbersY = inputNumberY.value

//     moveBlock.style.left = numbersX + "px"
//     moveBlock.style.top = numbersY + "px"
// });