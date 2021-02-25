import { logout } from '../utils/common';
import * as request from '../request';
import * as Cookies from '../utils/cookies';
import { Pet, Pets } from '../model';
import displayMainPage from './main';
import displayAnimalPostPage from './animal-post';

// validation
import {
  createErrorForEmptyPetImage,
  createErrorForEmptyPetName,
  createErrorForEmptyPetDeathDate,
  createErrorForEmptyPetFavorite,
  reset
} from '../utils/validation';

const pet = new Pet();

const obtainPetInfo = () => {
  const formDate = [...document.forms][0];
  const image = document.querySelector('.img-input').files[0];
  const petName = formDate[1].value;
  const deathDate = formDate[2].value;
  const favorites = [
    `${formDate[3].value}`,
    `${formDate[4].value}`,
    `${formDate[5].value}`
  ];
  const imgFormData = new FormData();
  imgFormData.append('image', image);
  imgFormData.append('petName', petName);
  imgFormData.append('deathDate', deathDate);
  imgFormData.append('favorites', favorites);

  return imgFormData;
};

const animalRegisterHandler = async e => {
  e.preventDefault();

  // validation required

  const imgFormData = obtainPetInfo();

  const userInfoId = localStorage.getItem('userId');
  const token = Cookies.getCookie('token');

  const petInfo = await request.postPetInfo(imgFormData, userInfoId, token);

  console.log(petInfo);
  if (petInfo) {
    pet.updatePetInfo(
      petInfo.data.pet._id,
      petInfo.data.pet.name,
      petInfo.data.pet.deathDate,
      petInfo.data.pet.favorites
    );

    localStorage.setItem('petId', petInfo.data.pet._id);
    displayAnimalPostPage();
  }
};

const dragOver = e => {
  const effectDrag = e.target.parentNode.style;

  if (e.type === 'dragover') {
    effectDrag.backgroundColor = 'rgba(151, 151, 157, 0.4)';
    effectDrag.transition = 'all 0.3s';
  } else {
    effectDrag.backgroundColor = '#FFFFFF';
  }
};

const setThumbnail = e => {
  const image = e.target.files[0];
  const thubImage = document.createElement('img');

  thubImage.setAttribute('src', window.URL.createObjectURL(image));
  thubImage.style.width = '780px';
  thubImage.style.backgroundRepeat = 'no-repeat';
  thubImage.style.position = 'absolute';
  thubImage.style.zIndex = '99';

  document.querySelector('.img-container').appendChild(thubImage);
};

const animalRegister = () => {
  const $animalRegisterForm = document.querySelector('.animal-register-form');
  const $imgInput = document.querySelector('.img-input');

  $imgInput.onchange = e => {
    setThumbnail(e);
  };

  $animalRegisterForm.onclick = ({ target }) => {
    if (!target.matches('div > input[type="text"]')) return;
    target.previousElementSibling.classList.add('active');
  };

  $animalRegisterForm.onkeyup = e => {
    if (!e.key === 'Tab') return;
    if (!e.target.matches('div > input[type="text"]')) return;

    e.target.previousElementSibling.classList.add('active');
  };

  $imgInput.addEventListener('dragover', e => {
    e.stopPropagation();
    e.preventDefault();
    dragOver(e);
  });

  $imgInput.addEventListener('dragleave', e => {
    e.stopPropagation();
    e.preventDefault();
    dragOver(e);
  });
};

// validation
const formDate = () => {
  const formDate = [...document.forms][0];
  const image = document.querySelector('.img-input').files[0];
  const petName = formDate[1].value;
  const deathDate = formDate[2].value;
  const favorites = formDate[3].value;

  return {
    image,
    petName,
    deathDate,
    favorites
  };
};

// TODO:
// const checkValidationUsingChange = e => {
//   const { image, petName, deathDate, favorites } = formDate();
// }

const checkValidationUsingSubmit = e => {
  const { image, petName, deathDate, favorites } = formDate();

  createErrorForEmptyPetImage(image, e, document.querySelector('.error-message-petImage'));
  createErrorForEmptyPetName(petName, e, document.querySelector('.error-message-petName'));
  createErrorForEmptyPetDeathDate(deathDate, e, document.querySelector('.error-message-petDeathDate'));
  createErrorForEmptyPetFavorite(favorites, e, document.querySelector('.error-message-petFavorite'));
}

const displayAnimalRegisterPage = () => {
  const now = new Date();
  const mixDate = now.toISOString().slice(0, 10);

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
<!-- animal register section -->
<main class="animal-register-container">
  <h1 class="title">내 반려견 추모 공간 등록</h1>
  <form action="#" method="#" class="animal-register-form" novalidate>
    <!-- pet image -->
    <div class="img-container">
      <label class="img-label" for="animal-img">당신의 반려견 이미지를 등록해주세요.</label>
      <input class="img-input" type="file" id="animal-img" name="animal-img" accept="image/* required"
        autocomplete="off">
      <i class="img-icon fad fa-upload fa-9x"></i>
      </div>
      <span class="error-message-petImage"></span>
    <!-- pet name -->
    <div class="name-container">
      <label class="name-label text-label" for="animal-name">반려견 이름</label>
      <input class="name-input" type="text" id="animal-name" name="animal-name" autocomplete="off" required>
      </div>
      <span class="error-message-petName"></span>
    <!-- pet date of death -->
    <div class="death-container">
      <label class="death-label text-label" for="animal-death">기일</label>
      <input class="death-input" type="date" for="animal-death" name="animal-death" autocomplete="off" max="${mixDate}" required>
      </div>
      <span class="error-message-petDeathDate"></span>
    <!-- pet favorites -->
    <div class="favorite-1st-container">
      <label class="favorit-1st-label text-label" for="animal-favorit-1st">좋아했던 것 1</label>
      <input class="favorit-1st-input" type="text" id="animal-favorite-1st" name="animal-favorite-1st"
        autocomplete="off" required>
        </div>
        <span class="error-message-petFavorite"></span>
    <div class="favorite-2nd-container">
      <label class="favorit-2nd-label text-label" for="animal-favorite-2nd">좋아했던 것 2</label>
      <input class="favorit-2nd-input" type="text" id="animal-favorite-2nd" name="animal-favorite-2nd"
        autocomplete="off">
    </div>
    <div class="favorite-3rd-container">
      <label class="favorit-3rd-label text-label" for="animal-favorite-3rd">좋아했던 것 3</label>
      <input class="favorit-3rd-input" type="text" id="animal-favorite-3rd" name="animal-favorite-3rd"
        autocomplete="off">
    </div>
    <!-- animal register form submit button -->
    <input type="submit" class="animal-register-button" value="등록">
  </form>
  <div style="font-size: 20px;">
    <i class="foot-1st fas fa-paw fa-6x"></i>
    <i class="foot-2nd fas fa-paw fa-8x"></i>
    <i class="foot-3rd fas fa-paw fa-10x"></i>
  </div>
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

  animalRegister();

  document.querySelector('.logout').addEventListener('click', logout);

  document
    .querySelector('.animal-register-button')
    .addEventListener('click', e => {
      checkValidationUsingSubmit(e);
      animalRegisterHandler(e);
    });

  document.querySelector('.slogan').addEventListener('click', displayMainPage);
  document.querySelector('.logo').addEventListener('click', displayMainPage);

  // document.querySelector('.animal-register-button').addEventListener('click', );
};

export default displayAnimalRegisterPage;
