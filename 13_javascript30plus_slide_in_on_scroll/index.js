function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function () {
        const later = function () {
            timeout = null;
            if (!immediate) func.apply();
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func();
    };
};

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide() {
    for (let i = 0; i < sliderImages.length; i++) {
        const sliderImage = sliderImages[i];
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        // bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom + 25;
        if (isHalfShown && isNotScrolledPast && sliderImage.complete) {
            sliderImage.classList.add('active');
        } else {
            if (!sliderImage.classList.contains('active')) continue;
            if (!sliderImage.originalSrc) {
                sliderImage.originalSrc = sliderImage.src;
            }
            sliderImage.classList.remove('active');
            sliderImage.src = sliderImage.originalSrc + `?${Date.now()}`;
        }
    }
}

window.addEventListener('scroll', debounce(checkSlide));
