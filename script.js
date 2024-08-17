

document.addEventListener('DOMContentLoaded', function () )
    // Slider 1
    const slider1 = document.querySelector('.properties-slider');
    const slides1 = slider1.querySelector('.slides');
    const prev1 = slider1.querySelector('.prev');
    const next1 = slider1.querySelector('.next');
    let index1 = 0;

    function showSlide1() {
        const totalSlides1 = slides1.children.length;
        if (index1 >= totalSlides1) {
            index1 = 0;
        }
        if (index1 < 0) {
            index1 = totalSlides1 - 1;
        }
        slides1.style.transform = `translateX(${-index1 * 100}%)`;
    }

    prev1.addEventListener('click', () => {
        index1--;
        showSlide1();
    });

    next1.addEventListener('click', () => {
        index1++;
        showSlide1();
    });

    showSlide1();

    // Slider 2
    const slider2 = document.querySelector('.properties-slider_2');
    const slides2 = slider2.querySelector('.slides_2');
    const prev2 = slider2.querySelector('.prev_2');
    const next2 = slider2.querySelector('.next_2');
    let index2 = 0;

    function showSlide2() {
        const totalSlides2 = slides2.children.length;
        if (index2 >= totalSlides2) {
            index2 = 0;
        }
        if (index2 < 0) {
            index2 = totalSlides2 - 1;
        }
        slides2.style.transform
    }

// este código de arriba es el nuevo y distinto 


document.addEventListener('DOMContentLoaded', function() {
    var index = 0;
    var slides = document.querySelectorAll('.properties-slider img');
    var totalSlides = slides.length;

    function showSlide(n) {
        slides.forEach(function(slide, i) {
            slide.style.display = (i === n) ? 'block' : 'none';
        });
    }

    function nextSlide() {
        index = (index + 1) % totalSlides;
        showSlide(index);
    }

    function prevSlide() {
        index = (index - 1 + totalSlides) % totalSlides;
        showSlide(index);
    }

    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    showSlide(index);

    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Formulario enviado');
        // Aquí puedes añadir código para enviar los datos a un servidor o almacenar en Excel
    });
});
