// TODO: section 1 - attention list server fetch


// section 2 - pets list
// TODO: server fetch
const pets = [{
    petName: '1',
    deathDate: '2021.02.19',
    favorites: '산책하기',
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
  },
  {
    petName: '2',
    deathDate: '2021.02.20',
    favorites: '산책하기',
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
  },
  {
    petName: '3',
    deathDate: '2021.02.21',
    favorites: '산책하기',
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
  },
  {
    petName: '4',
    deathDate: '2021.02.23',
    favorites: '산책하기',
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
  },
  {
    petName: '5',
    deathDate: '2021.02.24',
    favorites: '산책하기',
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
  },
  {
    petName: '6',
    deathDate: '2021.02.25',
    favorites: '산책하기',
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
  },
  {
    petName: '7',
    deathDate: '2021.02.26',
    favorites: '산책하기',
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
  },
];

const carousel = ($container, pets) => {
  let currentSlide = 0;
  let isMoving = false;
  const DURATION = 500;

  let timerId = null;
  let $Slides = null;

  const move = (currentSlide, duration = 0) => {
    if (duration) isMoving = true;

    $Slides.style.setProperty('--duration', duration);
    $Slides.style.setProperty('--currentSlide', currentSlide);
  };

  document.addEventListener('DOMContentLoaded', () => {
    $container.innerHTML = `
    <div class="pets-card-container">
      <div class="slides">
      ${[pets[pets.length - 2], pets[pets.length - 1], ...pets, pets[0], pets[1]].map(({ petName, deathDate, favorites, image }) => `<a href="#" class="pets-card">
          <img src="${image}" />
          <div class="name">
            <span class="title">이름</span>
            <span class="desc">${petName}</span>
          </div>
          <div class="death-date">
            <span class="title">기일</span>
            <span class="desc">${deathDate}</span>
          </div>
          <div class="favorite">
            <span class="title">좋아했던 것</span>
            <span class="desc">${favorites}</span>
          </div>
        </a>`).join('')}
      </div>
    </div>
    <i class="slide-control prev fas fa-chevron-left"></i>
    <i class="slide-control next fas fa-chevron-right"></i>`;

    $Slides = document.querySelector('.slides');
  });

  window.onload = () => {
    move((currentSlide = 2));

    // Autoplay
    timerId = setInterval(() => move(++currentSlide, DURATION), 2000);
  };

  $container.onclick = ({ target }) => {
    if (!target.classList.contains('slide-control') || isMoving) return;

    // clearInterval(timerId);

    const clickedBtn = target.classList.contains('prev') ? -1 : 1;
    currentSlide += 1 * clickedBtn;
    move(currentSlide, DURATION);
  };

  $container.ontransitionend = () => {
    isMoving = false;

    const clickedBtn = currentSlide === 1 ? 1 : currentSlide === pets.length + 1 ? -1 : 0;

    if (!clickedBtn) return;

    clickedBtn === -1 ? currentSlide = 1 : currentSlide += pets.length * currentSlide;
    move(currentSlide);
  };
};

carousel(document.querySelector('.slides-container'), pets);