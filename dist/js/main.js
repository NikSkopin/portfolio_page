//Smooth scroll

$('.menu-nav a').on('click', function(e) {
    if (this.hash !=='') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate( {
            scrollTop: $(hash).offset().top
        },
        800
        );
    }
});

//Navigation menu

/* Open */
function openNav() {
    document.querySelector(".overlay").style.height = "100%";
}

/* Close */
function closeNav() {
    document.querySelector(".overlay").style.height = "0%";
} 