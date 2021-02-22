import axios from 'axios';

const signin = async (email, password) => {
  try {
    const token = await axios({
      method: 'post',
      url: 'http://localhost:8080/login',
      data: {
        email,
        password
      }
    });
    return token;
  } catch (error) {
    console.log(error);
  }
};
const signup = async (email, password, username) => {
  try {
    const res = await axios({
      method: 'post',
      url: 'http://localhost:8080/signup',
      data: {
        email,
        password,
        username
      }
    });
    if (res.ok) window.location.href = 'http://localhost:9000/public/main.html';
  } catch (error) {
    console.log(error);
  }
};

export { signin, signup };
