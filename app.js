const menu = document.querySelector('.menu')
const hamburger = document.querySelector('.iconhamburger')
const navbar = document.querySelector('.navbar')
const section = document.querySelector('.section')
const section_2=document.querySelector('.header-2');
const tab=document.querySelector('.tab-2')

hamburger.addEventListener('click', () => {
    section.classList.toggle('sectionactive');
    section_2.classList.toggle('sectionactive');
    navbar.classList.toggle('show');
    hamburger.classList.toggle('active1');
    menu.classList.toggle('mobilemenu');
    
    
})



hamburger.addEventListener('click', () => {
      if(screen.width>=768 && screen.width<1223){
      section.classList.toggle('sectiontab')
      }
    })





var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}







// Получаем переменные
let arrowLeft = document.getElementById("arrow-left"),
    arrowRight = document.getElementById("arrow-right"),
    sliderImg = document.getElementById("slider-img"),
    dotsWrap = document.getElementsByClassName("slider-dots")[0],
    dots = document.getElementsByClassName("dot2"),
    left = -400,
    imgWidth = 200;

// Стартовая позиция слайдера
sliderImg.style.left = left + 'px';

//Функция перелистывания
slideTo = (direction) => {
  if (direction == "left") {
    left = left - imgWidth;
  }
  
  if (direction == "right") left += imgWidth;
  if (left < -800) left = 0;
  if (left > 0) left =-800;
  //Убираем все активные классы
  for (let item of dots) {
    item.classList.remove("active3");
  }
  
  // Вставляем функцию switch для соединения строелок и точек при переключении стрелками
  switch (left) {
    case 0:
      dots[0].classList.add("active3");
      break;
    case -400:
      dots[1].classList.add("active3");
      break;
    case -800:
      dots[2].classList.add("active3");
      break;
  }
  sliderImg.style.left = left + "px";
}

// Автоматическое переключение
  let timerId = setInterval(() => {
    slideTo("left"); //Направление перелистывания можно поставить right
  }, 1000);
  
arrowLeft.addEventListener("click", () => {
  clearInterval(timerId); //Останавливает таймер при клике на левую кнопку
  slideTo("left");
});

arrowRight.addEventListener("click", () => {
  clearInterval(timerId); //Останавливает таймер при клике на правую кнопку
  slideTo("right");
});

// Переключение точек 
dotsWrap.addEventListener("click", (event) => {
  clearInterval(timerId); //Останавливает таймер при клике на точки
  let target = event.target;
  for (let item of dots) {
    item.classList.remove("active3");
  }
  if(target.classList.contains("dot")) {
     target.classList.add("active3");
  }
  
  // Перелистывание слайдера при нажании на точку
  switch (target) {
    case dots[0]:
      left = 0;
      break;
    case dots[1]:
      left = -400; // если поставить -200, и следующее -400то листается по одной картинке
      break;
    case dots[2]:
      left = -800; // если поставить -400, и предыдущее -200то листается по одной картинке
      break;
  }
  
  sliderImg.style.left = left + 'px';
 
  
  })




 
  