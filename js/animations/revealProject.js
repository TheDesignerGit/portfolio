/* eslint-disable linebreak-style */
/* eslint-disable lines-around-comment */
/* eslint-disable linebreak-style */
/* eslint-disable object-property-newline */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
// import barba from '@barba/core';
import gsap from 'gsap';

// barba.hooks.enter(() => {
//     window.scrollTo(0, 0);
//         // add to Anki, 5*s remember to pair w/ scroll-behavior:smooth
// });

const revealProject = (container) => {

    const headerLink = container.querySelector('header a');
    const images = container.querySelectorAll('.image');
    const img = container.querySelectorAll('img');
    const content = container.querySelectorAll('.content');
    const h1 = container.querySelectorAll('h1');
    const hero = container.querySelector('.hero');
    const description = container.querySelectorAll('.content_description');
    const button = container.querySelectorAll('.button');

    // const shadow = container.querySelectorAll('.shadow');

    const tl = gsap.timeline({
        defaults: {
            duration: 1.2, ease: 'power4.out',
        },
    });

    tl
        .set(hero, { autoAlpha: 1 })
        .from(images, { xPercent: -101, stagger: 0.1 }, 0)
        .from(description, { autoAlpha: 0, stagger: 0.03 }, 0.5)
        .from(img, { xPercent: 101, stagger: 0.1 }, 0)
        .from(h1, { xPercent: 70, autoAlpha: 0 }, 0)
        .from(headerLink, { yPercent: 100 }, 0)
        .from(content, { autoAlpha: 0, y: 20 }, 0.2)
        .from(button, { y: 20, stagger: 0.1 }, 0.5);

    return tl;
};

export default revealProject;