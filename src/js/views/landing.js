const displayLandingPage = () => {
  const markup = `<main class="landing-container">
        <h1 class="site-title">Memorial for My Pet</h1>
        <div class="landing-container">
            <p class="landing-title">우리 사이트는 소중한 가족을 추모하는 공간입니다.</p>
            <p class="landing-subtitle">로그인 후 이용 부탁드립니다</p>
            <div class="landing-links">
                <a href='/public/html/signin.html' class="signin-btn">로그인</a>
                <a href='/public/html/signup.html' class="signup-btn">회원가입</a>
            </div>
        </div>
    </main>`;

  document.querySelector('body').innerHTML = markup;
};

export default displayLandingPage;
