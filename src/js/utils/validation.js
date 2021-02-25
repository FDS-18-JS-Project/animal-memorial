export const errorMessage = {
  default: '',
  signupNameError: '2자 이상의 문자를 입력해주세요.',
  signupPwError: '4~15자 영문 대 소문자, 숫자를 사용하세요.',
  loginError: '가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.',
  emptyIdError: '이메일을 입력해주세요.',
  emptyEmailError: '유효하지 않은 이메일 형식입니다.',
  emptyPwError: '비밀번호를 입력해주세요.'
};

export const reset = spanEl => {
  const $span = spanEl;
  $span.textContent = '';
};

export const createErrorForEmptyId = (e, spanEl) => {
  const $span = spanEl;

  if (!e.target[0].value) $span.textContent = errorMessage.emptyIdError;
  e.preventDefault();
};

export const createErrorForEmptyEmail = (e, spanEl) => {
  const regExpEm = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  const $span = spanEl;

  if (!e.target.value.match(regExpEm)) {
    $span.textContent = errorMessage.emptyEmailError;
  } else reset($span);
};

export const createErrorForEmptyPw = (e, spanEl) => {
  const $span = spanEl;

  if (!e.target[1].value) $span.textContent = errorMessage.emptyPwError;
  e.preventDefault();
};

export const createErrorForSignupNameError = (e, spanEl) => {
  const regExpName = /^[가-힣|a-z|A-Z|\*]{2,}$/;
  const $span = spanEl;
  console.log(e.target);
  if (!e.target.value) {
    e.preventDefault();
    $span.textContent = errorMessage.signupNameError;
    return;
  }

  if (!e.target.value.match(regExpName))
    $span.textContent = errorMessage.signupNameError;
  else reset($span);
};

export const createErrorForSignupPwError = (e, spanEl) => {
  const regExpPw = /^[a-z0-9]{4,15}$/;
  const $span = spanEl;

  if (!e.target.value) {
    e.preventDefault();
    $span.textContent = errorMessage.signupPwError;
    return;
  }

  if (!e.target.value.match(regExpPw))
    $span.textContent = errorMessage.signupPwError;
  else reset($span);
};

export const createErrorForSignupEmailError = (e, spanEl) => {
  const regExpEm = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  const $span = spanEl;

  if (!e.target.value) {
    e.preventDefault();
    $span.textContent = errorMessage.emptyEmailError;
    return;
  }

  if (!e.target.value.match(regExpEm))
    $span.textContent = errorMessage.emptyEmailError;
  else reset($span);
};
