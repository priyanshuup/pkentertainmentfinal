document.addEventListener("DOMContentLoaded", function () {
    // Fetch the navbar first
    fetch("../navbar.html") // Adjust the path if necessary
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;

            // Now that the navbar is injected, initialize the menu toggle
            initializeMenu();
        })
        .catch(error => console.error("Error loading the navbar:", error));
});

function initializeMenu() {
    const burgerMenu = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');

    if (!burgerMenu || !navList) {
        console.error("Navbar elements not found!");
        return;
    }

    let flag = 1;  // Corrected variable scope

    burgerMenu.addEventListener('click', function () {
        if (flag === 1) {
            navList.classList.toggle('show');
            burgerMenu.classList.toggle('active');
            flag = 0;
        } else {
            navList.classList.remove('show');
            burgerMenu.classList.remove('active');
            flag = 1;
        }
    });
}
