function toggleMenu() {
    var menu = document.querySelector('nav ul');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
