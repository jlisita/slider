const slidesData = [
    { title: "VILLAGE", description: "Lorem ipsum dolor sit amet" },
    { title: "VIGNE", description: "Consectetur adipiscing elit" },
    { title: "CHAMPS", description: "Sed do eiusmod tempor incididunt" },
];

const btnLeft = document.querySelector(".slider-btn-left");
const btnRight = document.querySelector(".slider-btn-right");
const btns = [btnLeft,btnRight];
const dots = document.querySelectorAll(".dot");
const imagesCarousel = document.querySelectorAll(".slider-img");
const sliderTitle = document.querySelector(".slider-title");
const sliderLegend = document.querySelector(".slider-legend");

btns.forEach( btn => {
    btn.addEventListener("click", onBtnClick);
});

dots.forEach( dot => {
    dot.addEventListener("click", onDotClick);
});

let slideIndex; // contient l'indice de l'image à afficher
init();

function onBtnClick(e)
{
    let arr = e.currentTarget.className.split("-");
    if (arr[arr.length-1] == "left") slideIndex--;
    else slideIndex++;
    
    if(slideIndex < 0) slideIndex = 0;
    
    if(slideIndex > slidesData.length-1) slideIndex = slidesData.length-1;

    updateslidesData(slideIndex);
}

function onDotClick(e)
{
    let classes = e.currentTarget.className.split(" ");
    let first = classes[0];
    slideIndex = first[first.length-1];
    
    updateslidesData(slideIndex);
}

function updateslidesData(slideIndex)
{
    // mise à jour de l'opacité des puces 
    for(let i = 0; i < imagesCarousel.length; i++)
    {
        if(i == slideIndex)
        {
            dots[i].style.opacity = 1;
        }
        else
        {
            dots[i].style.opacity = 0.5;
        }
    }

    // mise à jour de l'opacité des bouton gauche et droit
    btnLeft.style.opacity = slideIndex == 0 ? 0.5 : 1;
    btnRight.style.opacity = slideIndex == slidesData.length-1 ? 0.5 : 1;

    // mise à jour du titre et du commentaire du slide
    sliderTitle.textContent = slidesData[slideIndex].title;
    sliderLegend.textContent = slidesData[slideIndex].description;

    for(let i = 0; i < imagesCarousel.length; i++)
    {
        imagesCarousel[i].style.transition = 'transform 3s';
        imagesCarousel[i].style.transform = `translateX(${(i - slideIndex) * 100}%)`
    }

}


function init()
{
    slideIndex  = 0;
    updateslidesData(slideIndex);
}
