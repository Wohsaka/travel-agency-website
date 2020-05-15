const slides = document.querySelectorAll('.slide')

let slideCount = 0
showSlides()

function showSlides(){
    if (slideCount === slides.length) {
        slides[slideCount - 1].style.display = 'none'
        slideCount = 0
    }
    if (slideCount === 0) {
        slides[slideCount].style.display = 'block'
        slideCount++
        setTimeout(showSlides, 7000)
    } else {
        slides[slideCount - 1].style.display = 'none'
        slides[slideCount].style.display = 'block'
        slideCount++
        setTimeout(showSlides, 7000)
    }
}