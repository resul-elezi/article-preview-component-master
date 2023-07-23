'use strict';

const shareBtn = document.getElementById('shareBtn');

const active = document.getElementById('active');

const share_btn = document.getElementById('shareBtn2');

const b_color = document.getElementById('shareBtn');

shareBtn.addEventListener('click', () => {
    active.classList.toggle('active-state');
});
share_btn.addEventListener('click', () => {
    active.classList.toggle('active-state');
});
b_color.addEventListener('click', () => {
    b_color.classList.toggle('clicked');
});
