const header = document.querySelector('.header-container');
const work = document.querySelector('.work');
const writings = document.querySelector('.writings');
const about = document.querySelector('.about');
const image = document.querySelector('img')
const bio = document.querySelector('.bio');

header.addEventListener('click', event => {
    const key = event.target ;
    const keyVal = key.textContent;

    key.style.color = 'yellow';
    key.style.fontWeight = '800';

    if (keyVal == "WORK") {
        bio.textContent = "the work section is... a work in progress."
        about.style.color = 'rgb(253, 253, 97)';
        about.style.fontWeight = '400';
        writings.style.color = 'rgb(253, 253, 97)';
        writings.style.fontWeight = '400';

        image.src = './images/starryWorld.jpg';
    }
    
    if (keyVal == "ABOUT") {
        bio.textContent = "hi, i'm pragun. i could go on about design, development, side projects — the truth is, none of it is figured out. i'm just a monkey with a plan. this website is my corner in the jungle."
        work.style.color = 'rgb(253, 253, 97)';
        work.style.fontWeight = '400';
        writings.style.color = 'rgb(253, 253, 97)';
        writings.style.fontWeight = '400';

        image.src = './images/gradStarry.jpg'
    }

    if (keyVal == "WRITINGS") {
        bio.textContent = "twitter is a place to create outrage about the outrage"
        about.style.color = 'rgb(253, 253, 97)';
        about.style.fontWeight = '400';
        work.style.color = 'rgb(253, 253, 97)';
        work.style.fontWeight = '400';

        image.src = './images/starryCity.jpg'
    }
})