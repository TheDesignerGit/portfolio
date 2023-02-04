/* eslint-disable linebreak-style */
/* eslint-disable object-property-newline */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import gsap from 'gsap';

const leaveFromProject = (container) => {

    // window.scrollTo(0, 0);

    const headerLink = container.querySelector('header a');
    const projects = container.querySelectorAll('.image');
    const images = container.querySelectorAll('img');
    const content = container.querySelectorAll('.content');
    const description = container.querySelectorAll('.content_description');
    const shadow = container.querySelectorAll('.shadow');
    const buttons = container.querySelector('.home_button, .scollup');

    const tl = gsap.timeline({
        defaults: {
            duration: 0.4, ease: 'power1.in',
        },
    });

    tl
        .to(shadow, { autoAlpha: 0, ease: 'power1.out' }, 0)
        .to(buttons, { autoAlpha: 0, ease: 'power1.out' }, 0)
        .to(description, { autoAlpha: 0, ease: 'power1.out' }, 0)
        .to(headerLink, { yPercent: 101 }, 0)
        .to(projects, { xPercent: 100, stagger: 0.05 }, 0)
        .to(content, { autoAlpha: 0, ease: 'none' }, 0.2)
        .to(images, { autoAlpha: 0, xPercent: -100, stagger: 0.05 }, 0);

    return tl;

};

export default leaveFromProject;