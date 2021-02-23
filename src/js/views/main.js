const displayMainPage = () => {
  const markup = `<header class="header">
  <h1 class="offscreen">동물 추모공원</h1>
  <p class="slogan">Memorial for my Pet</p>
  <div class="logo"><img src="../img/logo.png" alt="logo"></div>
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
};

export default displayMainPage;
