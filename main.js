// SIDEBAR //                                               // SIDEBAR //
const sidebar = document.querySelector('#sidebar');
const toggle_btn = document.querySelector('.toggle-btn');
const menu = document.querySelector('.menu');
const accueil = document.querySelector('.menu1');
const aPropos = document.querySelector('.menu2');
const mesRea = document.querySelector('.menu3');
const contact = document.querySelector('.menu4');
const invisZone = document.querySelector('.inviszone');


// MAIN ELEMENTS //                                          // ELEMENTS //
const header = document.querySelector('header');
const main = document.querySelector('main');
const body = document.querySelector('body');

// SLIDER //                                                // SLIDER //
const sliderImg = document.querySelector('.img');
const playBtn = document.querySelector('.playbtn');
const backBtn = document.querySelector('.backbtn');
const forwardBtn = document.querySelector('.forwardbtn');
const pausePlay = document.querySelector('#rightbtn');
const pauseBtn = document.querySelector('.pausebtn');
let canSlide = true;
let slide = 0;
let play = true;

// FUNCTIONS //                                             // FUNCTIONS //
function sidebarActive() {
    sidebar.classList.toggle('visible');
    toggle_btn.classList.toggle('left');
    header.classList.toggle('transparent');
    main.classList.toggle('transparent');
    menu.classList.toggle('visible');
    body.classList.toggle('ovh');
    invisZone.classList.toggle('active');
}

function autoSliding() {                                // MOVES THE SLIDER AFTER ASKING THE SLIDE NUMBER //

    if(slide === -1) {                                  // AUTOMATIC RETURN TO LAST SLIDE WHEN "slide" IS INFERIOR TO 0 //
        slide = 5;
    } else if(slide === 6) {                            // AUTOMATIC RETURN TO FIRST SLIDE WHEN "slide" IS SUPERIOR TO 5 //
        slide = 0;
    }

    if (slide === 0) {
        sliderImg.classList.add('pos1');
        sliderImg.classList.remove('pos2','pos3','pos4','pos5','pos6');

    } else if (slide === 1) {
        sliderImg.classList.add('pos2');
        sliderImg.classList.remove('pos1','pos3','pos4','pos5','pos6');

    } else if (slide === 2) {
        sliderImg.classList.add('pos3');
        sliderImg.classList.remove('pos1','pos2','pos4','pos5','pos6');

    } else if (slide === 3) {
        sliderImg.classList.add('pos4');
        sliderImg.classList.remove('pos1','pos2','pos3','pos5','pos6');

    } else if (slide === 4) {
        sliderImg.classList.add('pos5');
        sliderImg.classList.remove('pos1','pos2','pos3','pos4','pos6');

    } else if (slide === 5) {
        sliderImg.classList.add('pos6');
        sliderImg.classList.remove('pos1','pos2','pos3','pos4','pos5');
    }
}

function whatSlide() {                                  // AUTOMATIC SLIDE, WHEN "play" IS ENABLED, WITH 5 SECONDS INTERVAL //
    const intervalId = setInterval(() => {
        if(play) {

            if (slide > 5) {
                slide = -1;
            }

            slide++;
            autoSliding();
        } 
    }, 5000);
}

function pausePlaymode() {                              // BY PRESSING PAUSE/PLAY BUTTONS, MOVES THEM AND DISABLES AUTOMATIC SLIDE //
    playBtn.classList.toggle('resumed');
    pauseBtn.classList.toggle('paused');

    if(play === true) {
        play = false;
    }

    else if(play === false) {
        play = true;
    }
}

function stayPaused() {                                 // BY CLICKING ARROW BUTTONS, DISABLES AUTOMATIC SLIDE INDEFINITELY //     
    play = false;
    playBtn.classList.add('resumed');
    pauseBtn.classList.add('paused');
}

function backSlide() {                                  // FUNCTION TO GO BACK ONE SLIDE //
    if(canSlide == true) {
        slide--;
        autoSliding();

        setTimeout(() => {
            canSlide = true;
        }, 500);
    }

    canSlide = false;
}

function forwardSlide() {                               // FUNCTION TO GO FORWARD ONE SLIDE //
    if(canSlide == true) {
        slide++;
        autoSliding();

        setTimeout(() => {
            canSlide = true;
        }, 500);
    }

    canSlide = false;

}

// EVENTS //                                                // EVENTS //
toggle_btn.addEventListener("click",sidebarActive);
accueil.addEventListener("click",sidebarActive);
aPropos.addEventListener("click",sidebarActive);
mesRea.addEventListener("click",sidebarActive);
contact.addEventListener("click",sidebarActive);
pausePlay.addEventListener("click",pausePlaymode);
backBtn.addEventListener("click",stayPaused);
forwardBtn.addEventListener("click",stayPaused);
backBtn.addEventListener("click",backSlide);
forwardBtn.addEventListener("click",forwardSlide);





