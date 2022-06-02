let cartData = JSON.parse(localStorage.getItem('cartData')) || []
let bookList = document.querySelector('#bookList')

let bookDoms = cartData.map((item) => {
  let book = document.createElement('div')
  book.className = 'book mt'
  let bookDom = `<div class="bookImg">
<img
  src="${item.bookImg}"
  alt="Screenshot"
  class="Screenshot"
/>
<div class="num" id="num">${item.num}</div>
</div>
<div class="rightMsg">
<div class="bookName">
  ${item.bookName}
</div>
<div class="bookPrice">$${item.price}</div>
</div>`
  book.innerHTML = bookDom
  return book
})
bookDoms.forEach((item) => {
  bookList.appendChild(item)
})
let subtotal = document.querySelector('#subtotal')
var price = new Number()
cartData.map((item) => {
  price += item.num * item.price
})
let ShippingPrice = 20
price = price.toFixed(2)
subtotal.innerHTML = '$' + price
let total = +price + ShippingPrice
total = total.toFixed(2)
let totalDom = document.querySelector('#total')
totalDom.innerHTML = '$' + total
document.querySelector('#placeOrder').addEventListener('click', () => {
  localStorage.clear()
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
let addressBool = true
document.querySelector('#existing').addEventListener('click', () => {
  addressBool = !addressBool
  console.log(document.querySelector('#existingIcon'));
  let existingIcon = document.querySelector('#existingIcon')
  let titleIcon = document.querySelector('#titleIcon')
  if (addressBool) {
    existingIcon.src = "./images/group1897.svg"
    titleIcon.src = "./images/baseline-check_circle_outline-24px.svg"
  } else {
    existingIcon.src = "./images/group1898.svg"
    titleIcon.src = "./images/circular.svg"
  }
})
let priorityOneIcon = document.querySelector('#priorityOneIcon')
let priorityTwoIcon = document.querySelector('#priorityTwoIcon')
let priorityThreeIcon = document.querySelector('#priorityThreeIcon')
let shippingTitleIcon = document.querySelector('#shippingTitleIcon')
let one = 0
let two = 0
let three = 0

let ShippingPriceDom = document.querySelector('#ShippingPriceDom')
document.querySelector('#priorityOne').addEventListener('click', () => {
  priorityOneIcon.src = './images/group1897.svg'
  priorityTwoIcon.src = './images/group1898.svg'
  priorityThreeIcon.src = './images/group1898.svg'
  shippingTitleIcon.src = './images/baseline-check_circle_outline-24px.svg'
  one++
  two = 0
  three = 0
  ShippingPrice = 30
  ShippingPriceDom.innerHTML = '$' + ShippingPrice
  if (one >= 2) {
    priorityOneIcon.src = './images/group1898.svg'
    shippingTitleIcon.src = "./images/circular.svg"
    one = 0
    ShippingPrice = 0
    ShippingPriceDom.innerHTML = 0
  }
  total = +price + ShippingPrice
  total = total.toFixed(2)
  totalDom.innerHTML = '$' + total
})
document.querySelector('#priorityTwo').addEventListener('click', () => {
  priorityOneIcon.src = './images/group1898.svg'
  priorityTwoIcon.src = './images/group1897.svg'
  priorityThreeIcon.src = './images/group1898.svg'
  shippingTitleIcon.src = './images/baseline-check_circle_outline-24px.svg'
  one = 0
  two++
  three = 0
  ShippingPrice = 20
  ShippingPriceDom.innerHTML = '$' + ShippingPrice
  if (two >= 2) {
    shippingTitleIcon.src = "./images/circular.svg"
    priorityTwoIcon.src = './images/group1898.svg'
    two = 0
    ShippingPrice = 0
    ShippingPriceDom.innerHTML = 0
  }
  total = +price + ShippingPrice
  total = total.toFixed(2)
  totalDom.innerHTML = '$' + total
})
document.querySelector('#priorityThree').addEventListener('click', () => {
  priorityOneIcon.src = './images/group1898.svg'
  priorityTwoIcon.src = './images/group1898.svg'
  priorityThreeIcon.src = './images/group1897.svg'
  shippingTitleIcon.src = './images/baseline-check_circle_outline-24px.svg'
  one = 0
  two = 0
  three++
  ShippingPrice = 18
  ShippingPriceDom.innerHTML = '$' + ShippingPrice
  if (three >= 2) {
    shippingTitleIcon.src = "./images/circular.svg"
    priorityThreeIcon.src = './images/group1898.svg'
    three = 0
    ShippingPrice = 0
    ShippingPriceDom.innerHTML = 0
  }
  total = +price + ShippingPrice
  total = total.toFixed(2)
  totalDom.innerHTML = '$' + total
})

let billingAddBool = true
let billingAddressIcon = document.querySelector('#billingAddressIcon')
let paymentTitleIcon = document.querySelector('#paymentTitleIcon')
document.querySelector('#billingAddress').addEventListener('click', () => {
  billingAddBool = !billingAddBool
  if (billingAddBool) {
    billingAddressIcon.src = './images/group1897.svg'
    paymentTitleIcon.src = './images/baseline-check_circle_outline-24px.svg'
  } else {
    billingAddressIcon.src = './images/group1898.svg'
    paymentTitleIcon.src = './images/circular.svg'
  }
})