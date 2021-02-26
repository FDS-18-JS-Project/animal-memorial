import displayAnimalRegisterPage from './animal-register';
import displayAnimalPostPage from './animal-post';
import { logout, getPetsInfo } from '../utils/common';

let $attentionPetCard = '';
let $allPetsCard = '';

const getPetIdForPost = e => {
  const petId = e.currentTarget.dataset.petid;
  localStorage.setItem('petId', petId);
  displayAnimalPostPage();
};

const renderAttentionPets = ($container, pets) => {
  $container.innerHTML = `${[...pets]
    .filter((_, i, pets) => i > pets.length - 5)
    .map(
      ({
        name,
        image,
        _id
      }) => `<div class="attention-card" data-petId="${_id}">   
    <img src="${image}" alt="">
    <p class="name">${name}</p>
  </div>`
    )
    .join('')}`;

  document.querySelectorAll('.attention-card').forEach($attentionCard => {
    $attentionCard.addEventListener('click', getPetIdForPost);
  });
};

const renderAllPets = ($container, pets) => {
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
  console.log(pets);
  $container.innerHTML = `
    <div class="pets-card-container">
      <div class="slides">
      ${[
        pets[pets.length - 2],
        pets[pets.length - 1],
        ...pets,
        pets[0],
        pets[1]
      ]
        .map(
          ({
            name,
            deathDate,
            favorites,
            image,
            _id
          }) => `<div class="pets-card" data-petId="${_id}">
          <img src="${image}" />
          <div class="name">
            <span class="title">이름</span>
            <span class="desc">${name}</span>
          </div>
          <div class="death-date">
            <span class="title">기일</span>
            <span class="desc">${deathDate.slice(0, 10)}</span>
          </div>
          <div class="favorite">
            <span class="title">좋아했던 것</span>
            <span>${
              favorites[1] !== '' ? favorites[0] + ',' : favorites[0]
            }</span>
            <span>${favorites[2] !== '' ? favorites[1] + ',' : ''}</span>
            <span>${favorites[2]}</span>
          </div>
        </div>`
        )
        .join('')}
      </div>
    </div>
    <i class="slide-control prev fas fa-chevron-left"></i>
    <i class="slide-control next fas fa-chevron-right"></i>`;

  $Slides = document.querySelector('.slides');

  move((currentSlide = 2));
  timerId = setInterval(() => move(++currentSlide, DURATION), 2000);

  $container.onclick = ({ target }) => {
    if (!target.classList.contains('slide-control') || isMoving) return;

    clearInterval(timerId);
    timerId = null;

    const clickedBtn = target.classList.contains('prev') ? -1 : 1;
    currentSlide += 1 * clickedBtn;
    move(currentSlide, DURATION);
  };

  $container.ontransitionend = () => {
    isMoving = false;

    const clickedBtn =
      currentSlide === 1 ? 1 : currentSlide === pets.length + 1 ? -1 : 0;

    if (!clickedBtn) return;

    currentSlide = clickedBtn === -1 ? 1 : pets.length + 1;
    move(currentSlide);
  };

  document.querySelectorAll('.pets-card').forEach($petsCard => {
    $petsCard.addEventListener('click', getPetIdForPost);
  });
};

const getAllPets = async () => {
  const renderPetList = await getPetsInfo();

  renderAttentionPets($attentionPetCard, renderPetList.data.pets);
  renderAllPets($allPetsCard, renderPetList.data.pets);
};

const displayMainPage = () => {
  const markup = `<header class="header">
  <h1 class="offscreen">동물 추모공원</h1>
  <p class="slogan">Memorial for my Pet</p>
  <div class="logo"><img src="/public/assets/img/logo.png" alt="logo"></div>
  <nav>
    <ul class="menu">
      <li class="bookmark">북마크</li>
      <li class="animal-register">내 반려견 등록</li>
      <li class="logout">로그아웃</li>
    </ul>
  </nav>
</header>
<main class="main">
  <section class="poster">
    <div class="poster-effect"></div>
    <p class="poster-title">안녕,
      나의 친구.</p>
  </section>
  <section class="attention">
    <h2 class="attention-title">이 아이들에게도 관심을 주세요.</h2>
    <div class="attention-card-container">
    </div>
  </section>
  <section class="pets">
    <h2 class="pets-title">이런 아이들도 있답니다.</h2>
    <div class="slides-container">
    </div>
  </section>
</main>
<footer class="footer">
  <h2 class="offscreen">하단영역</h2>
  <p class="footer-title">Memorial for my Pet</p>
  <address class="footer-address">
    <i class="fas fa-home"></i>
    <span>서울특별시 성동구 성수이로 113 제강빌딩 7층</span>
  </address>
  <div class="git-links">
    <i class="fab fa-github"></i>
    <a href="https://github.com/dannylee9212">Jaehoon Lee @dannylee9212</a>
    <a href="https://github.com/jjhstoday">Jihye Jang @jjhstoday</a>
    <a href="https://github.com/Bernese-Corgi">Jinyoung Choi @Bernese-Corgi</a>
  </div>
  <p>&copy; 2021 Memorial for my Pet. All Rights Reseved</p>
</footer>`;

  document.querySelector('body').innerHTML = markup;

  $attentionPetCard = document.querySelector('.attention-card-container');
  $allPetsCard = document.querySelector('.slides-container');

  getAllPets();

  document.querySelector('.logout').addEventListener('click', logout);
  document
    .querySelector('.animal-register')
    .addEventListener('click', displayAnimalRegisterPage);
};

export default displayMainPage;
