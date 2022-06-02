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
