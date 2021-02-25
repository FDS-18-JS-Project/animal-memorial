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
import { createErrorForSignupNameError, createErrorForSignupPwError, createErrorForSignupEmailError, reset } from '../utils/validation';

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
    Cookies.setCookie('token', userInfo.data.token, {
      secure: true,
      'max-age': 3600 * 3
    });
    displayMainPage();
  }
};

// validation
const checkValidationName = e => {
  const regExpName = /^[가-힣|a-z|A-Z|\*]{2,}$/;

  if(!(e.target.value).match(regExpName)) createErrorForSignupNameError(document.querySelector('.error-message-signup-name'));
  else reset(document.querySelector('.error-message-signup-name'));
};

const checkValidationPw = e => {
  const regExpPw = /^[a-z0-9]{4,15}$/;

  if(!(e.target.value).match(regExpPw)) createErrorForSignupPwError(document.querySelector('.error-message-signup-pw'));
  else reset(document.querySelector('.error-message-signup-pw'));
};

const checkValidationEmail = e => {
  const regExpEm = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  if(!(e.target.value).match(regExpEm)) createErrorForSignupEmailError(document.querySelector('.error-message-signup-email'));
  else reset(document.querySelector('.error-message-signup-email'));
};

const checkValidationUsingSubmit = e => {
  const regExpName = /^[가-힣|a-z|A-Z|\*]{2,}$/;
  const regExpPw = /^[a-z0-9]{4,15}$/;
  const regExpEm = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  if(!(e.target[0].value).match(regExpName))
  createErrorForSignupNameError(document.querySelector('.error-message-signup-name'));
  if(!(e.target[1].value).match(regExpPw))
  createErrorForSignupPwError(document.querySelector('.error-message-signup-pw'));
  if(!(e.target[2].value).match(regExpEm))
  createErrorForSignupEmailError(document.querySelector('.email'));
  
  if(!e.target[0].value) {
    e.preventDefault();
    return;
  }
  if(!e.target[1].value) {
    e.preventDefault();
    return;
  }
  if(!e.target[2].value.includes('@')) {
    e.preventDefault();
    return;
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
    <form class="register-form" novalidate>
      <div class="form-field">
        <label for="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          class="username"
          autocomplete="off"
        />
        </div>
        <span class="error-message-signup-name"></span>
      <div class="form-field">
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          class="password"
          autocomplete="off"
          minlength="4"
          maxlength="15"
        />
        </div>
        <span class="error-message-signup-pw"></span>
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
      <span class="error-message-signup-email"></span>
      <button class="register-btn">아이디 등록</button>
    </form>
  </main>`;

  document.querySelector('body').innerHTML = markup;

  document.querySelector('.username').addEventListener('keyup', checkValidationName);
  document.querySelector('.password').addEventListener('keyup', checkValidationPw);
  document.querySelector('.email').addEventListener('keyup', checkValidationEmail);
  
  document.querySelector('.register-form').addEventListener('submit', e => {
      checkValidationUsingSubmit(e);
      registerHandler(e);
    });

  moveLabelInForm('register-form');
};

export default displaySignUpPage;
