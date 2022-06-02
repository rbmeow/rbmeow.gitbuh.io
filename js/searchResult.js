// Get search results


let productList = document.querySelector('#product-list')
let dom
document.querySelector('#productOne').addEventListener('click', () => {
  clickFun('D&D 5E: Expansion Rulebooks Gift Set')
})
document.querySelector('#productTwo').addEventListener('click', () => {
  clickFun('Uk’o Toa')
})
document.querySelector('#productThree').addEventListener('click', () => {
  clickFun('Wingspan')
})
// Dynamically add books based on search results
let startFun = () => {
  let search = localStorage.getItem('search')
  if (search == 'D&D 5E: Expansion Rulebooks Gift Set') {
    dom = `<div id='productOne' class='product'>
<a href="./boardGames.html">
  <img
    class="book"
    src="./images/Screenshot 2022-04-09 at 9.44.26 PM.png"
    alt="Screenshot"
  />
  <span class="title">D&D 5E: Expansion Rulebooks Gift Set </span>
  <span class="price">$169.95</span>
  <div class="iconImg">
    <span
      ><img
        src="./images/baseline-visibility-24px.svg"
        alt="icon"
    /></span>
    <span
      ><img
        src="./images/baseline-favorite_border-1.svg"
        alt="icon"
    /></span>
    <span
      ><img
        src="./images/outline-shopping_basket-24px.svg"
        alt="icon"
    /></span>
  </div>
</a></div>
`
    productList.innerHTML = dom
    // productList.appendChild(div)
    document.querySelector('#productOne').addEventListener('click', () => {
      clickFun('D&D 5E: Expansion Rulebooks Gift Set')
    })
  } else if (search == 'Uk’o Toa') {
    dom = `<div class='product' id='productTwo'>              <a href="./boardGames.html">
<img
  class="book"
  src="./images/Screenshot 2022-04-09 at 11.03.53 AM.png"
  alt="Screenshot"
/>
<span class="title">Uk’o Toa</span>
<span class="price">$29.99</span>
<div class="iconImg">
  <span
    ><img
      src="./images/baseline-visibility-24px.svg"
      alt="icon"
  /></span>
  <span
    ><img
      src="./images/baseline-favorite_border-1.svg"
      alt="icon"
  /></span>
  <span
    ><img
      src="./images/outline-shopping_basket-24px.svg"
      alt="icon"
  /></span>
</div>
</a></div>`
    // div.innerHTML = dom
    productList.innerHTML = dom
    // productList.appendChild(div)
    document.querySelector('#productTwo').addEventListener('click', () => {
      clickFun('Uk’o Toa')
    })
  } else if (search == 'Wingspan') {
    dom = `<div id='productTwo' class='product'><a href="./boardGames.html">
    <img
      class="book"
      src="./images/Screenshot 2022-04-09 at 11.09.02 AM.png"
      alt="Screenshot"
    />
    <span class="title">Wingspan</span>
    <span class="price">$59.99</span>
    <div class="iconImg">
      <span
        ><img
          src="./images/baseline-visibility-24px.svg"
          alt="icon"
      /></span>
      <span
        ><img
          src="./images/baseline-favorite_border-1.svg"
          alt="icon"
      /></span>
      <span
        ><img
          src="./images/outline-shopping_basket-24px.svg"
          alt="icon"
      /></span>
    </div>
  </a></div>`
    div.innerHTML = dom
    productList.appendChild(div)
    document.querySelector('#productThree').addEventListener('click', () => {
      clickFun('Wingspan')
    })
  } else {
    setTimeout(() => {
      if (!productList.childNodes[0]) {
        dom = `<div class='notData'>No Data</div>`
        productList.innerHTML = dom
      }
    })
  }
}
startFun()
let clickFun = (data) => {
  let bookMap = {
    'D&D 5E: Expansion Rulebooks Gift Set': {
      name: 'D&D 5E: Expansion Rulebooks Gift Set',
      price: 169.95,
      bookImg: './images/Screenshot 2022-04-09 at 9.44.26 PM.png'
    },
    'Uk’o Toa': {
      name: 'Uk’o Toa',
      price: 29.99,
      bookImg: './images/Screenshot 2022-04-09 at 11.03.53 AM.png'
    },
    'Wingspan': {
      name: 'Wingspan',
      price: 59.99,
      bookImg: './images/Screenshot 2022-04-09 at 11.09.02 AM.png'
    },
    'Ghostly Hallows': {
      name: 'Ghostly Hallows',
      price: 59.99,
      bookImg: './images/phoneBanner.png'
    },
    'MINT': {
      name: 'MINT',
      price: 59.99,
      bookImg: './images/Screenshot 2022-04-10 at 9.43.16 PM.png'
    },
    'BRILLIANT STARS': {
      name: 'BRILLIANT STARS',
      price: 59.99,
      bookImg: './images/Screenshot 2022-04-10 at 9.43.16 PM.png'
    },
  }
  let bookMsg = bookMap[data]
  console.log(bookMsg);
  localStorage.setItem('bookMsg', JSON.stringify(bookMsg))
}

document.querySelector('#phoneSearch').addEventListener('keyup', (e) => {
  if (e.keyCode == 13) {
    // console.log(123)
    // localStorage.setItem('phoneSearch', e.target.value)
    let locationArr = location.href
      .split('/')
      .splice(0, location.href.split('/').length - 1)
    location.href = locationArr.join('/') + '/productList.html'
    e.target.value = ''
  }
})
// Bind keyboard lift event to input box
document.querySelector('#searchInp').addEventListener('keyup', (e) => {
  if (e.keyCode == 13) {
    // localStorage.setItem('search', e.target.value)
    let locationArr = location.href
      .split('/')
      .splice(0, location.href.split('/').length - 1)
    // console.log(locationArr.join('/'))
    if (location.href.split('/')[location.href.split('/').length - 1] != 'searchResult.html') {
      location.href = locationArr.join('/') + '/searchResult.html'
    }
    // else {
    //   startFun()
    // }
    e.target.value = ''
  }
})
document.querySelector('#mint').addEventListener('click', () => {
  clickFun('MINT')
})
document.querySelector('#stars').addEventListener('click', () => {
  clickFun('BRILLIANT STARS')
})