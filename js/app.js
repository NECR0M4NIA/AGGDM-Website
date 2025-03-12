const $navLinks = document.querySelectorAll('.nav-links');
const $links = document.querySelectorAll('a');

// PAGES
const $home = document.querySelector('#home');
const $gallery = document.querySelector('#gallery');
const $download = document.querySelector('#download');
const $contact = document.querySelector('#contact');
const $about = document.querySelector('#about');

console.log();

$links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

const pages = [$home, $gallery, $download, $contact, $about];

$navLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        document.title = "AGGDM - " + link.textContent;
        pages.forEach((page, i) => {
            if (i === index) {
                page.classList.remove('hidden');
            } else {
                page.classList.add('hidden');
            }
        });
    });
});