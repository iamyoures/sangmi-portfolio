
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});




const menuLinks = document.querySelectorAll('.mobile-menu a');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });
});




const items = document.querySelectorAll('.skill-item');
const descBox = document.getElementById('descBox');

items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        descBox.innerText = item.dataset.desc;
        descBox.style.display = 'block';
    });
    item.addEventListener('mouseleave', () => {
        descBox.style.display = 'none';
    });
});



const moreBtn = document.getElementById('moreBtn');
const hiddenThumbs = document.querySelectorAll('.thumb.hidden');
let isExpanded = false;

moreBtn.addEventListener('click', () => {
    hiddenThumbs.forEach(thumb => {
        thumb.style.display = isExpanded ? 'none' : 'flex';
    });
    moreBtn.textContent = isExpanded ? '더보기' : '접기';
    isExpanded = !isExpanded;
});
