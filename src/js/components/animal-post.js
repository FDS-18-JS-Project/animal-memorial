import { logout } from '../utils/common';
import { User, Pet, Pets } from '../model';
import * as request from '../request';
import * as Cookies from '../utils/cookies';
import displayMainPage from './main';
import displayAnimalRegisterPage from './animal-register';
// import { doc } from 'prettier';

// Pet And Owner Information
// date 형식 변환 함수
const dateToString = date => date.replaceAll('-', '.').slice(0, 10);

// 추모 반려견 정보 렌더링
const renderPetInfo = pet => {
  // Pet Information
  const $petImg = document.querySelector('.pets-container>img');
  const $petName = document.querySelector('.pets-info>.name>.desc');
  const $petDeathDate = document.querySelector('.pets-info>.death-date>.desc');
  const $petFavoriteList = document.querySelector('.pets-info>.favorite>.desc');

  $petImg.setAttribute('src', pet.image);
  $petName.textContent = pet.name;
  $petDeathDate.textContent = dateToString(pet.deathDate);

  // favorites
  const _favorites = pet.favorites;

  _favorites.forEach(content => {
    const $petFavoriteItem = document.createElement('li');
    $petFavoriteList.appendChild($petFavoriteItem);
    $petFavoriteItem.textContent = content;
  });
};

// 보호자 정보 렌더링
const renderOwnerInfo = owner => {
  const $ownerName = document.querySelector('.owner-name');
  const $ownerEmail = document.querySelector('.owner-email');

  $ownerName.textContent = owner.username;
  $ownerEmail.textContent = owner.email;
};

// 반려견 및 보호자 정보 요청
const requestPetAndUserInfo = async () => {
  const petId = localStorage.getItem('petId');
  const token = Cookies.getCookie('token');
  const petAndUserInfo = await request.getPetInfo(petId, token);
  console.log(petAndUserInfo);

  // 배열
  renderNewComment(petAndUserInfo.data.pet.comments);
  renderOwnerInfo(petAndUserInfo.data.pet.owner);
  renderPetInfo(petAndUserInfo.data.pet);
};

// Comment
// 댓글 카운팅
const countComment = list => {
  const $commentCount = document.querySelector('.comment-count>.count');
  $commentCount.textContent = list.childElementCount;
};

// 작성일
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

// TODO ** 서버에 댓글 제출
const obtainNewComment = () => {
  const newComment = document.querySelector('.comment-input').value;
  const userId = localStorage.getItem('userId');
  const petId = localStorage.getItem('petId');

  return { newComment, userId, petId };
};

const submitNewComment = async e => {
  e.preventDefault();

  // 서버에 댓글 보내기
  const { newComment, userId, petId } = obtainNewComment();
  const token = Cookies.getCookie('token');
  const postComment = await request.postComment(
    newComment,
    userId,
    petId,
    token
  );
  console.log(postComment);

  if (postComment.status === 200) {
    // 모델에 댓글 저장하기
    // console.log(petId);
    petId.addComment(newComment);
  }
};

// 댓글 렌더링
const renderNewComment = () => {
  // 새로운 댓글 렌더링
  const { newComment } = obtainNewComment();
  const $commentsList = document.querySelector('.comments-list');

  if (!newComment) return;

  const $commentRow = document.createElement('li');
  const $userName = document.createElement('span');
  const $commentDate = document.createElement('time');
  const $commentContent = document.createElement('p');

  $commentRow.classList.add('comment-row');
  $userName.classList.add('username');
  $commentDate.classList.add('date');
  $commentContent.classList.add('content');

  $commentsList.prepend($commentRow);
  $commentRow.appendChild($userName);
  $commentRow.appendChild($commentDate);
  $commentRow.appendChild($commentContent);

  // todo 서버의 댓글 가져오기
  // console.log(commentList);
  // commentList.forEach(item => {
  //   console.log(item);
  // });

  // 댓글 카운팅
  countComment($commentsList);

  // 작성자
  const username = localStorage.getItem('username');
  $userName.textContent = username;

  // todo 작성일
  const writtenDate = new Date();
  $commentDate.textContent = `${pastCommentDate(writtenDate)}`;

  // 작성내용
  $commentContent.textContent = newComment;
  document.querySelector('.comment-input').value = '';
};

const displayAnimalPostPage = () => {
  const markup = `
  <header class="header">
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
    <ul class="desc"></ul>
  </div>
</div>
</div>
  <div class="column-container">
  <div class="owner-container">
  <div class="owner-row">
  <div class="owner-name"></div>
  <div class="owner-email"></div>
  </div>
  </div>
    <div class="comment-container">
      <form class="comment-form" novalidate>
        <textarea class="comment-input" name="comment-input" autocomplete="off" id="commentInput" rows="4"
    placeholder="따뜻한 한마디를 보내주세요. 악플은 주인과 사용자들에게 큰 상처가 됩니다. 악플은 예고 없이 삭제될 수 있습니다." required></textarea>
        <button class="comment-submit" type="submit">댓글</button>
      </form>
      <div class="comment-count">
        <span class="count">0</span> Comments
      </div>
      <ul class="comments-list"></ul>
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

  document.querySelector('.slogan').addEventListener('click', displayMainPage);
  document.querySelector('.logo').addEventListener('click', displayMainPage);
  document
    .querySelector('.animal-register')
    .addEventListener('click', displayAnimalRegisterPage);
  document.querySelector('.logout').addEventListener('click', logout);

  requestPetAndUserInfo();

  const $commentBtn = document.querySelector('.comment-submit');
  $commentBtn.addEventListener('click', renderNewComment);
  $commentBtn.addEventListener('submit', submitNewComment);

  const $commentForm = document.querySelector('.comment-form');
  $commentForm.addEventListener('click', e => {
    e.preventDefault();
  });
};

export default displayAnimalPostPage;
