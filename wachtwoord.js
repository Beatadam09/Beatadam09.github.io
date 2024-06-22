function checkPassword() {
    var password = document.getElementById('password-input').value;
    
    if (password === 'Adam') {
        document.body.classList.add('show-content');
        document.getElementById('password-overlay').style.display = 'none';
    } else {
        alert('Incorrecte Naam, probeer het opnieuw.');
    }
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
