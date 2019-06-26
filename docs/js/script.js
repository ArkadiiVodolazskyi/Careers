// Hamurger menu ...........................

// Pointers: hamburger button, close modal button, overlay, ul.nav (modal)
let hamburgerBtn = document.querySelector("header .nav > li.hamburger");
let closehamburgerBtn = document.querySelector("header .nav > li.close");
let overlay = document.querySelector("body .overlay");
let modal = document.querySelector("header .nav");

// Set listeners: click hamburger, click close, click overlay
hamburgerBtn.addEventListener("click", function(e) {
    modal.classList.add("active");
    overlay.classList.add("active");
    e.preventDefault();
});

closehamburgerBtn.addEventListener("click", function(e) {
    modal.classList.remove("active");
    overlay.classList.remove("active");
    e.preventDefault();
});

overlay.addEventListener("click", function(e) {
    modal.classList.remove("active");
    overlay.classList.remove("active");
    e.preventDefault();
});



// Reviews .................................

// Pointers
let reviews = document.querySelectorAll(".review");
let revDots = document.querySelectorAll(".reviews .dot");

// Initial state
reviews[0].classList.add("active");
revDots[0].classList.add("active");

// Listeners
for(let i = 0; i < reviews.length; i++) {

    let revDotsClick = revDots[i].addEventListener("click", function (e) {

        for(let i = 0; i < revDots.length; i++) {

            reviews[i].classList.remove("active");
            revDots[i].classList.remove("active");

        }

        reviews[i].classList.add("active");
        revDots[i].classList.add("active");

        e.preventDefault();
    });

}