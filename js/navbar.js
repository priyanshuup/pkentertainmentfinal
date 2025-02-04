document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("navbar-container").innerHTML = `
        <header>
            <figure>
                <img src="https://i.postimg.cc/yYd5g7Jz/PK-Entertainment-Logo.png" alt="PK Entertainment Logo">
            </figure>
            <nav>
                <ul class="nav-menu">
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="#about">DJ</a></li>
                    <li><a href="#wedding">Wedding</a></li>
                    <li><a href="#services">Portfolio</a></li>
                    <li><a href="#entertainment">Entertainment</a></li>
                    <li><a href="#specialeffects">Special Effects</a></li>
                    <li><a href="./Rentals.html">Rentals</a></li>
                    <li><a href="./contact.html">Contact Us</a></li>
                </ul>
                <div class="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </nav>
        </header>
    `;

    initializeMenu();  // Reinitialize navbar functionality
});

function initializeMenu() {
    const burgerMenu = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-menu');

    if (!burgerMenu || !navList) {
        console.error("Navbar elements not found!");
        return;
    }

    let flag = 1;

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
