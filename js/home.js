// Start rotation
window.onload = function () {
  if (document.body.clientWidth >= 768) {
    slideshow.init()
    document.querySelector('#hot').style.overflow = 'hidden'
  }
  console.dir(document.querySelector('#ul'))
  document.querySelector('#ul').style.width =
    document.body.clientWidth * 2 + 'px'
  document.querySelector('#one').style.width = document.body.clientWidth + 'px'
  document.querySelector('#two').style.width = document.body.clientWidth + 'px'
  document.querySelector('#banner').style.height =
    document.body.clientHeight - 104 + 'px'
}
document.querySelector('#next').addEventListener('click', () => {
  let timer = setInterval(() => {
    if (document.querySelector('#hot').scrollTop == 600) {
      clearInterval(timer)
    } else {
      document.querySelector('#hot').scrollTop += 20
    }
  }, 20)
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
    }
  }
  let bookMsg = bookMap[data]

  localStorage.setItem('bookMsg', JSON.stringify(bookMsg))
}
document
  .querySelector('#informationButtonOne')
  .addEventListener('click', () => {
    clickFun('Ghostly Hallows')
    let locationArr = location.href
      .split('/')
      .splice(0, location.href.split('/').length - 1)
    console.log(locationArr.join('/'))
    location.href = locationArr.join('/') + '/boardGames.html'
  })
document
  .querySelector('#informationButtonTwo')
  .addEventListener('click', () => {
    clickFun('D&D 5E: Expansion Rulebooks Gift Set ')
    let locationArr = location.href
      .split('/')
      .splice(0, location.href.split('/').length - 1)
    console.log(locationArr.join('/'))
    location.href = locationArr.join('/') + '/boardGames.html'
  })

window.addEventListener("resize", function () {
  if (document.body.clientWidth <= 768) {
    slideshow.destroy()
  } else {
    // slideshow.init()
  }
  document.querySelector('#one').style.width = document.body.clientWidth + 'px'
  document.querySelector('#two').style.width = document.body.clientWidth + 'px'
})