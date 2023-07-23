'use strict';

const shareBtn = document.getElementById('share-btn');

const active = document.getElementById('active');

const share_btn = document.getElementById('share_btn');

const b_color = document.getElementById('share-btn');

shareBtn.addEventListener('click', () => {
    active.classList.toggle('active-state');
});
share_btn.addEventListener('click', () => {
    active.classList.toggle('active-state');
});
b_color.addEventListener('click', () => {
    b_color.classList.toggle('clicked');
});
