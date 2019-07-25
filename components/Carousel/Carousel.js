/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const imgUrls = [
  "./assets/carousel/mountains.jpeg",
  "./assets/carousel/computer.jpeg",
  "./assets/carousel/trees.jpeg",
  "./assets/carousel/turntable.jpeg"
];

const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.appendChild(Carousel(imgUrls));

function Carousel(array){
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');

  const leftBtn= document.createElement('div');
  leftBtn.classList.add('left-button');
  leftBtn.innerText = '<';


  const rightBtn= document.createElement('div');
  rightBtn.classList.add('right-button');
  rightBtn.innerText = '>';

  carousel.appendChild(leftBtn);

  array.forEach( img => carousel.appendChild(createImg(img)));

  carousel.appendChild(rightBtn);
  
  return carousel;
}

function createImg(src) {
  const img = document.createElement('img');
  img.src = src;

  return img;
}


function initiateCarousel() {
  this.carousel = document.querySelector('.carousel');
  this.index = 0;

  this.leftBtn = document.querySelector('.left-button');
  this.leftBtn.addEventListener('click', this.leftClick.bind(this));

  this.rightBtn = document.querySelector('.right-button');
  this.rightBtn.addEventListener('click', this.rightClick.bind(this));

  this.imgs = document.querySelectorAll('.carousel img');

  this.displayImg.call(this, this.index);
}

initiateCarousel.prototype.displayImg = function(idx) {
  this.imgs.forEach( img => img.style.display = 'none');

  this.imgs[idx].style.display = 'block';
}

initiateCarousel.prototype.leftClick = function(e) {
  if(this.index === 0) {
    this.index = this.imgs.length - 1;
  } else {
    this.index--;
  }

  this.displayImg(this.index);
}

initiateCarousel.prototype.rightClick = function(e) {
  if(this.index === this.imgs.length-1){
    this.index = 0;
  } else {
    this.index++;
  }

  this.displayImg(this.index);
}

new initiateCarousel();
