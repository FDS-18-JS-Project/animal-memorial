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
import { createErrorForEmptyId, createErrorForEmptyEmail, createErrorForEmptyPw } from '../utils/validation';

const user = new User();
let userId;

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
    console.log(userInfo);
    user.updateUserInfo(
      userInfo.data.payload.email,
      userInfo.data.username,
      userInfo.data.payload._id,
      userInfo.data.token
    );
    userId = userInfo.data.payload._id;
    localStorage.setItem('userId', userId);

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
    <div class="form-field">
      <label for="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        class="password"
      />
      </div>
    <button class="login-btn">로그인</button>
  </form>
</main>`;

  document.querySelector('body').innerHTML = markup;

  // document
  //   .querySelector('.login-form')
  //   .addEventListener('submit', loginHandler);

  document
  .querySelector('.login-form')
  .addEventListener('submit', e => {
    console.log(e.target[0].value.includes('@'));
    if(!e.target[0].value)
    createErrorForEmptyId(document.querySelector('.email'));
    if(!e.target[1].value)
    createErrorForEmptyPw(document.querySelector('.password'));
    // if(!e.target[0].value.includes('@'));
    // createErrorForEmptyEmail(document.querySelector('.email'));

    if(!e.target[0].value) {
      e.preventDefault();
      return;
    }
    if(!e.target[1].value) {
      e.preventDefault();
      return;
    }
    // if(!e.target[0].value.includes('@')) {
    //   e.preventDefault();
    //   return;
    // }


    loginHandler(e);
  });

  moveLabelInForm('login-form');
};

export { getSignInInfo, displaySignInPage, userId };
