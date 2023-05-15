const cartMethods = {
  getCart: function () {
    return JSON.parse(localStorage.getItem('cart')) || []
  },
  isExist: function (product) {
    const cart = this.getCart()
      return cart.find((item) => item.id === product.id)
  },
  toggleCart: function (product) {
    const cart = this.getCart()
    const productExists = cart.find((item) => item.id === product.id)
    if (productExists) {
      this.removeFromCart(product)
    } else {
      this.addToCart(product)
    }
  },

  addToCart: function (product) {
    const cart = this.getCart()
    // check if product already exists in cart
    const productExists = cart.find((item) => item.id === product.id)
    if (!productExists) {
      product.count= 1;
      cart.push(product)
    }
    localStorage.setItem('cart', JSON.stringify(cart))
  },

  removeFromCart: function (product) {
    const cart = this.getCart()
    const updatedCart = cart.filter((item) => item.id !== product.id)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  },
  removeFromCartById: function (id) {
    const cart = this.getCart()
    const updatedCart = cart.filter((item) => item.id !== id)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  },
  clearCart: function () {
    localStorage.removeItem('cart')
  },

  getCartTotal: function () {
    const cart = this.getCart()
    const total = cart.reduce((acc, item) => acc + item.price, 0)
    return total
  },
  changeCartCount: function (product,count) {
    const cart = this.getCart()
    const updatedCart = cart.map((item) => {
      if(item.id == product.id){
        item.count=count
      }
      return item
    })
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }
}

export default cartMethods
