let partsSlider = document.querySelector('.innovation__inner').children;
let slider = document.querySelector('.innovation__slider');

slider.onclick = function (event) {
    let target = event.target.closest('button');

    if (!target) return;

    if (target.classList.contains('disabled')) return;

    if (this.children[0].classList.contains('disabled')) {
        this.children[0].classList.remove('disabled');
        this.children[1].classList.add('disabled');
        partsSlider[1].style.right = '0';
        return;
    }

    if (this.children[1].classList.contains('disabled')) {
        this.children[1].classList.remove('disabled');
        this.children[0].classList.add('disabled');

        return;
    }
}
