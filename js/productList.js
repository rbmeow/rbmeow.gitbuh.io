// Get phoneSearch results
let search = localStorage.getItem('phoneSearch')
let bookList = document.querySelector('#bookList')
let dom
document.querySelector('#bookOne').addEventListener('click', () => {
    clickFun('Uk’o Toa')
})
document.querySelector('#bookTwo').addEventListener('click', () => {
    clickFun('Wingspan')
})
document.querySelector('#bookThree').addEventListener('click', () => {
    clickFun('Sherlock Holmes')
})
document.querySelector('#bookFour').addEventListener('click', () => {
    clickFun('Mariposas')
})
// Dynamically add books based on search results
if (search == 'Uk’o Toa') {
    let div = document.createElement('div')
    div.className = 'book'
    div.id = 'bookOne'
    dom = `<a href="./boardGames.html">
    <img
      src="./images/Screenshot 2022-04-09 at 11.03.53 AM.png"
      alt="book" />
    <div class="bookName">UK'o Toa</div>
    <div class="price">$29.99</div>
    <div class="stock">In stock</div>
    <img
      src="./images/baseline-favorite_border-24px.svg"
      alt="icon"
      class="favorite"
  /></a>
`
    div.innerHTML = dom
    bookList.appendChild(div)
    document.querySelector('#bookOne').addEventListener('click', () => {
        clickFun('Uk’o Toa')
    })
} else if (search == 'Wingspan') {
    let div = document.createElement('div')
    div.className = 'book'
    div.id = 'bookTwo'
    dom = `<a href="./boardGames.html">
    <img
      src="./images/Screenshot 2022-04-09 at 11.09.02 AM.png"
      alt="book" />
    <div class="bookName">wingspan</div>
    <div class="price">$59.99</div>
    <div class="stock">In stock</div>
    <img
      src="./images/baseline-favorite_border-24px.svg"
      alt="icon"
      class="favorite"
  /></a>`
    div.innerHTML = dom
    bookList.appendChild(div)
    document.querySelector('#bookTwo').addEventListener('click', () => {
        clickFun('Wingspan')
    })
} else if (search == 'Sherlock Holmes') {
    let div = document.createElement('div')
    div.className = 'book'
    div.id = 'bookThree'
    dom = `<a href="./boardGames.html">
    <img
      src="./images/Screenshot 2022-04-09 at 7.41.00 PM.png"
      alt="book" />
    <div class="bookName">Sherlock Holmes</div>
    <div class="price">$49.99</div>
    <div class="stock">In stock</div>
    <img
      src="./images/baseline-favorite_border-24px.svg"
      alt="icon"
      class="favorite"
  /></a>`
    div.innerHTML = dom
    bookList.appendChild(div)

    document.querySelector('#bookThree').addEventListener('click', () => {
        clickFun('Sherlock Holmes')
    })
}
else if (search == 'Mariposas') {
    let div = document.createElement('div')
    div.className = 'book'
    div.id = 'bookFour'
    dom = ` <a href="./boardGames.html">
    <img
      src="./images/Screenshot 2022-04-09 at 7.44.57 PM.png"
      alt="book" />
    <div class="bookName">Mariposas</div>
    <div class="price">$49.99</div>
    <div class="stock">In stock</div>
    <img
      src="./images/baseline-favorite_border-24px.svg"
      alt="icon"
      class="favorite"
  /></a>`
    div.innerHTML = dom
    bookList.appendChild(div)

    document.querySelector('#bookFour').addEventListener('click', () => {
        clickFun('Mariposas')
    })
}
else {
    let div = document.createElement('div')
    div.className = 'notData'
    dom = `No Data`
    div.innerHTML = dom
    bookList.appendChild(div)
}



let clickFun = (data) => {
    let bookMsg
    if (data == 'D&D 5E: Expansion Rulebooks Gift Set') {
        bookMsg = {
            name: 'D&D 5E: Expansion Rulebooks Gift Set',
            price: 169.95,
            bookImg: './images/Screenshot 2022-04-09 at 9.44.26 PM.png'
        }
    } else if (data == 'Uk’o Toa') {
        bookMsg = {
            name: 'Uk’o Toa',
            price: 29.99,
            bookImg: './images/Screenshot 2022-04-09 at 11.03.53 AM.png'
        }
    } else if (data == 'Wingspan') {
        bookMsg = {
            name: 'Wingspan',
            price: 59.99,
            bookImg: './images/Screenshot 2022-04-09 at 11.09.02 AM.png'
        }
    } else if (data == 'Sherlock Holmes') {
        bookMsg = {
            name: 'Sherlock Holmes',
            price: 49.99,
            bookImg: './images/Screenshot 2022-04-09 at 7.41.00 PM.png'
        }
    } else if (data == 'Mariposas') {
        bookMsg = {
            name: 'Mariposas',
            price: 49.99,
            bookImg: './images/Screenshot 2022-04-09 at 7.44.57 PM.png'
        }
    }
    localStorage.setItem('bookMsg', JSON.stringify(bookMsg))
}

// Add click event

