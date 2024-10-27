const imageMap = {
    // Appetizer
    "Hummus w/ Cobus": "DishlistIMG/hummuswcubbos.jpg",
    "Moutabal w/ Cobus": "DishlistIMG/MoutabalwCobus.jpg",
    "Classic Samosa": "DishlistIMG/samosa.jpg",
    "Chicken Samosa": "DishlistIMG/chickensamosa.jpg",
    "Falafel": "DishlistIMG/falafel.jpg",
    "Chicken Finger w/ Chips": "DishlistIMG/Chicken Finger w Chips.jpg",
    "French Fries": "DishlistIMG/French Fries.jpg",
    // Main Courses
    "Biryani Chicken": "DishlistIMG/Biryani Rice W biryani chicken.jpg",
    "Bukhari Chicken": "DishlistIMG/Bukhari Chicken.jpg",
    "Mandi Chicken": "DishlistIMG/Mandi Chicken.jpg",
    "Kebab Laham": "DishlistIMG/Kebab Laham.jpg",
    "Kebab Dajaj": "DishlistIMG/Kebab Dajaj.jpg",
    "Tikka": "DishlistIMG/Tikka.jpg",
    "Shish Tawouk": "DishlistIMG/Shish Tawouk.jpg",
    "Mix Grilled": "DishlistIMG/Mix Grilled.jpg",
    "Mix Grilled Big Plate": "DishlistIMG/Mix Grilled Big Plate.jpg",
    "Chicken Salona": "DishlistIMG/Chicken Salona.jpg",
    "Chicken Curry": "DishlistIMG/Chicken Curry.jpg",
    "Chicken Masala": "DishlistIMG/Chicken Masala.jpg",
    "Beef Masala": "DishlistIMG/Beef Masala.jpg",
    "Koofteh": "DishlistIMG/Koofteh.jpg",
    "Lamb Chops": "DishlistIMG/Lamb Chops.jpg",
     // Filipino Meals
    "Chicken w/ Spaghetti": "DishlistIMG/Chicken w Spaghetti.jpg",
    "Katsu Curry": "DishlistIMG/Katsu Curry.jpg",
    "1pc. Chicken": "DishlistIMG/1pc. Chicken.jp",
    "2pcs. Fried Chicken": "DishlistIMG/2pcs. Fried Chicken.jpg",
    "Burger Steak": "DishlistIMG/Burger Steak.jpg",
    "Sizzling Bulalo": "DishlistIMG/Sizzling Bulalo.jpg",
    "Battered Chicken": "DishlistIMG/Battered Chicken.jpg",
    "Chicken Inasal": "DishlistIMG/Chicken Inasal.jpg",
    "Crispy Calamares Rings": "DishlistIMG/Crispy Calamares Rings.jpg",
    "Beef Kare-Kare": "DishlistIMG/Beef Kare-Kare.jpg",
    // Soup & Beverages
    "Bulalo": "DishlistIMG/Bulalo.jpg",
    "Creamy Mushrooms": "DishlistIMG/Creamy Mushrooms.jpg",
    "Arabic Lentil Soup": "DishlistIMG/arabic lentil soup.jpg",
    "Strawberry Shakes": "DishlistIMG/Strawberry Shakes.jpg",
    "Blackberry Shakes": "DishlistIMG/Blackberry Shakes.jpg",
    "Raspberry": "DishlistIMG/Raspberry.jpg",
    "Mulberry Shakes": "DishlistIMG/Mulberry Shakes.jp",
    "Lemon and Cucumber": "DishlistIMG/Lemon and Cucumber.jpg",
    "Mango": "DishlistIMG/Mango.jpg",
    "Banana": "DishlistIMG/Banana.jpg",
    "Apple": "DishlistIMG/apple.jpg",
    "Carrot": "DishlistIMG/Carrot.jpg",
    "Watermelon": "DishlistIMG/Watermelon.jpg",
    "Pineapple": "DishlistIMG/Pineapple.jpg",
    "Cocktail": "DishlistIMG/Cocktail.jpg",
     // Pasta
    "Penne Arabiata": "DishlistIMG/Penne Arabiata.jpg",
    "Spaghetti Bolognes": "DishlistIMG/Spaghetti Bolognes.jpg",
    "Pesto Pasta": "DishlistIMG/Pesto Pasta.jpg",
    "Lasagna": "DishlistIMG/Lasagna.jpg",
     // Sandwiches
    "Falafel Sandwich": "DishlistIMG/Falafel Sandwich.jpg",
    "Clubhouse Sandwich": "DishlistIMG/Clubhouse Sandwich.jpg",
    "Crispy Chicken Sandwich": "DishlistIMG/Crispy Chicken Sandwich.jpg",
    "Beef Burger": "DishlistIMG/Beef Burger.jpg",
    "Cheese Burger": "DishlistIMG/cheese Burger.jpg",
    "Ayares Sandwich": "DishlistIMG/Ayares Sandwich.jpg",
    "Chicken Shawarma Sandwich": "DishlistIMG/Chicken Shawarma Sandwich.jpg",
    "Beef Shawarma Sandwich": "DishlistIMG/Beef Shawarma Sandwich.jpg",
    "Shawarma Platter": "DishlistIMG/Shawarma Platter.jpg",
    "Shawarma Meat Platter": "DishlistIMG/Shawarma Meat Platter.jpg",
     // Pizza
    "Chicken Hawaiian": "DishlistIMG/Chicken Hawaiian.jpg",
    "Chicken Ham & Cheese": "DishlistIMG/Chicken Ham & Cheese.jpg",
    "Beef Peperoni": "DishlistIMG/Beef Peperoni.jpg",
    "Chicken Hawaiian Overload": "DishlistIMG/Chicken Hawaiian Overload.jpg",
    "Beef Overload": "DishlistIMG/Beef Overload.jpg",
    "Supreme": "DishlistIMG/Supreme.jpg",
    "Tuna Overload": "DishlistIMG/Tuna Overload.jpg",
    "Pizza Margherita": "DishlistIMG/Pizza Margherita.jpg"
};

