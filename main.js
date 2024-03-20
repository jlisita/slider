const slidesData = [
    { title: "VILLAGE", description: "Lorem ipsum dolor sit amet" },
    { title: "VIGNE", description: "Consectetur adipiscing elit" },
    { title: "CHAMPS", description: "Sed do eiusmod tempor incididunt" },
];

const btns = document.querySelectorAll(".slider-btn");
const dots = document.querySelectorAll(".dot");
const imagesCarousel = document.querySelectorAll(".slider-img");

btns.forEach( btn => {
    btn.addEventListener("click", onBtnClick);
});

dots.forEach( dot => {
    dot.addEventListener("click", onDotClick);
});

let slideIndex; 
init();

function onBtnClick(e)
{
    let nomClass = e.currentTarget.className;
    let array = nomClass.split("-");
    if (array[array.length-1] == "left") slideIndex--;
    else slideIndex++;
    
    if(slideIndex < 0)
    {
        slideIndex = 2;
    }
    if(slideIndex > 2)
    {
        slideIndex = 0;
    }
    console.log(slideIndex);

    updateslidesData(slideIndex);
}

function onDotClick(e)
{
    
    let classes = e.currentTarget.className.split(" ");
    let first = classes[0];
    slideIndex = first[first.length-1];

    if(slideIndex < 0)
    {
        slideIndex = 2;
    }
    if(slideIndex > 2)
    {
        slideIndex = 0;
    }

    updateslidesData(slideIndex);
}

function updateslidesData(slideIndex)
{
    for(let i = 0; i < imagesCarousel.length; i++)
    {
        if(i == slideIndex)
        {
            imagesCarousel[i].style.opacity = 1;
            dots[i].style.opacity = 1;

        }
        else
        {
            imagesCarousel[i].style.opacity = 0;
            dots[i].style.opacity = 0.5;
        }
    }
}

function init()
{
    slideIndex  = 0;
    for(let i = 0; i < imagesCarousel.length; i++)
    {
        if(i == slideIndex)
        {
            imagesCarousel[i].style.opacity = 1;
            dots[i].style.opacity = 1;
    
        }
        else
        {
            imagesCarousel[i].style.opacity = 0;
            dots[i].style.opacity = 0.5;
        }
    }
}
