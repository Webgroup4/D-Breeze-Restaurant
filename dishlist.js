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
    "Mix Grilled": "images/bestseller2.jpg",
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
    "1pc. Chicken": "DishlistIMG/1pc. Chicken.jpg",
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
        "Hummus w/ Cobus": "₱159.00   Creamy and flavorful hummus topped with a sprinkle of Cobus. A delicious and healthy appetizer.",
        "Moutabal w/ Cobus": "₱179.00  Smoky and flavorful eggplant dip, blended with tahini, lemon juice, and garlic, topped with a sprinkle of Cobus.",
        "Classic Samosa": "₱210.00  Crispy and savory pastries filled with spiced potatoes and peas.",
        "Chicken Samosa": "₱199.00  Classic samosas filled with tender chicken and aromatic spices.",
        "Falafel": "₱230.00  Deep-fried chickpea patties, seasoned with herbs and spices, served with tahini sauce.",
        "Chicken Finger w/ Chips": "₱279.00  Crispy and juicy chicken fingers served with golden-brown chips.",
        "French Fries": "₱109.00  Classic crispy fries, perfect for dipping. A timeless side dish that's always a crowd-pleaser.",
        // Main Courses
        "Biryani Chicken": "₱249.00  Aromatic and flavorful rice dish, layered with tender chicken, fragrant spices, and saffron. A true culinary masterpiece, perfect for a special occasion or a satisfying weeknight meal.",
        "Bukhari Chicken": "₱269.00  Tender chicken cooked in a rich and flavorful Bukhari sauce, a blend of aromatic spices and herbs. A classic Middle Eastern dish, perfect for a hearty and satisfying meal.",
        "Mandi Chicken": "₱249.00  Tender and flavorful chicken cooked in a traditional Mandi style, with a blend of aromatic spices and herbs. A popular Middle Eastern dish, perfect for a special occasion or a satisfying family meal.",
        "Kebab Laham": "₱250.00  Grilled lamb kebabs, seasoned with a blend of spices and herbs. A classic Middle Eastern dish, perfect for a flavorful and satisfying meal.",
        "Kebab Dajaj": "₱210.00  Grilled chicken kebabs, seasoned with a blend of spices and herbs. A delicious and healthy option, perfect for a quick and satisfying meal.",
        "Tikka": "₱210.00  Marinated chicken or lamb, grilled to perfection, seasoned with a blend of spices and herbs. A popular Indian dish, perfect for a flavorful and satisfying meal.",
        "Shish Tawouk": "₱190.00  Marinated chicken skewers, grilled to perfection, seasoned with a blend of spices and herbs. A classic Middle Eastern dish, perfect for a flavorful and satisfying meal.",
        "Mix Grilled": "₱299.00  A variety of grilled meats, including chicken, lamb, and beef, seasoned with a blend of spices and herbs. A perfect option for a hearty and satisfying meal.",
        "Mix Grilled Big Plate": "₱899.00  A larger portion of the Mix Grilled, perfect for sharing with friends and family. A perfect option for a special occasion or a satisfying family meal.",
        "Chicken Salona": "₱350.00  A flavorful and aromatic chicken stew, cooked with a blend of spices and herbs. A classic Middle Eastern dish, perfect for a comforting and satisfying meal.",
        "Chicken Curry": "₱350.00  A flavorful and aromatic chicken curry, cooked with a blend of spices and herbs. A classic Indian dish, perfect for a spicy and satisfying meal.",
        "Chicken Masala": "₱350.00  A flavorful and aromatic chicken masala, cooked with a blend of spices and herbs. A classic Indian dish, perfect for a spicy and satisfying meal.",
        "Beef Masala": "₱399.00  A flavorful and aromatic beef masala, cooked with a blend of spices and herbs. A classic Indian dish, perfect for a spicy and satisfying meal.",
        "Koofteh": "₱399.00  Persian meatballs, cooked in a rich and flavorful tomato sauce. A classic Persian dish, perfect for a hearty and satisfying meal.",
        "Lamb Chops": "₱1,099.00  Grilled lamb chops, seasoned with a blend of spices and herbs. A delicious and flavorful option, perfect for a special occasion or a satisfying meal.",
         // Filipino Meals
        "Chicken w/ Spaghetti": "₱210.00  Tender chicken served with a bed of spaghetti, a classic comfort food favorite. Perfect for a quick and satisfying meal.",
        "Katsu Curry": "₱299.00  Crispy breaded chicken cutlets served with a flavorful curry sauce. A popular dish, perfect for a hearty and satisfying meal.",
        "1pc. Chicken": "₱140.00  A single piece of tender and juicy chicken, perfect for a quick and easy meal.",
        "2pcs. Fried Chicken": "₱189.00  Two pieces of crispy and flavorful fried chicken, perfect for a satisfying snack or a light meal.",
        "Burger Steak": "₱225.00  A juicy and flavorful burger steak, served with a side of rice and vegetables. A classic comfort food favorite, perfect for a hearty and satisfying meal.",
        "Sizzling Bulalo": "₱499.00  A hearty and flavorful Filipino soup, made with beef shanks, bone marrow, and vegetables. A perfect dish for a cold day or a satisfying meal.",
        "Battered Chicken": "₱389.00  Crispy and flavorful battered chicken, perfect for a quick and easy meal.",
        "Chicken Inasal": "₱189.00  Grilled chicken marinated in a blend of spices and herbs, a popular Filipino dish. A flavorful and satisfying meal.",
        "Crispy Calamares Rings": "₱250.00  Crispy and tender calamari rings, perfect for a light and satisfying appetizer.",
        "Beef Kare-Kare": "₱499.00  A rich and flavorful Filipino stew, made with beef tripe, peanut sauce, and vegetables. A perfect dish for a special occasion or a satisfying meal.",
         // Soup & Beverages
        "Bulalo": "₱450.00  A hearty and flavorful Filipino soup, made with beef shanks, bone marrow, and vegetables. A perfect dish for a cold day or a satisfying meal.",
        "Creamy Mushrooms": "₱120.00  A rich and creamy mushroom soup, perfect for a light and satisfying meal.",
        "Arabic Lentil Soup": "₱149.00  A flavorful and aromatic lentil soup, a classic Middle Eastern dish. A perfect choice for a vegetarian meal or a light and satisfying lunch.",
        "Strawberry Shakes": "₱160.00  A refreshing and delicious strawberry shake, perfect for a sweet treat or a light and refreshing drink.",
        "Blackberry Shakes": "₱160.00  A tart and flavorful blackberry shake, perfect for a sweet treat or a light and refreshing drink.",
        "Raspberry": "₱160.00  A sweet and tart raspberry shake, perfect for a sweet treat or a light and refreshing drink.",
        "Mulberry Shakes": "₱140.00  A unique and flavorful mulberry shake, perfect for a sweet treat or a light and refreshing drink.",
        "Lemon and Cucumber": "₱130.00  A refreshing and healthy juice, perfect for a light and refreshing drink.",
        "Mango": "₱120.00  A sweet and tropical juice, perfect for a refreshing and delicious drink.",
        "Banana": "₱120.00  A creamy and sweet juice, perfect for a refreshing and delicious drink..",
        "Apple": "₱120.00  A crisp and refreshing juice, perfect for a light and healthy drink.",
        "Carrot": "₱120.00  A sweet and nutritious juice, perfect for a healthy and refreshing drink.",
        "Watermelon": "₱120.00  A sweet and refreshing juice, perfect for a hot day or a light and refreshing drink.",
        "Pineapple": "₱120.00  A sweet and tangy juice, perfect for a refreshing and delicious drink.",
        "Cocktail": "₱210.00  A variety of fruits, perfect way to start your evening or to enjoy a refreshing drink after your meal.",
          // Pasta
        "Penne Arabiata": "₱159.00  A classic pasta dish, with penne pasta tossed in a spicy and flavorful tomato sauce. A perfect choice for a hearty and satisfying meal.",
        "Spaghetti Bolognes": "₱179.00  A classic pasta dish, with spaghetti pasta tossed in a rich and flavorful meat sauce. A perfect choice for a hearty and satisfying meal.",
        "Pesto Pasta": "₱210.00  A refreshing and flavorful pasta dish, with pasta tossed in a creamy pesto sauce. A perfect choice for a light and satisfying lunch or dinner.",
        "Lasagna": "₱899.00  A classic baked pasta dish, with layers of pasta, meat sauce, cheese, and béchamel sauce. A perfect choice for a hearty and satisfying meal.",
        // Sandwiches
        "Falafel Sandwich": "₱89.00  A flavorful and healthy sandwich, filled with crispy falafel patties, fresh vegetables, and tahini sauce. A perfect choice for a quick and satisfying lunch or dinner.",
        "Clubhouse Sandwich": "₱129.00  A classic and hearty sandwich, filled with layers of turkey, ham, bacon, cheese, lettuce, and tomato. A perfect choice for a satisfying lunch or dinner.",
        "Crispy Chicken Sandwich": "₱89.00  A juicy and flavorful sandwich, filled with crispy fried chicken, fresh vegetables, and a creamy sauce. A perfect choice for a quick and satisfying lunch or dinner.",
        "Beef Burger": "₱99.00  A juicy and flavorful burger, made with a beef patty, cheese, lettuce, tomato, and onion. A classic comfort food favorite, perfect for a satisfying lunch or dinner.",
        "Cheese Burger": "₱110.00  A juicy and flavorful burger, made with a beef patty, cheese, lettuce, tomato, and onion. A classic comfort food favorite, perfect for a satisfying lunch or dinner.",
        "Ayares Sandwich": "₱169.00  A flavorful and unique sandwich, filled with a blend of Middle Eastern spices and herbs. A perfect choice for a quick and satisfying lunch or dinner..",
        "Chicken Shawarma Sandwich": "₱120.00  A flavorful and aromatic sandwich, filled with tender chicken shawarma, fresh vegetables, and tahini sauce. A perfect choice for a quick and satisfying lunch or dinner.",
        "Beef Shawarma Sandwich": "₱149.00  A flavorful and aromatic sandwich, filled with tender beef shawarma, fresh vegetables, and tahini sauce. A perfect choice for a quick and satisfying lunch or dinner.",
        "Shawarma Platter": "₱299.00  A generous platter of tender shawarma meat, served with fresh vegetables, hummus, and pita bread. A perfect choice for sharing with friends and family.",
        "Shawarma Meat Platter": "₱399.00  A generous platter of tender shawarma meat, served with fresh vegetables, hummus, and pita bread. A perfect choice for sharing with friends and family.",
         // Pizza
        "Chicken Hawaiian": "₱189.00  A classic combination of juicy chicken, sweet pineapple, and savory ham, all topped with melted cheese. A perfect balance of sweet and savory flavors.",
        "Chicken Ham & Cheese": "₱179.00  A simple and satisfying pizza, with tender chicken, savory ham, and melted cheese. A classic choice for a quick and easy meal.",
        "Beef Peperoni": "₱199.00  A spicy and flavorful pizza, with savory beef, spicy pepperoni, and melted cheese. A perfect choice for those who love a little heat.",
        "Chicken Hawaiian Overload": "₱289.00  A loaded version of the Chicken Hawaiian, with extra chicken, pineapple, and ham, for a truly indulgent experience.",
        "Beef Overload": "₱315.00  A loaded pizza with a generous amount of savory beef, pepperoni, and other toppings, for a truly satisfying meal.",
        "Supreme": "₱315.00  A pizza with a variety of toppings, including pepperoni, sausage, mushrooms, onions, and peppers. A classic choice for those who love a little bit of everything.",
        "Tuna Overload": "₱289.00  A pizza loaded with tuna, onions, and other toppings, for a truly satisfying meal.",
        "Pizza Margherita": "₱289.00  A classic Italian pizza, with a simple yet flavorful combination of tomato sauce, mozzarella cheese, and fresh basil. A perfect choice for those who appreciate the simplicity of classic flavors."
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


