const wishlistMethods = {
    getWishlist: function () {
        return JSON.parse(localStorage.getItem('wishlist')) || []
    },

    addToWishlist: function (product) {
        const wishlist = this.getWishlist()
        // check if product already exists in wishlist 
        const productExists = wishlist.find((item) => item.id === product.id)
        if (!productExists) {
            wishlist.push(product)
        }
        localStorage.setItem('wishlist', JSON.stringify(wishlist))
    },

    removeFromWishlist: function (product) {
        const wishlist = this.getWishlist()
        const updatedWishlist = wishlist.filter((item) => item.id !== product.id)
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist))
    },

    removeFromWishlistById: function (id) {
        const wishlist = this.getWishlist()
        const updatedWishlist = wishlist.filter((item) => item.id !== id)
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist))
    },

    clearWishlist: function () {
        localStorage.removeItem('wishlist')
    },

    getWishlistTotal: function () {
        const wishlist = this.getWishlist()
        const total = wishlist.reduce((acc, item) => acc + item.price, 0)
        return total
    }
}

export default wishlistMethods