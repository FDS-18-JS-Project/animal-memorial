// models
import { User } from '../model';
// axios requests
import * as request from '../request';
// cookies
import * as Cookies from '../utils/cookies';

// components
import displayMainPage from './main';
import { moveLabelInForm } from '../utils/common';

// validation
import {
  createErrorForEmptyId,
  createErrorForEmptyEmail,
  createErrorForEmptyPw
} from '../utils/validation';

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
  if (userInfo.status === 200) {
    console.log(userInfo);
    user.updateUserInfo(
      userInfo.data.payload.email,
      userInfo.data.payload.username,
      userInfo.data.payload._id,
      userInfo.data.token
    );
    const userId = userInfo.data.payload._id;
    const { username } = userInfo.data.payload;
    localStorage.setItem('userId', userId);
    localStorage.setItem('username', username);

    Cookies.setCookie('token', userInfo.data.token, {
      secure: true,
      'max-age': 3600 * 3
    });

    if (userInfo.data.token) displayMainPage();
  }
};

// validation
const checkValidationUsingKeyup = e => {
  createErrorForEmptyEmail(e, document.querySelector('.error-message-email'));
};

const checkValidationUsingSubmit = e => {
  e.preventDefault();
  createErrorForEmptyId(e, document.querySelector('.error-message-email'));
  createErrorForEmptyPw(e, document.querySelector('.error-message-pw'));
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
  <form class="login-form" novalidate>
    <div class="form-field">
      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        class="email"
        autocomplete="off"
      />
      </div>
      <span class="error-message-email"></span>
    <div class="form-field">
      <label for="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        class="password"
        minlength="4"
        maxlength="15"
      />
      </div>
      <span class="error-message-pw"></span>
    <button class="login-btn">로그인</button>
  </form>
</main>`;

  document.querySelector('body').innerHTML = markup;

  document
    .querySelector('.email')
    .addEventListener('keyup', checkValidationUsingKeyup);

  document.querySelector('.login-form').addEventListener('submit', e => {
    checkValidationUsingSubmit(e);
    loginHandler(e);
  });

  moveLabelInForm('login-form');
};

export { getSignInInfo, displaySignInPage };