function previewDish(dishName) {
    const descriptions = {
        // Appetizer
        "Hummus w/ Cobus": "A delicious appetizer made with grilled bread and topped with fresh tomatoes, basil, and garlic.",
        "Moutabal w/ Cobus": "Mushrooms filled with a savory mixture of cheese, herbs, and breadcrumbs.",
        "Classic Samosa": "A fresh salad made with mozzarella, tomatoes, basil, and drizzled with balsamic reduction.",
        "Chicken Samosa": "Crispy rolls filled with fresh vegetables and served with a dipping sauce.",
        "Falafel": "Toasted bread topped with garlic butter and herbs.",
        "Chicken Finger w/ Chips": "Juicy salmon fillet grilled to perfection, served with a lemon wedge.",
        "French Fries": "Pasta in a creamy Alfredo sauce topped with grilled chicken.",
        // Main Courses
        "Biryani Chicken": "A mix of seasonal vegetables sautéed in a flavorful sauce.",
        "Bukhari Chicken": "Soft or hard shell tacos filled with seasoned beef, lettuce, and cheese.",
        "Mandi Chicken": "Pasta tossed with fresh vegetables and a light olive oil sauce.",
        "Kebab Laham": "Rich and moist chocolate cake topped with creamy chocolate frosting.",
        "Kebab Dajaj": "Creamy cheesecake with a graham cracker crust.",
        "Tikka": "A coffee-flavored dessert made with layers of sponge cake and mascarpone cheese.",
        "Shish Tawouk": "A pastry crust filled with creamy custard and topped with fresh fruits.",
        "Mix Grilled": "Delicious ice cream available in various flavors.",
        "Mix Grilled Big Plate": "A refreshing cocktail made with mint, lime, and rum.",
        "Chicken Salona": "A selection of red and white wines.",
        "Chicken Curry": "Freshly squeezed lemonade, perfect for hot days.",
        "Chicken Masala": "Locally brewed craft beer with a unique flavor.",
        "Beef Masala": "A variety of cocktails made with fresh ingredients.",
        "Koofteh": "A variety of cocktails made with fresh ingredients.",
        "Lamb Chops": "A variety of cocktails made with fresh ingredients.",
         // Filipino Meals
        "Chicken w/ Spaghetti": "A variety of cocktails made with fresh ingredients.",
        "Katsu Curry": "A variety of cocktails made with fresh ingredients.",
        "1pc. Chicken": "A variety of cocktails made with fresh ingredients.",
        "2pcs. Fried Chicken": "A variety of cocktails made with fresh ingredients.",
        "Burger Steak": "A variety of cocktails made with fresh ingredients.",
        "Sizzling Bulalo": "A variety of cocktails made with fresh ingredients.",
        "Battered Chicken": "A variety of cocktails made with fresh ingredients.",
        "Chicken Inasal": "A variety of cocktails made with fresh ingredients.",
        "Crispy Calamares Rings": "A variety of cocktails made with fresh ingredients.",
        "Beef Kare-Kare": "A variety of cocktails made with fresh ingredients.",
         // Soup & Beverages
        "Bulalo": "A variety of cocktails made with fresh ingredients.",
        "Creamy Mushrooms": "A variety of cocktails made with fresh ingredients.",
        "Arabic Lentil Soup": "A variety of cocktails made with fresh ingredients.",
        "Strawberry Shakes": "A variety of cocktails made with fresh ingredients.",
        "Blackberry Shakes": "A variety of cocktails made with fresh ingredients.",
        "Raspberry": "A variety of cocktails made with fresh ingredients.",
        "Mulberry Shakes": "A variety of cocktails made with fresh ingredients.",
        "Lemon and Cucumber": "A variety of cocktails made with fresh ingredients.",
        "Mango": "A variety of cocktails made with fresh ingredients.",
        "Banana": "A variety of cocktails made with fresh ingredients.",
        "Apple": "A variety of cocktails made with fresh ingredients.",
        "Carrot": "A variety of cocktails made with fresh ingredients.",
        "Watermelon": "A variety of cocktails made with fresh ingredients.",
        "Pineapple": "A variety of cocktails made with fresh ingredients.",
        "Cocktail": "A variety of cocktails made with fresh ingredients.",
          // Pasta
        "Penne Arabiata": "A variety of cocktails made with fresh ingredients.",
        "Spaghetti Bolognes": "A variety of cocktails made with fresh ingredients.",
        "Pesto Pasta": "A variety of cocktails made with fresh ingredients.",
        "Lasagna": "A variety of cocktails made with fresh ingredients.",
        // Sandwiches
        "Falafel Sandwich": "A variety of cocktails made with fresh ingredients.",
        "Clubhouse Sandwich": "A variety of cocktails made with fresh ingredients.",
        "Crispy Chicken Sandwich": "A variety of cocktails made with fresh ingredients.",
        "Beef Burger": "A variety of cocktails made with fresh ingredients.",
        "Cheese Burger": "A variety of cocktails made with fresh ingredients.",
        "Ayares Sandwich": "A variety of cocktails made with fresh ingredients.",
        "Chicken Shawarma Sandwich": "A variety of cocktails made with fresh ingredients.",
        "Beef Shawarma Sandwich": "A variety of cocktails made with fresh ingredients.",
        "Shawarma Platter": "A variety of cocktails made with fresh ingredients.",
        "Shawarma Meat Platter": "A variety of cocktails made with fresh ingredients.",
         // Pizza
        "Chicken Hawaiian": "A variety of cocktails made with fresh ingredients.",
        "Chicken Ham & Cheese": "A variety of cocktails made with fresh ingredients.",
        "Beef Peperoni": "A variety of cocktails made with fresh ingredients.",
        "Chicken Hawaiian Overload": "A variety of cocktails made with fresh ingredients.",
        "Beef Overload": "A variety of cocktails made with fresh ingredients.",
        "Supreme": "A variety of cocktails made with fresh ingredients.",
        "Tuna Overload": "A variety of cocktails made with fresh ingredients.",
        "Pizza Margherita": "A variety of cocktails made with fresh ingredients."
    };

    document.getElementById("preview-image").src = imageMap[dishName]; // Set image source from imageMap
    document.getElementById("preview-description").innerText = descriptions[dishName] || "No description available.";
    document.getElementById("preview-modal").style.display = "flex"; // Show the modal
}

function closePreview() {
    document.getElementById("preview-modal").style.display = "none"; // Hide the modal
}

document.getElementById('search-input').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const dishItems = document.querySelectorAll('.dish-item');

    dishItems.forEach(item => {
        const dishName = item.querySelector('p').innerText.toLowerCase();
        if (dishName.includes(searchTerm) || searchTerm === '') {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});


document.getElementById('category-select').addEventListener('change', function() {
    const selectedCategory = this.value;
    const categorySections = document.querySelectorAll('.category-section');

    // Hide all category sections
    categorySections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected category section
    if (selectedCategory === 'all') {
        categorySections.forEach(section => {
            section.style.display = 'block'; // Show all sections if 'All' is selected
        });
    } else {
        const selectedSection = document.getElementById(selectedCategory);
        if (selectedSection) {
            selectedSection.style.display = 'block'; // Show only the selected section
        }
    }
});

// Trigger change event to initialize the view
document.getElementById('category-select').dispatchEvent(new Event('change'));


