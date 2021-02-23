// 주어진 이름의 쿠키를 반환하는데,
// 조건에 맞는 쿠키가 없다면 undefined를 반환합니다.
const getCookie = name => {
  const matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
        '=([^;]*)'
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

const setCookie = (name, value, options = {}) => {
  // eslint-disable-next-line no-param-reassign
  options = {
    // 필요한 경우, 옵션 기본값을 설정할 수도 있습니다.
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  document.cookie = `${encodeURIComponent(name)} = ${encodeURIComponent(
    value
  )}`;

  let updatedCookie =
    encodeURIComponent(name) + '=' + encodeURIComponent(value);

  // eslint-disable-next-line guard-for-in
  for (const optionKey in options) {
    updatedCookie += '; ' + optionKey;
    const optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += '=' + optionValue;
    }
  }

  document.cookie = `${updatedCookie}`;
};

const deleteCookie = name => {
  setCookie(name, '', {
    'max-age': -1
  });
};

export { getCookie, setCookie, deleteCookie };
