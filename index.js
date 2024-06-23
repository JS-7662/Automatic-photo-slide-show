const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');
let slideNumber = 1;
const length = images.length;

const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 800}px)`;
    slideNumber++;
};

const prevslide = () => {
    slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
    slideNumber--;
};

const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
};

const getLastSlide = () => {
    slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
    slideNumber = length;
};

right.addEventListener('click', () => {
    if (slideNumber < length) {
        nextSlide()
    } else {
        getFirstSlide()
    }
});

left.addEventListener('click', () => {
    if (slideNumber > 1) {
        prevslide()
    } else {
        getLastSlide()
    }
});

/*function xxx(params) {
   console.log("call pass")
}*/

setInterval(myTimer, 3000);

function myTimer() {
    if (slideNumber < length) {
        nextSlide();
        callMyTimer();
        function callMyTimer() { myTimer };
    } else {
        myTimer
        getFirstSlide();
    };
};
