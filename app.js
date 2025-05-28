document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();

        card.style.setProperty('--x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--y', `${e.clientY - rect.top}px`);
    })
});

document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();

    document.getElementById('succesMessage').style.display = 'block';

    this.reset();

    setTimeout(function(){
        document.getElementById('succesMessage').style.display = 'none';
    }, 5000);
})