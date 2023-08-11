const searchText = document.querySelector('.text') as HTMLParagraphElement;
const textContent = searchText.textContent;
let word: string;
let spanWords = '';
if (textContent) {
 
    for (word of textContent) {
        if (word === 'и' || word === 'о') {
            spanWords += `<span class="wordOI" style="color:blue">${word}</span>`;
        } else if (word === 'п') {
            spanWords += `<span id="p" style="color:red">${word}</span>`;
        } else {
            spanWords += word;
        }
    }
}

searchText.innerHTML = spanWords

searchText.addEventListener('mouseenter', function () {
    anime({
        targets: '.wordOI',
        rotateX: '10turn',
        duration: 10000,
        loop: true,
        easing: 'easeInOutExpo'
    });
})
searchText.addEventListener('mouseleave', function () {
    anime({
        targets: '.wordOI',
        scale: [1, 2],
        rotateZ: 30,
        duration: 10000,
        skewY: 78,
        loop: true,
        easing: 'easeOutInCubic'
    });
})
searchText.addEventListener('click', function () {
    anime({
        targets: '.wordOI',
        translateX: 20,
        translateY: 10,
        translateZ: 16,
        duration: 5000,
        direction: 'alternate',
        loop: true,
        easing: 'easeOutInBounce'
    });
});


searchText.addEventListener('dblclick',function (event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.id === 'p') {
        anime({
            targets: '#p',
            translateX: 250,
            duration: 1000,
            easing: 'spring(1, 80, 10, 0)'
        });
    }
});