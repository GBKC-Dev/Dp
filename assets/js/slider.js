let currentIndex = 0;

const reviewsContainer = document.querySelector('.reviews-container');
const totalSlides = document.querySelectorAll('.review-slide').length;

document.getElementById('next-slide').addEventListener('click', () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlidePosition();
});

document.getElementById('prev-slide').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalSlides - 1;
  }
  updateSlidePosition();
});

function updateSlidePosition() {
  const offset = -currentIndex * 100;
  reviewsContainer.style.transform = `translateX(${offset}%)`;
}

// Automatic sliding every 5 seconds
setInterval(() => {
  document.getElementById('next-slide').click();
}, 5000);
