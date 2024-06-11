const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    console.log("entry.target:", entry.target);
    if (entry.isIntersecting) {
      console.log("Element is visible");
      entry.target.classList.add("visible");
    } else {
      console.log("Element is hidden");
      entry.target.classList.remove("visible");
    }
  });
});

const blocks = document.querySelectorAll(".page-component__wrapper");
blocks.forEach((block) => observer.observe(block));

function createSlider(slider) {
  let isSliding = false;

  function slide() {
      if (!isSliding) {
          isSliding = true;
          const firstImg = slider.querySelector('img:first-child');
          const secondImg = slider.querySelector('img:last-child');
          firstImg.style.transform = 'translateX(-100%)';
          secondImg.style.transform = 'translateX(0)';
          setTimeout(() => {
              slider.appendChild(firstImg);
              firstImg.style.transform = 'translateX(0)';
              secondImg.style.transform = 'translateX(100%)';
              isSliding = false;
          }, 500); // Adjust transition duration in milliseconds
      }
  }

  setInterval(slide, 2000); // Adjust slide interval in milliseconds
}
document.addEventListener('DOMContentLoaded', () => {
  const slider1 = document.querySelector('.image-slider1');
  const slider2 = document.querySelector('.image-slider2');

  if (slider1) createSlider(slider1);
  if (slider2) createSlider(slider2);
});

