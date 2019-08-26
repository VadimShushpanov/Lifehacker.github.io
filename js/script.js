  let slideIndex = 1
  let slidePhotoIndex = 1

  showSlides(slideIndex);
  showPhotoSlides(slidePhotoIndex);

  window.onresize = function(e){
    showPhotoSlides(slidePhotoIndex);
  }

  function  currentPhotoSlide  (n) {
    showPhotoSlides(slidePhotoIndex = n);
  };
  function  showPhotoSlides (n) {
    var i;
    var slidesPhoto = document.getElementsByClassName("photos__item");
    var peopleInfo = document.getElementsByClassName("photos__item-info");
    var peopleName = document.getElementsByClassName("photos__item-name");
    var dots = document.getElementsByClassName("blogPhotoSlider__dots--dot");
  
    if (document.documentElement.clientWidth < 801 ) {
      if (n > slidesPhoto.length) {
        slidePhotoIndex = 1
      }
      if (n < 1) {
        slidePhotoIndex = slidesPhoto.length
      }
      for (i = 0; i < slidesPhoto.length; i++) {
        slidesPhoto[i].style.display = "none";
        peopleInfo[i].style.visibility = "hidden";
        peopleName[i].style.visibility = "hidden";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-Photo", "");
      }
      slidesPhoto[slidePhotoIndex - 1].style.width = "100%";
      slidesPhoto[slidePhotoIndex - 1].style.display = "block";
      peopleInfo[slidePhotoIndex - 1].style.visibility = "visible";
      peopleName[slidePhotoIndex - 1].style.visibility = "visible";
      dots[slidePhotoIndex - 1].className += " active-Photo";
    } else {
      for (i = 0; i < slidesPhoto.length; i++) {
        slidesPhoto[i].style.display = "block";
        slidesPhoto[i].style.width = "25%" ;
        peopleInfo[i].style.visibility = "hidden";
        peopleName[i].style.visibility = "visible";
      }
    }
  };
  function plusSlides (n) {  
    showSlides(slideIndex += n);
  };
  function currentSlide (n) {
    showSlides(slideIndex = n);
  };
  function showSlides  (n) {
    var i;
    var slides = document.getElementsByClassName("blogSlides");
    var dots = document.getElementsByClassName("blogSlider__dots--dot");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
 
