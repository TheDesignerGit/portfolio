/* eslint-disable comma-dangle */
/* eslint-disable object-curly-spacing */
/* eslint-disable space-before-blocks */
/* eslint-disable semi */
/* eslint-disable object-property-newline */
/* eslint-disable indent */
/* eslint-disable lines-around-comment */
import barba from '@barba/core';
// import barbaPrefetch from '@barba/core/prefetch';
import gsap from 'gsap';
import { revealProject, leaveFromProject, leaveToProject, animationEnter, animationLeave } from './animations';
        // add to Anki, not need to specify 'index.js', just the folder

// barba.use(barbaPrefetch);

//  ========  Show scroll up .:.  ==========
const scrollTop = () => {
    // console.log('scroll', window.scrollY)
    const scrollUp = document.querySelector('#scroll-up')
    const homeBtn = document.querySelector('#home-btn')

    if (window.scrollY >= window.innerHeight / 3) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')

    // let bottomTenthHeight = window.innerHeight - (window.innerHeight / 4)
    let bottomTenthHeight = window.innerHeight / 3
    //     console.log('scroll', window.scrollY, bottomTenthHeight)
    if (window.scrollY >= bottomTenthHeight) homeBtn.classList.add('show-scroll-home'); else homeBtn.classList.remove('show-scroll-home')

}
window.addEventListener('scroll', scrollTop)

// ========  Barba Animations ========  .:.

//  ========  reset active link .:.
const resetActiveLink = () => {
    gsap.set('a.is-active span', {
        xPercent: -100,
        transformOrigin: 'left',
    })
    // add to Anki, 3*s - xPercent, transformOrigin
}

barba.hooks.enter(() => {
    window.scrollTo(0, 0)
        // add to Anki, 5*s remember to pair w/ scroll-behavior:smooth
})
barba.hooks.after(() => {
    // console.log('after hook')
})

barba.init({
    transitions: [
        {
            name: 'detail',
            to: {
                namespace: ['detail-page']
            },
            once({next}){
                revealProject(next.container)
            },
            leave: ({ current }) => leaveToProject(current.container),
            enter({next}){
                // gsap.to('.xtw_logo', {
                //     duration: 2,
                //     autoAlpha: 0,
                //     ease: 'power1.out'});
                revealProject(next.container)
            },
        },
        {
            name: 'from-detail',
            from: {
                namespace: ['detail-page']
            },
            leave: ({ current }) => leaveFromProject(current.container),
            enter({next}){
                gsap.from('header a', {
                    duration: 1,
                    yPercent: 100,
                    stagger: 0.2,
                    ease: 'power1.out',
                });
                gsap.from('.xtw_logo', {
                    delay: 1,
                    duration: 2.5,
                    autoAlpha: 0,
                    ease: 'power1.out'});
                // gsap.from('header .contact', {
                //     duration: 1.2,
                //     yPercent: 100,
                //     stagger: 0.2,
                //     ease: 'power1.out',
                // })
                animationEnter(next.container)
            }
        },
        {
            name: 'general-transition',
            once({ next }) {
                resetActiveLink();
                // console.log('once');
                gsap.from('header a', {
                    duration: 2,
                    yPercent: 100,
                    stagger: 0.2,
                    ease: 'power1.out',
                    onComplete: () => animationEnter(next.container),
                })

                gsap.from('.xtw_logo', {
                    delay: 2,
                    duration: 3.5,
                    autoAlpha: 0,
                    ease: 'power1.out'});
                // add to Anki, next.container
                // gsap.from('header .contact', {
                //     duration: 3.7,
                //     opacity: 0,
                //     yPercent: 100,
                //     stagger: 0.2,
                //     ease: 'power1.out',
                // })
            },
            leave: ({ current }) => animationLeave(current.container),
            enter({ next }) {
                // console.log('entering');
                animationEnter(next.container)
            },
        },

    ],
})

// ===== Gallery =====
let galleryContainer = document.querySelector('.gallery_container')
let galleryImage = document.querySelector('.gallery_image')
let allImages = document.querySelectorAll('img')

galleryContainer.addEventListener('click', function() {
    galleryContainer.classList.toggle('active')
})

galleryImage.addEventListener('click', function() {
    galleryContainer.classList.toggle('active')
})

allImages.forEach((x) => {
    x.addEventListener('click', function(e) {
        // console.log(e.target.attributes.src.value)
        let current = e.target.attributes.src.value
        galleryContainer.classList.toggle('active')
        galleryImage.setAttribute('src', current)
    })
})
