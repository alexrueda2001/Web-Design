const arrow = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrow.forEach((arrow, i)=>{
    let clickCounter = 0;

    arrow.addEventListener("click",()=>{
        clickCounter++;
        if (clickCounter  < 9){

            movieLists[i].style.transform = `translateY(${
                movieLists[i].computedStyleMap().get("transform")[0].y.value
                -movieLists[i].offsetHeight}px)`;
        } else {
            movieLists[i].style.transform = "translateY(0)";
            clickCounter=0;
        }
        


    });


});