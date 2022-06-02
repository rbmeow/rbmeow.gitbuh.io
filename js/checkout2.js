let priorityOneIcon = document.querySelector('#priorityOneIcon')
let priorityTwoIcon = document.querySelector('#priorityTwoIcon')
let priorityThreeIcon = document.querySelector('#priorityThreeIcon')
let shippingTitleIcon = document.querySelector('#shippingTitleIcon')
let one = 0
let two = 0
let three = 0
document.querySelector('#priorityOne').addEventListener('click', () => {
    console.log(123);
    priorityOneIcon.src = './images/group1897.svg'
    priorityTwoIcon.src = './images/group1898.svg'
    priorityThreeIcon.src = './images/group1898.svg'
    one++
    two = 0
    three = 0
    ShippingPrice = 30
    if (one >= 2) {
        priorityOneIcon.src = './images/group1898.svg'
        shippingTitleIcon.src = "./images/circular.svg"
        one = 0
        ShippingPrice = 0
        ShippingPriceDom.innerHTML = 0
    }

})
document.querySelector('#priorityTwo').addEventListener('click', () => {
    priorityOneIcon.src = './images/group1898.svg'
    priorityTwoIcon.src = './images/group1897.svg'
    priorityThreeIcon.src = './images/group1898.svg'
    one = 0
    two++
    three = 0
    ShippingPrice = 20
    if (two >= 2) {
        shippingTitleIcon.src = "./images/circular.svg"
        priorityTwoIcon.src = './images/group1898.svg'
        two = 0
        ShippingPrice = 0
        ShippingPriceDom.innerHTML = 0
    }

})
document.querySelector('#priorityThree').addEventListener('click', () => {
    priorityOneIcon.src = './images/group1898.svg'
    priorityTwoIcon.src = './images/group1898.svg'
    priorityThreeIcon.src = './images/group1897.svg'
    one = 0
    two = 0
    three++
    ShippingPrice = 18
    if (three >= 2) {
        shippingTitleIcon.src = "./images/circular.svg"
        priorityThreeIcon.src = './images/group1898.svg'
        three = 0
        ShippingPrice = 0
        ShippingPriceDom.innerHTML = 0
    }

})