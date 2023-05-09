const carouselImg = document.querySelector(".img-container ");
const buttons = document.querySelectorAll(".btn-container");
const numOfImg = document.querySelectorAll(".img-container img").length;
const imgWidth = document.querySelectorAll(".img-container img")[0].clientWidth;
let imgIndex = 1;
let xAxisPosition = 0

buttons.forEach(button => {
    button.addEventListener('click', function (event) {
        if (event.target.id === 'next') {
            if (imgIndex < numOfImg) {
                imgIndex++;
                xAxisPosition -= imgWidth;
                carouselImg.style.transform = `translateX(${xAxisPosition}px)`
                // carouselImg.style.transition = "transform 0.25s";

            } else if (imgIndex === numOfImg) {
                imgIndex = 1
                xAxisPosition = 0;
                carouselImg.style.transform = `translateX(${xAxisPosition}px)`
                // carouselImg.style.transition = "none";
            }

        } else if (event.target.id === 'previous') {
            if (imgIndex > 1) {
                imgIndex--;
                xAxisPosition += imgWidth;
                carouselImg.style.transform = `translateX(${xAxisPosition}px)`
            } else if (imgIndex === 1) {
                imgIndex = numOfImg
                xAxisPosition -= (imgWidth * (numOfImg - 1));
                carouselImg.style.transform = `translateX(${xAxisPosition}px)`
            }
        }
    })
})

// carouselImg.addEventListener('transitionend', (e) => {
//     if imgIndex is second last, take the first image and append it to last
//     console.log(e)
//     if (imgIndex === numOfImg) {
//         carouselImg.style.transition = "none";
//         imgIndex = numOfImg;
//         xAxisPosition = 0;
//         carouselImg.style.transform = `translateX(${xAxisPosition}px)`
//     }
// })






