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
  <div class="pets-container"></div>
  <div class="column-container">
    <div class="owner-container"></div>
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

export default displayAnimalPostPage;