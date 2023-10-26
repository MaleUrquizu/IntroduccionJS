const corazon = document.getElementById('corazon');

corazon.addEventListener('click', function() {
    if (corazon.classList.contains('red')) {
        corazon.classList.remove('red')
    } else {
    corazon.classList.add('red');
}
});