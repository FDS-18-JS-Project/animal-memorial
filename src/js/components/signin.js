const getSignInInfo = () => {
  const email = document.querySelector('.email').value;
  const password = document.querySelector('.password').value;

  return {
    email,
    password
  };
};

export default getSignInInfo;
