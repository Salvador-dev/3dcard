const card = document.querySelector('.card');
const container = document.querySelector('.container');
const body = document.querySelector('body');

let prev = 0;
let calc = 0;
let sensibility = 2;

container.addEventListener("mousedown", (e) =>{

    const x = e.clientX;

    // card.style.animation = 'none';


    container.addEventListener("mousemove", rotate);

    function rotate(e){

        calc = (e.clientX - x) / sensibility;
    
        card.style.transform = `rotateY(${calc + prev}deg)`;
    
        body.style.cursor = `grabbing`;
    
    }

    prev += calc;
    
    window.addEventListener("mouseup", () => {

        container.removeEventListener("mousemove", rotate);

        body.style.cursor = `default`;
        // card.style.animation = 'spin 5s infinite linear';

    });
});

// MOBILE FUNCTIONS

container.addEventListener("touchstart", (e) =>{

    const touchLocation = e.targetTouches[0];


    const x = touchLocation.pageX;

    // card.style.animation = 'none';


    container.addEventListener("touchmove", rotate);

    function rotate(e){

        calc = (touchLocation.pageX - x) / sensibility;
    
        card.style.transform = `rotateY(${calc + prev}deg)`;
    
        body.style.cursor = `grabbing`;
    
    }

    prev += calc;
    
    window.addEventListener("touchend", () => {

        container.removeEventListener("touchmove", rotate);

        body.style.cursor = `default`;
        // card.style.animation = 'spin 5s infinite linear';

    });
});
