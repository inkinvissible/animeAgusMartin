anime({
  targets: '.animatedHr',
  delay: 500,
  keyframes: [
    { translateX: -20 },
    { translateY: -280 },
    { translateX: 400 },
    { translateY: 0 },
    { translateX: 0 }
  ],
  duration: 2000,
  easing: 'easeOutElastic(1, .8)',
  loop: true
});

var tl = anime.timeline({
  easing: 'easeOutExpo',
  duration: 750,
  direction: 'alternate',
  loop: true
});

// Add children
tl
  .add({
    targets: '.palo1',
    translateX: 250,
    scale: 2,
    borderRadius: ['0%', '20%'],
    duration: 1000
  })
  .add({
    targets: '.palo1',
    translateY: -20,
    translateX: 20,
    scale: 4,
    borderRadius: ['20%', '50%']
  })
  .add({
    targets: '.palo2',
    translateX: 400,
    scale: 5,
    duration: 300,
    rotateX: '1turn'
  })
  .add({
    targets: '.palo3',
    translateX: 250,
    translateY: 150,
    scale: 7,
    duration: 250
  })
  .add({
    targets: '.palo4',
    borderLeft: '25px solid transparent',
    borderRight: '25px solid transparent',
    borderBottom: '50px solid turquoise',
    translateX: 350,
    translateY: -200,
    scale: 2,
    duration: 1000
  });


let animation = anime({
  targets: '.trabajosFotos',
  translateX: 1000,
  delay: function (el, i) { return i * 100; },
  direction: 'alternate',
  loop: true,
  autoplay: true,
  easing: 'easeInOutSine'
});
document.querySelector('.play').onclick = animation.play;
document.querySelector('.pause').onclick = animation.pause;

anime({
  targets: '.textHabilidades',
  scale: [
    {value: .1, easing: 'easeOutSine', duration: 500},
    {value: 1, easing: 'easeInOutQuad', duration: 1200}
  ],
  delay: anime.stagger(350, {grid: [14, 5], from: 'center'}),
  direction: 'alternate',
  loop: true
});

//Scroll To
const links = document.querySelectorAll(".scrollTo");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

