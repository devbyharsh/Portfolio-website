const cards = document.querySelectorAll(".testimonial-card");
const dots = document.querySelectorAll(".dot");
const slider = document.querySelector(".testimonial-slider");

let current = 0
let touchstartX = 0;
let touchendX = 0;

function showSlide(index) {
    cards.forEach(card => {
        card.classList.remove('active');
    })

    dots.forEach(dot => {
        dot.classList.remove("active");
    })

    cards[index].classList.add('active')
    dots[index].classList.add('active')
}

setInterval(() => {
    current = current + 1

    if (current >= cards.length) {
        current = 0
    }

    showSlide(current)
}, 3000);

slider.addEventListener('touchstart', function (e) {
    touchstartX = e.touches[0].clientX
})

slider.addEventListener('touchend', function (e) {
    touchendX = e.changedTouches[0].clientX

    if (touchstartX > touchendX) {
        current += 1;

        if (current >= cards.length) {
            current = 0
        }

        showSlide(current)
    }

    if (touchstartX < touchendX) {
        current -= 1;

        if (current < 0) {
            current = cards.length - 1;
        }

        showSlide(current);
    }
})