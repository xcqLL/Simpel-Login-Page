document.addEventListener('DOMContentLoaded', function () {
    const starsContainer = document.getElementById('stars');
    const numStars = 150; 
  
    for (let i = 0; i < numStars; i++) {
      createStar();
    }
  
    function createStar() {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.left = `${Math.random() * window.innerWidth}px`;
      star.style.animationDuration = `${Math.random() * 5 + 3}s`; 
      starsContainer.appendChild(star);
    }
  });
  