// eslint-disable-next-line no-undef
const displaySignInPage = () => {
  const markup = `<h1 class="site-title">
  <a href="/public/index.html">Memorial for My Pet</a>
</h1>
<main class="login-container">
  <h2 class="offscreen">login</h2>
  <div class="title-group">
    <button class="login-title login-active"
      >로그인</button
    >
    <button class="register-title">회원가입</button>
  </div>
  <form class="login-form">
    <label for="email" class="offscreen">Email</label>
    <input
      type="email"
      name="email"
      id="email"
      class="email"
      placeholder="Email"
    />
    <label for="password" class="offscreen">Password</label>
    <input
      type="password"
      name="password"
      id="password"
      class="password"
      placeholder="Password"
    />
    <label for="checkbox"
      ><input
        type="checkbox"
        id="checkbox"
        class="login-form-checkbox"
      />아이디 저장</label
    >
    <button class="login-btn">로그인</button>
  </form>
</main>`;

  document.querySelector('body').innerHTML = markup;
};

export default displaySignInPage;
