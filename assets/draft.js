// add to cart demo

function addToCart(selectedObject) {
    cart.push(selectedObject)
    makeCartHTML()
    calculateTotal()
    updateCounter()
    console.log(cart);

}
let productCards = document.querySelectorAll(".productCard")
productCards.forEach((card, index) => {
    card.addEventListener("click", () => {
        let selectedObject = products.find(product => product.id == index + 1);
        addToCart(selectedObject)
    })
})


// calculate total
let cartTotal = 0;
let totalSpanElemnt = document.querySelector('.totalSpan')
function calculateTotal() {
    cartTotal = 0
    cart.forEach(cartItem => {
        cartTotal += cartItem.price
    })
    totalSpanElemnt.innerText = cartTotal;
}


function updateCounter() {
    let cartTotalElemnt = document.querySelector(".cartTotal")
    cartTotalElemnt.innerText = cart.length
}
// update Quantity
function updateQuantity(selectedItem, elemntClass) {
    if (elemntClass === "addQTY") {
        selectedItem.quantity++;
    } else {
        if (selectedItem.quantity === 1) {
            let index = cart.findIndex(item => item.id === selectedItem.id);
            if (index !== -1) {
                cart.splice(index, 1); // Remove the item from the array
            }
        } else {
            selectedItem.quantity--;
        }
    }
    makeCartHTML()
    calculateTotal()
}
