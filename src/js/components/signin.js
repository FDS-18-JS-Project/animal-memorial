// models
import { User } from '../model';
// axios requests
import * as request from '../request';
// cookies
import * as Cookies from '../utils/cookies';
import displayMainPage from './main';

const user = new User();

const getSignInInfo = () => {
  const email = document.querySelector('.email').value;
  const password = document.querySelector('.password').value;

  return {
    email,
    password
  };
};

const loginHandler = async e => {
  e.preventDefault();

  // validation required

  const { email, password } = getSignInInfo();

  const userInfo = await request.signin(email, password);
  if (userInfo) {
    user.updateUserInfoWithToken(
      userInfo.data.payload.email,
      userInfo.data.username,
      userInfo.data.token
    );

    Cookies.setCookie('token', userInfo.data.token, {
      secure: true,
      'max-age': 3600 * 3
    });

    if (userInfo.data.token) displayMainPage();
  }
};

// eslint-disable-next-line no-undef
const displaySignInPage = () => {
  const markup = `<h1 class="site-title">Memorial for My Pet</h1>
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

  document
    .querySelector('.login-form')
    .addEventListener('submit', loginHandler);
};

export { getSignInInfo, displaySignInPage };
