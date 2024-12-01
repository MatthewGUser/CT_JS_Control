// Task 1: Implement a conditional statement to check if a user is logged in
let loggedIn = true; // Change this to false to simulate a user who is not logged in

// Task 2: If logged in, loop over the 'cart' array and display the products; otherwise, inform the user
let cart = ['Shirts', 'Shoes', 'Bread', 'Cell Phone', 'Candy Corn', 'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)', 'Tomato'];

if (loggedIn) {
    console.log("You are logged in. Here are the items in your cart:");
    for (let i = 0; i < cart.length; i++) {
        console.log(cart[i]);
    }
} else {
    console.log("You need to log in before you can view your cart.");
}
