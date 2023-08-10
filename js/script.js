
// --------------------Slider--------------------
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
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

    function addReview() {
      var nameInput = document.getElementById('name');
      var messageInput = document.getElementById('message');
      
      var name = nameInput.value;
      var message = messageInput.value;
      
      if (name && message) {
        var review = document.createElement('div');
        review.className = 'review';
        
        var nameElement = document.createElement('p');
        nameElement.textContent = 'Имя: ' + name;
        
        var messageElement = document.createElement('p');
        messageElement.textContent = 'Отзыв: ' + message;
        
        review.appendChild(nameElement);
        review.appendChild(messageElement);
        
        var reviewsContainer = document.getElementById('reviews');
        reviewsContainer.appendChild(review);
        
        // Сброс значения полей формы
        nameInput.value = '';
        messageInput.value = '';
      }
    }

    function subscribe() {
      var emailInput = document.getElementById('email');
      var email = emailInput.value;
      
      if (email) {
        alert("Вы успешно подписались на нашу рассылку!");
        emailInput.value = '';
      }
    }