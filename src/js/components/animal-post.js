import { User, Pet } from '../model';
import * as request from '../request';
// import { doc } from 'prettier';

//!
const user = new User();
const pet = new Pet();


// Comment
const $commentInput = document.querySelector('.comment-input');
const $commentBtn = document.querySelector('.comment-submit');
const $commentList = document.querySelector('.comments-list');

// Pet Info
// TODO: 2021-02-22T15:00:00.000Z라고 오면 자르는 메서드 추가해야함
const dateToString = date => date.replace('-', '. ');

// const petInfo1 = await request.obtainPetInfo(petInfo);
// const petInfo = await request.getPetInfo(petInfo1.pet._id);
// pet.updatePetInfo(petInfo.params._id);


// TODO: 함수 이름 다시 셍각해보기
const renderPetInfo = async () => {
  const $petsImg = document.querySelector('.pets-container>img');
  const $petsName = document.querySelector('.pets-info>.name>.desc');
  const $petsDeathDate = document.querySelector('.pets-info>.death-date>.desc');
  const $petsFavorite = document.querySelector('.pets-info>.favorite>.desc');

  const petInfo = await request.getPetInfo();



  // const petId = pet.getPetId();
  const { petId, petName, deathDate, favorites, image } = {
    petInfo.data.pet._id,
    petInfo.data.pet.name,
    petInfo.data.pet.deathDate,
    petInfo.data.pet.favorites,
    petInfo.data.pet.image
  };

  localStorage.setItem('petId', petId);
  // const petName = petInfo.params.pets.name;
  // const deathDate = petInfo.params.pets.deathDate;
  // const favorites = petInfo.params.pets.favorites;
  // const image = petInfo.params.pets.image;

  $petsImg.setAttribute('src', image);
  $petsName.textContent = petName;
  $petsDeathDate.textContent = dateToString(deathDate);

  // TODO: favorite - list로 구분 or ',' 쉼표 써서 구분
  favorites.map()
};

// User Info
const $petList = document.querySelector('.owner>.pet-list');

const $petListItem = document.createElement('li');
const $petListLink = document.createElement('a');

$petList.appendChild($petListItem);
$petList.appendChild($petListLink);



const countComment = () => {
  const $commentCount = document.querySelector('.comment-count>.count');
  $commentCount.textContent = $commentList.childElementCount;
};

const pastCommentDate = (writtenDate = new Date()) => {
  const nowDate = new Date();
  const pastTime = nowDate.getTime() - writtenDate.getTime();
  const pastMinute = Math.floor(pastTime / 1000 / 60);
  const pastHour = Math.floor(pastTime / 1000 / 60 / 60);
  const pastDate = Math.floor(pastTime / 1000 / 60 / 60 / 24);
  const pastWeek = Math.floor(pastTime / 1000 / 60 / 60 / 24 / 7);
  const pastMonth = Math.floor(pastTime / 1000 / 60 / 60 / 24 / 30);
  const pastYear = Math.floor(pastTime / 1000 / 60 / 60 / 24 / 365);

  if (pastMinute < 1) return '• 방금 전';
  if (pastMinute < 60) return `• ${pastMinute}분 전`;
  if (pastHour < 24) return `• ${pastHour}시간 전`;
  if (pastDate < 7) return `• ${pastDate}일 전`;
  if (pastWeek < 5) return `• ${pastWeek}주 전`;
  if (pastMonth < 12) return `• ${pastMonth}달 전`;
  if (pastYear >= 1) return `• ${pastYear}년 전`;
};

const newComment = async () => {
  if (!$commentInput.value) return;

  const $commentRow = document.createElement('div');
  const $userName = document.createElement('span');
  const $commentDate = document.createElement('time');
  const $commentContent = document.createElement('p');

  $commentRow.classList.add('comment-row');
  $userName.classList.add('username');
  $commentDate.classList.add('date');
  $commentContent.classList.add('content');

  $commentList.appendChild($commentRow);
  $commentRow.appendChild($userName);
  $commentRow.appendChild($commentDate);
  $commentRow.appendChild($commentContent);

  const writtenDate = new Date();
  $commentDate.textContent = `${pastCommentDate(writtenDate)}`;

  const addNewComment = await request.postComment(pet.addComment($commentInput.value), user.userId(), pet.getPetId());

  // username 렌더링
  $userName.textContent = user.getUserName();

  // comment 렌더링
  $commentContent.textContent = $commentInput.value;
  $commentInput.value = '';
};

const displayAnimalPostPage = () => {
  const markup = `
  <header class="header">
  <h1 class="offscreen">동물 추모공원</h1>
  <p class="slogan">Memorial for my Pet</p>
  <div class="logo"><img src="./img/logo.png" alt="logo"></div>
  <nav>
    <ul class="menu">
      <li class="bookmark"><a href="#">북마크</a></li>
      <li class="animal-register"><a href="/public/html/animal-register.html">내 반려견 등록</a></li>
      <li class="logout"><a href="/public/index.html">로그아웃</a></li>
    </ul>
  </nav>
</header>
<main class="post-container">
<div class="pets-container">
<img src="" alt="">
<div class="pets-info">
  <div class="name">
    <span class="title">이름</span>
    <p class="desc"></p>
  </div>
  <div class="death-date">
    <span class="title">기일</span>
    <time class="desc"></time>
  </div>
  <div class="favorite">
    <span class="title">좋아했던 것</span>
    <ul>
      <li class="desc"></li>
    </ul>
  </div>
</div>
</div>
  <div class="column-container">
  <div class="owner-container">
  <div class="owner-row">
    <div class="owner"></div>
    <ul class="pet-list">
    </ul>
  </div>
</div>
    <div class="comment-container">
      <div class="new-comment">
        <textarea class="comment-input" name="comment-input" id="commentInput" rows="4"
    placeholder="따뜻한 한마디를 보내주세요. 악플은 주인과 사용자들에게 큰 상처가 됩니다. 악플은 예고 없이 삭제될 수 있습니다." required></textarea>
        <button class="comment-submit" type="submit">댓글</button>
      </div>
      <div class="comment-count">
        <span class="count">0</span> Comments
      </div>
      <div class="comments-list"></div>
    </div>
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
  </footer>
  `;
  document.querySelector('body').innerHTML = markup;
};

$commentBtn.addEventListener('click', () => {
  newComment();
  countComment();
});

// $commentBtn.addEventListener('submit', addNewComment);

document.addEventListener('DOMContentLoaded',);

export default displayAnimalPostPage;
