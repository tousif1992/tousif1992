// Get DOM elements
const product = document.querySelector('.product');
const addToCartButton = product.querySelector('.add-to-cart');
const cart = document.querySelector('.cart');
const cartItems = cart.querySelector('.cart-items');
const total = cart.querySelector('.total');
const checkoutButton = cart.querySelector('.checkout');

// Initialize cart
let cartTotal = 0;
const cartData = {};

// Add event listener for add-to-cart button
addToCartButton.addEventListener('click', () => {
  const productName = product.querySelector('h2').innerText;
  const productPrice = parseFloat(product.querySelector('.price').innerText.replace('$', ''));

  // Add item to cart data
  if (cartData[productName]) {
    cartData[productName].quantity += 1;
  } else {
    cartData[productName] = {
      price: productPrice,
      quantity: 1
    };
  }

  // Update cart UI
  updateCart();
});

// Add event listener for checkout button
checkoutButton.addEventListener('click', () => {
  // Send cart data to server for processing
  console.log(cartData);

  // Reset cart
  cartTotal = 0;
  cartData = {};
  cartItems.innerHTML = '';
  total.innerText = `Total: $${cartTotal.toFixed(2)}`;
});

// Update cart UI function
function updateCart() 
  cartItems.innerHTML = '';
  cartTotal = 0;

  for (const [productName, productData] of Object.entries(cartData)) {
    const li = document.createElement('li');
    li.innerText = `${productName} x ${productData.quantity} - $${(productData.price * productData.quantity).toFixed(2)}`;
    cartItems.appendChild(li);

    cartTotal += productData.price * productData.quantity;
  }

  total.innerText = `Total: $${cartTotal.toFixed(2)}`;
