let bookList = document.querySelector('#bookList')
let cartData = JSON.parse(localStorage.getItem('cartData')) || []

// Add DOM dynamically
let bookDoms = cartData.map((item) => {
  let book = document.createElement('div')
  book.className = 'book'
  let bookDom = `
<div class="bookLeft">
  <img
    src="${item.bookImg}"
    alt="Screenshot"
  />
</div>
<div class="bookRight">
  <img
    src="./images/baseline-drag_indicator-24px.svg"
    class="launchIcon"
    alt="icon"
  />
  <div class="bookName">${item.name}</div>
  <div class="quantity" id='quantity'>Quantity:${item.num}</div>
  <div class="bookPrice">${item.price}</div>
  <div class="counter">
    <button class="reduce" id='reduce'>-</button>
    <input type="text" class="num" placeholder="01" value='${item.num}' />
    <button class="add" id='add'>+</button>
  </div>
  <div class="edit">
    <button>Edit</button>
  </div>
  <div class="trashCan">
    <img
      src="./images/baseline-delete_outline-24px.svg"
      alt="icon"
    />
  </div>
</div>
`
  book.innerHTML = bookDom
  return book
})
bookDoms.forEach((item) => {
  bookList.appendChild(item)
})
let subtotal = document.querySelector('#subtotal')

// Price calculation
var price = new Number()
cartData.map((item) => {
  price += item.num * item.price
})

// There is an error in calculating floating-point numbers, so use rounding and keep two decimal places
price = price.toFixed(2)
subtotal.innerHTML = '$' + price
let total
if (cartData[0]) {
  total = +price + 20
} else {
  total = +price
}
total = total.toFixed(2)
document.querySelector('#total').innerHTML = '$' + total

let box = document.querySelector('#box')
let phoneToolbar = document.querySelector('#phoneToolbar')
let left = document.querySelector('#left')
let scrollSelection = document.querySelector('#scrollSelection')
let quantity = document.querySelector('#quantity')
quantity.addEventListener('click', () => {
  scrollSelection.style.display = 'block'
  box.style.display = 'none'
  phoneToolbar.style.display = 'none'
})
scrollSelection.addEventListener('click', () => {
  scrollSelection.style.display = 'none'
  box.style.display = 'block'
  phoneToolbar.style.display = 'block'
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
