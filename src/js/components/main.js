// // axios requests
// import * as request from '../request';
// // cookies
// import * as Cookies from '../utils/cookies';
// // page
// import displayLandingPage from './landing';
import displayAnimalRegisterPage from './animal-register';
import { logout } from '../utils/common';

const animalRegister = () => {
  displayAnimalRegisterPage();
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
    <p class="poster-title">안녕,
      나의 친구.</p>
  </section>
  <section class="attention">
    <h2 class="attention-title">이 아이들에게도 관심을 주세요.</h2>
    <div class="attention-card-container">
      <a href="#" class="attention-card">
        <img src="" alt="">
        <p class="name">코코</p>
      </a>
      <a href="#" class="attention-card">
        <img src="" alt="">
        <p class="name">코코</p>
      </a>
      <a href="#" class="attention-card">
        <img src="" alt="">
        <p class="name">코코</p>
      </a>
      <a href="#" class="attention-card">
        <img src="" alt="">
        <p class="name">코코</p>
      </a>
    </div>
  </section>
  <section class="pets">
    <h2 class="pets-title">이런 아이들도 있답니다.</h2>
    <div class="slides-container">
      <!-- <div class="pets-card-container">
        <div class="slides">
          <a href="#" class="pets-card">
            <img src="" alt="">
            <div class="name">
              <span class="title">이름</span>
              <span class="desc">1</span>
            </div>
            <div class="death-date">
              <span class="title">기일</span>
              <span class="desc">2021.02.19</span>
            </div>
            <div class="favorite">
              <span class="title">좋아했던 것</span>
              <span class="desc">머ㅏㄴㅇ릅ㅈ두후만으,ㄹ문ㅇㅍ,ㅡㅜ.ㅇ,누라ㅣㅓㅂ주다ㅓㅁㄴ;아/ㅜㅁ낲 ㅡㅁㅌ ㅊ푸ㅠㅓㄴ욷랍짇라ㅐ</span>
            </div>
          </a>
          <a href="#" class="pets-card">
            <img src="" alt="">
            <div class="name">
              <span class="title">이름</span>
              <span class="desc">2</span>
            </div>
            <div class="date">
              <span class="title">기일</span>
              <span class="desc">2021.02.19</span>
            </div>
            <div class="favorite">
              <span class="title">좋아했던 것</span>
              <span class="desc">머ㅏㄴㅇ릅ㅈ두후만으,ㄹ문ㅇㅍ,ㅡㅜ.ㅇ,누라ㅣㅓㅂ주다ㅓㅁㄴ;아/ㅜㅁ낲 ㅡㅁㅌ ㅊ푸ㅠㅓㄴ욷랍짇라ㅐ</span>
            </div>
          </a>
          <a href="#" class="pets-card">
            <img src="" alt="">
            <div class="name">
              <span class="title">이름</span>
              <span class="desc">3</span>
            </div>
            <div class="date">
              <span class="title">기일</span>
              <span class="desc">2021.02.19</span>
            </div>
            <div class="favorite">
              <span class="title">좋아했던 것</span>
              <span class="desc">머ㅏㄴㅇ릅ㅈ두후만으,ㄹ문ㅇㅍ,ㅡㅜ.ㅇ,누라ㅣㅓㅂ주다ㅓㅁㄴ;아/ㅜㅁ낲 ㅡㅁㅌ ㅊ푸ㅠㅓㄴ욷랍짇라ㅐ</span>
            </div>
          </a>
          <a href="#" class="pets-card">
            <img src="" alt="">
            <div class="name">
              <span class="title">이름</span>
              <span class="desc">4</span>
            </div>
            <div class="death-date">
              <span class="title">기일</span>
              <span class="desc">2021.02.19</span>
            </div>
            <div class="favorite">
              <span class="title">좋아했던 것</span>
              <span class="desc">머ㅏㄴㅇ릅ㅈ두후만으,ㄹ문ㅇㅍ,ㅡㅜ.ㅇ,누라ㅣㅓㅂ주다ㅓㅁㄴ;아/ㅜㅁ낲 ㅡㅁㅌ ㅊ푸ㅠㅓㄴ욷랍짇라ㅐ</span>
            </div>
          </a>
          <a href="#" class="pets-card">
            <img src="" alt="">
            <div class="name">
              <span class="title">이름</span>
              <span class="desc">5</span>
            </div>
            <div class="death-date">
              <span class="title">기일</span>
              <span class="desc">2021.02.19</span>
            </div>
            <div class="favorite">
              <span class="title">좋아했던 것</span>
              <span class="desc">머ㅏㄴㅇ릅ㅈ두후만으,ㄹ문ㅇㅍ,ㅡㅜ.ㅇ,누라ㅣㅓㅂ주다ㅓㅁㄴ;아/ㅜㅁ낲 ㅡㅁㅌ ㅊ푸ㅠㅓㄴ욷랍짇라ㅐ</span>
            </div>
          </a>
          <a href="#" class="pets-card">
            <img src="" alt="">
            <div class="name">
              <span class="title">이름</span>
              <span class="desc">6</span>
            </div>
            <div class="death-date">
              <span class="title">기일</span>
              <span class="desc">2021.02.19</span>
            </div>
            <div class="favorite">
              <span class="title">좋아했던 것</span>
              <span class="desc">머ㅏㄴㅇ릅ㅈ두후만으,ㄹ문ㅇㅍ,ㅡㅜ.ㅇ,누라ㅣㅓㅂ주다ㅓㅁㄴ;아/ㅜㅁ낲 ㅡㅁㅌ ㅊ푸ㅠㅓㄴ욷랍짇라ㅐ</span>
            </div>
          </a>
          <a href="#" class="pets-card">
            <img src="" alt="">
            <div class="name">
              <span class="title">이름</span>
              <span class="desc">7</span>
            </div>
            <div class="death-date">
              <span class="title">기일</span>
              <span class="desc">2021.02.19</span>
            </div>
            <div class="favorite">
              <span class="title">좋아했던 것</span>
              <span class="desc">머ㅏㄴㅇ릅ㅈ두후만으,ㄹ문ㅇㅍ,ㅡㅜ.ㅇ,누라ㅣㅓㅂ주다ㅓㅁㄴ;아/ㅜㅁ낲 ㅡㅁㅌ ㅊ푸ㅠㅓㄴ욷랍짇라ㅐ</span>
            </div>
          </a>
        </div>
      </div>
      <i class="slide-control prev fas fa-chevron-left"></i>
      <i class="slide-control next fas fa-chevron-right"></i> -->
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
  const moveCarousel = () => {
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

        const clickedBtn = currentSlide === 1 ? 1 : currentSlide === pets.length + 1 ? -1 : 0;

        if (!clickedBtn) return;

        currentSlide = clickedBtn === -1 ? 1 : pets.length + 1;
        move(currentSlide);
      };
    };

    carousel(document.querySelector('.slides-container'), pets);
  };
  moveCarousel();

  document.querySelector('.logout').addEventListener('click', logout);
  document.querySelector('.animal-register').addEventListener('click', animalRegister);
};

export { displayMainPage };
