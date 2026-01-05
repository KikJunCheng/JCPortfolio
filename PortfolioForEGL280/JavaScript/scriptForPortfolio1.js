new Swiper('.image-wrapper', {

  loop: true,


  pagination: {
    el: '.swiper-pagination',
    clickable: true,//make the pagination clickable
    dynamicBullets: true//only allow a limited number of bullets is visible at a time
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },



});
const projectCards = document.querySelectorAll('.projectCard');

projectCards.forEach(card => {
  const cardFront = card.querySelector('.card-front');
  const project = card.querySelector('.project');

  // Click on card front -> show project
  cardFront.addEventListener('click', () => {
    cardFront.style.display = 'none';
    project.style.display = 'flex';
  });

  // Click on project -> show card front
  project.addEventListener('click', () => {
    project.style.display = 'none';
    cardFront.style.display = 'flex';
  });
});
