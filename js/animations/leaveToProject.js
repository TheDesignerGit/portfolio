/* eslint-disable linebreak-style */
/* eslint-disable object-property-newline */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import gsap from 'gsap';

const leaveToProject = (container) => {

    const navLinks = container.querySelectorAll('header a');
    const projects = container.querySelectorAll('.image');
    const images = container.querySelectorAll('img');

    const tl = gsap.timeline({
        defaults: {
            duration: 0.4, ease: 'power4.in',
        },
    });

    tl
        .to(navLinks, { yPercent: 100, stagger: 0.05 }, 0)
        .to(projects, { xPercent: 101, stagger: 0.05 }, 0)
        .to(images, { xPercent: -101, autoAlpha: 0.05 }, 0)
        .to('.xtw_logo', {
            duration: 1,
            autoAlpha: 0,
            ease: 'power1.out' }, '-=1');
    return tl;
};

export default leaveToProject;