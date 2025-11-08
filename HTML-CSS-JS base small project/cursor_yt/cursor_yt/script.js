const btn = document.querySelector('.btn');

btn.addEventListener('mousemove', e => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    btn.style.setProperty('--x',x + 'px');
    btn.style.setProperty('--y',y + 'px');
})