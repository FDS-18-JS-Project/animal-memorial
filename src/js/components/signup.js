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

export default getSignUpInfo;
