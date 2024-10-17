document.querySelectorAll('.menu-item button').forEach(button => {
    button.addEventListener('click', () => {
        const foodItem = button.parentElement; // Get the parent menu item
        const foodName = foodItem.querySelector('h2').textContent; // Get the food name
        alert(`You have ordered ${foodName}!`); // Show alert with the food name
    });
});




