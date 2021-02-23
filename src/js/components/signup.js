// models
import { User } from '../model';
// axios requests
import * as request from '../request';
// cookies
import * as Cookies from '../utils/cookies';
import displayMainPage from './main';

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
  if (userInfo) {
    console.log(userInfo);
    user.updateUserInfoAfterSignUp(
      email,
      username,
      userInfo.data.token,
      userInfo.data.user._id
    );
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
      <label for="username" class="offscreen">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        class="username"
        placeholder="Username"
      />
      <label for="password" class="offscreen">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        class="password"
        placeholder="Password"
      />
      <label for="email" class="offscreen">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        class="email"
        placeholder="Email"
      />
      <button class="register-btn">아이디 등록</button>
    </form>
  </main>`;

  document.querySelector('body').innerHTML = markup;

  document
    .querySelector('.register-form')
    .addEventListener('submit', registerHandler);
};

export default displaySignUpPage;
