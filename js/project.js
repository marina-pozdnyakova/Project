
var slideIndex = 1;
//первый вызов функции
showSlides();

function showSlides() {
  var i;
  //получаем массивы элементов по имени класса
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  //проверка если slideIndex индекс вышел за рамки существующего кол-ва элементов - если что меняем на первый (показываем сначала)
  if (slideIndex > slides.length) {slideIndex = 1} 

  //все слайды делаем стайл дисплей none
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  //все дотсы - делаем не активные
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  //текущий выбранный слайд и дот делаем видимым и активным
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";

  //следущая итерация перед рекурсивным вызовом функции
  slideIndex++;
  //вызываем опять через 6 сек эту же функцию
  setTimeout(showSlides, 6000); // Change image every 6 seconds
}

function plusSlides(n) {
  showSlidesSwitch(slideIndex += n);
}

function currentSlide(n) {
  showSlidesSwitch(slideIndex = n);
}

function showSlidesSwitch(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}  
  //если предыдущего элемента не существует - показываем последний в массиве  
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
