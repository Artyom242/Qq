
let block = document.querySelector('.dift_image')
let block_2 = document.querySelector('.emty_gift')


block.addEventListener('click', () => {
    block.classList.add('none')
    block_2.classList.remove('none')
    block_2.classList.add('block')
})
