/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable lines-around-comment */
/* eslint-disable linebreak-style */
/* eslint-disable object-property-newline */
/* eslint-disable indent */
import gsap from 'gsap';

const animationLeave = (container) => {

    const activeLink = container.querySelector('a.is-active span');
    const images = container.querySelectorAll('.image')
    const img = container.querySelectorAll('img')

    const tl = gsap.timeline({
        defaults: {
            duration: 0.4,
            ease: 'power1.in',
        }
    })

    tl
        // .set(projects, { autoAlpha: 1 })
        .to(activeLink, { xPercent: 101, transformOrigin: 'left' }, 0)
        .to(images, { xPercent: 101, stagger: 0.1 }, 0)
        .to(img, { xPercent: -101, stagger: 0.1 }, 0)
        // .to(container, { autoAlpha: 0, duration: 0.5, clearProps: 'all', ease: 'none' })

    return tl
        // note: maybe U have to return something from this given it's related to async?
}

export default animationLeave;