let bookMsg = JSON.parse(localStorage.getItem('bookMsg'))
document.querySelector('#bookImg').src = bookMsg.bookImg
document.querySelector('#bookName').innerHTML = bookMsg.name
document.querySelector('#price').innerHTML = '$' + bookMsg.price
document.querySelector('#phonePrice').innerHTML = '$' + bookMsg.price
let num = 01
let addToCartFun = () => {
  bookMsg.num = num
  let cartData = JSON.parse(localStorage.getItem('cartData')) || []
  if (!cartData[0]) {
    cartData.push(bookMsg)
    localStorage.setItem('cartData', JSON.stringify(cartData))
    return
  }
  cartData.forEach((item) => {
    if (item.name == bookMsg.name) {
      item.num += bookMsg.num
    } else {
      cartData.push(bookMsg)
    }
  })
  localStorage.setItem('cartData', JSON.stringify(cartData))
}
document.querySelector('#add2cart').addEventListener('click', addToCartFun)
document.querySelector('#phoneCart').addEventListener('click', addToCartFun)

let input = document.querySelector('#input')
// add
let add = document.querySelector('#add')
add.addEventListener('click', () => {
  num += 1
  if (num < 10) input.value = '0' + num
  else input.value = num
})
// reduce
let reduce = document.querySelector('#reduce')
reduce.addEventListener('click', () => {
  if (num < 10 && num > 1) {
    num -= 1
    input.value = '0' + num
  } else if (num == 1) {
    num = 1
    input.value = '0' + num
  } else {
    num -= 1
    input.value = num
  }
})
// Bind keyboard lift event to input box
document.querySelector('#searchInp').addEventListener('keyup', (e) => {
  if (e.keyCode == 13) {
    localStorage.setItem('search', e.target.value)
    let locationArr = location.href
      .split('/')
      .splice(0, location.href.split('/').length - 1)
    console.log(locationArr.join('/'))
    location.href = locationArr.join('/') + '/searchResult.html'
    e.target.value = ''
  }
})
