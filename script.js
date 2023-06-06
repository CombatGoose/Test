const header = document.querySelector('#header')

const buttons = document.querySelectorAll('.add-to-cart')

const cart = document.querySelector('#cart')

const nums = document.querySelectorAll('.num')

const minuses = document.querySelectorAll('.minus')

const pluses = document.querySelectorAll('.plus')

class User {
  constructor(name, email) {
    this.name = name
    this.email = email
    this.cart = []
  }

  addToCart(product) {
    this.cart.push(product)
    const li = document.createElement('li')
    li.innerText = product
    li.classList.add('cart-item')
    cart.appendChild(li)
  }
}

const username = prompt("Enter your name")
const mail = prompt("Enter your email")

const user = new User(username, mail)

const addInf = () => {
  header.innerHTML = `
  <p>Username: ${user.name}</p>
  <p>Email: ${user.email}</p>
  `
}

if (username && mail) {
  addInf()
}

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const productCard = event.target.parentNode
      const productName = productCard.querySelector('h2').innerText
      user.addToCart(productName)
    })
  })


  minuses.forEach((minus, index) => {
    minus.addEventListener('click', () => {
      if (nums[index].innerText > 0) {
        nums[index].innerText--
      }
    })
  })
  
  pluses.forEach((plus, index) => {
    plus.addEventListener('click', () => {
      nums[index].innerText++
    })
  })