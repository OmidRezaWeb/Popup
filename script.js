window.onload = function () {
    let popup = document.querySelector('.popup');
    const open = document.getElementById('open')
    const close = document.getElementById('close')
    open.addEventListener('click', function () {
        document.body.style.backgroundColor = 'rgba(0,0,0,0.5)';
        open.style.display= 'none'
        popup.classList.add('active')
    })

    close.addEventListener('click', function () {
        document.body.style.backgroundColor = 'aliceblue';
        open.style.display= 'block'
        popup.classList.remove('active')
    })
}