//we'll be writing javascript code here

const header = document.querySelector('.header-container');

const work = document.querySelector('.work');
const writings = document.querySelector('.writings');
const about = document.querySelector('.about');

const bio = document.querySelector('.bio');

function removeStyles() {
    header.style.color = 'pink';
}

header.addEventListener('click', event => {
    const key = event.target ;
    const keyVal = key.textContent;

    if (keyVal == "WORK") {
        bio.textContent = "the work section is.., a work in progress."
        removeStyles()
        work.style.color = 'yellow';
    }
    
    if (keyVal == "ABOUT") {
        bio.textContent = "hi, i'm pragun. i could go on about design, development, side projects — the truth is, none of it is figured out. i'm just a monkey with a plan. this website is my corner in the jungle."
    }

    if (keyVal == "WRITINGS") {
        bio.textContent = "twitter is a place to create outrage about the outrage"
    }
})