let cart = [];

// Function to add item to the cart
function addToCart(dishName, price) {
    cart.push({ name: dishName, price: price });
    updateCart();
}

// Function to update cart display
function updateCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = ''; // Clear previous cart items

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(li);
    });

    updateTotal();
}

// Function to update total price
function updateTotal() {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('total').innerText = total.toFixed(2);
}

// Function to filter dishes by category
function filterDishes() {
    const selectedCategory = document.getElementById('category').value;
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const dishes = document.querySelectorAll('.dish-list li');

    dishes.forEach(dish => {
        const dishName = dish.querySelector('span').textContent.toLowerCase();
        const isCategoryMatch = selectedCategory === 'all' || dish.getAttribute('data-category') === selectedCategory;
        const isSearchMatch = dishName.includes(searchTerm);

        if (isCategoryMatch && isSearchMatch) {
            dish.style.display = 'block'; // Show the dish
        } else {
            dish.style.display = 'none'; // Hide the dish
        }
    });
}

// Function to handle adding item to cart on button click
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const listItem = button.closest('li');
        const dishName = listItem.querySelector('span').textContent.split(' - ')[0];
        const price = parseFloat(listItem.querySelector('span').textContent.split('$')[1]);
        addToCart(dishName, price);
        alert(`${dishName} has been added to your cart!`);
    });
});

// Event listener for category change
document.getElementById('category').addEventListener('change', filterDishes);

// Event listener for search input
document.getElementById('search').addEventListener('input', filterDishes);

// Call filterDishes on page load
filterDishes();

// Function to handle payment
function payNow() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        alert(`Proceeding to payment with a total of $${total.toFixed(2)}`);
        // Optionally, clear the cart after payment
        cart = [];
        updateCart();
    }
}

// Add event listener for Pay Now button
document.getElementById('payNow').addEventListener('click', payNow);
