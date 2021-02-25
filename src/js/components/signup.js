// models
import { User } from '../model';
// axios requests
import * as request from '../request';
// cookies
import * as Cookies from '../utils/cookies';

// components
import displayMainPage from './main';
import { moveLabelInForm } from '../utils/common';

const user = new User();

const getSignUpInfo = () => {
  const email = document.querySelector('.email').value;
  const password = document.querySelector('.password').value;
  const username = document.querySelector('.username').value;

  return {
    email,
    password,
    username
  };
};

const registerHandler = async e => {
  e.preventDefault();

  // validation required

  const { email, password, username } = getSignUpInfo();

  const userInfo = await request.signup(email, password, username);

  if (userInfo.status === 200) {
    user.updateUserInfo(
      email,
      username,
      userInfo.data.user._id,
      userInfo.data.token
    );

    localStorage.setItem('userId', userInfo.data.user._id);
    localStorage.setItem('username', userInfo.data.user.username);
    Cookies.setCookie('token', userInfo.data.token, {
      secure: true,
      'max-age': 3600 * 3
    });
    displayMainPage();
  }
};

const displaySignUpPage = () => {
  const markup = `<h1 class="site-title">Memorial for My Pet</h1>
  <main class="register-container">
    <h2 class="offscreen">Register</h2>
    <div class="title-group">
      <button class="login-title">로그인</button>
      <button class="register-title login-active"
        >회원가입</button
      >
    </div>
    <form class="register-form">
      <div class="form-field">
        <label for="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          class="username"
        />
        <span class="error-message"></span>
      </div>
      <div class="form-field">
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          class="password"
        />
        <span class="error-message"></span>
      </div>
      <div class="form-field">
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          class="email"
        />                                                                                                                                                                                                                                                                                                                                          
        <span class="error-message"></span>
      </div>
      <button class="register-btn">아이디 등록</button>
    </form>
  </main>`;

  document.querySelector('body').innerHTML = markup;

  document
    .querySelector('.register-form')
    .addEventListener('submit', registerHandler);

  moveLabelInForm('register-form');
};

export default displaySignUpPage;
