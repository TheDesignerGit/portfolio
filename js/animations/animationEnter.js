/* eslint-disable object-curly-spacing */
/* eslint-disable semi */
/* eslint-disable lines-around-comment */
/* eslint-disable linebreak-style */
/* eslint-disable object-property-newline */
/* eslint-disable indent */
import gsap from 'gsap';

const animationEnter = (container) => {
    // return gsap.from(container, { autoAlpha: 0, duration: 0.5, clearProps: 'all', ease: 'none'});
        // add to Anki, 3*s - clearProps, autoAlpha

    const activeLink = container.querySelector('a.is-active span');
    const projects = container.querySelectorAll('.project')
    const images = container.querySelectorAll('.image')
    const img = container.querySelectorAll('img')
        // add to Anki, selectors

    const tl = gsap.timeline({
        defaults: {
            duration: 0.9,
            ease: 'power4.out',
        },
    })

    tl
        .set(projects, {autoAlpha: 1})
                // add to Anki 3*s - set method. autoAlpha overrides "visibility: hidden",
                    // 5*s - using Nodelist as target
        .fromTo(activeLink, {xPercent: -101}, {xPercent: 0, transformOrigin: 'left'}, 0)
            // add to Anki, 3*s - fromTo method, xPercent property
        .from(images, {xPercent: -101, stagger: 0.1}, 0)
        // .from(img, {xPercent: 101, stagger: 0.1}, 0)

    return tl
}

export default animationEnter;