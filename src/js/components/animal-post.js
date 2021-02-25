import { User, Pet, Pets } from '../model';
import * as request from '../request';
import * as Cookies from '../utils/cookies';
// import { doc } from 'prettier';

// ? date 렌더링 함수
//! 함수 이름 다시 고려해보깅
const dateToString = date => date.replaceAll('-', '.').slice(0, 10);

// ? animal-register와 연결
export const useData = pets => {
  // ? Pet Information
  console.log('pets: ', pets);
  console.log('pets._id: ', pets._id);

  const $petsImg = document.querySelector('.pets-container>img');
  const $petsName = document.querySelector('.pets-info>.name>.desc');
  const $petsDeathDate = document.querySelector('.pets-info>.death-date>.desc');
  const $petsFavoriteList = document.querySelector('.pets-info>.favorite>.desc');
  console.log($petsImg, $petsName, $petsDeathDate, $petsFavoriteList);

  // localStorage.setItem('petId', petInfo.data.pet._id);
  $petsImg.setAttribute('src', pets.image);
  $petsName.textContent = pets.name;
  $petsDeathDate.textContent = dateToString(pets.deathDate);

  // ? favorites
  const _favorites = pets.favorites;

  _favorites.forEach(content => {
    const $petsFavoriteItem = document.createElement('li');
    $petsFavoriteList.appendChild($petsFavoriteItem);
    $petsFavoriteItem.textContent = content;
  });

  // const $ownerName = document.querySelector('.owner-row>.owner');
  // const $ownerPetList = document.querySelector('.pet-list');

  // const $ownerPetItem = document.createElement('li');
  // const $ownerPetLink = document.createElement('a');

  // $ownerPetList.appendChild($ownerPetItem);
  // $ownerPetList.appendChild($ownerPetLink);

  // $ownerName.innerHTML = 'test';
  // $ownerPetLink.innerHTML = 'test2';

  // const { owner } = pets;
};

// Todo: request user information
const requestUserInfo = async () => {
  const userId = localStorage.getItem('userId');
  const token = Cookies.getCookie('token');
  const userInfo = await request.getUserData(userId, token);
  if (userInfo) return console.log('userInfo: ', userInfo, userId);
};

// ? Comment
// const $commentForm = document.querySelector('.comment-form');

// ? 댓글 카운팅
const countComment = list => {
  const $commentCount = document.querySelector('.comment-count>.count');
  $commentCount.textContent = list.childElementCount;
};

// ? 작성일
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
const submitNewComment = e => {
  e.preventDefault();
};

// ? 댓글 추가 (렌더링)
const addNewComment = () => {
  const $commentInput = document.querySelector('.comment-input');
  const $commentsList = document.querySelector('.comments-list');

  if (!$commentInput.value) return;
  console.log($commentInput.value);

  const $commentRow = document.createElement('li');
  const $userName = document.createElement('span');
  const $commentDate = document.createElement('time');
  const $commentContent = document.createElement('p');

  $commentRow.classList.add('comment-row');
  $userName.classList.add('username');
  $commentDate.classList.add('date');
  $commentContent.classList.add('content');

  $commentsList.appendChild($commentRow);
  $commentRow.appendChild($userName);
  $commentRow.appendChild($commentDate);
  $commentRow.appendChild($commentContent);

  // TODO user information 가져오기

  // ? 댓글 카운팅
  countComment($commentsList);

  // ? 작성자

  // const getUserData =
  //   console.log(getUserData);

  // ? 작성일
  const writtenDate = new Date();
  $commentDate.textContent = `${pastCommentDate(writtenDate)}`;

  // ? 작성내용
  $commentContent.textContent = $commentInput.value;
  $commentInput.value = '';
};

// // username 렌더링
// $userName.textContent = user.getUserName();
// // console.log(user.getUserName);
// user.getUserData();

//   // ? 서버에 새 댓글 데이터 제출
//   // const submitNewCommnet = await request.postComment(
//   //   pet.addComment($commentInput.value),
//   //   user.userId(),
//   //   pet.getPetId()
//   // );

const displayAnimalPostPage = () => {
  const markup = `
  <header class="header">
  <h1 class="offscreen">동물 추모공원</h1>
  <p class="slogan">Memorial for my Pet</p>
  <div class="logo"><img src="./img/logo.png" alt="logo"></div>
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
    <div class="owner"></div>
    <ul class="pet-list">
    </ul>
  </div>
</div>
    <div class="comment-container">
      <form class="comment-form">
        <textarea class="comment-input" name="comment-input" id="commentInput" rows="4"
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
  // document.addEventListener('DOMContnetLoaded', renderPetInfo);
  document.addEventListener('DOMContentLoaded', requestUserInfo);

  const $commentBtn = document.querySelector('.comment-submit');
  $commentBtn.addEventListener('click', addNewComment);
  $commentBtn.addEventListener('submit', submitNewComment);
  // $commentBtn.addEventListener('submit', addNewComment);
};

export { displayAnimalPostPage };
