const $commentInput = document.querySelector('.comment-input');
const $commentBtn = document.querySelector('.comment-submit');
const $commentList = document.querySelector('.comments-list');
const $commentCount = document.querySelector('.comment-count>.count');

const countComment = () => {
  $commentCount.textContent = $commentList.childElementCount;
};

const addNewComment = () => {
  $commentBtn.addEventListener('click', () => {
    if (!$commentInput.value) return;

    const $commentRow = document.createElement('div');
    const $userName = document.createElement('span');
    const $commentDate = document.createElement('time');
    const $commentContent = document.createElement('p');

    $commentRow.classList.add('comment-row');
    $userName.classList.add('username');
    $commentDate.classList.add('date');
    $commentContent.classList.add('content');

    $commentList.appendChild($commentRow);
    $commentRow.appendChild($userName);
    $commentRow.appendChild($commentDate);
    $commentRow.appendChild($commentContent);

    $commentContent.textContent = $commentInput.value;
    $commentInput.value = '';

    $commentDate.textContent = `${pastCommentDate()}`;

    countComment();

  });
};

addNewComment();

const pastCommentDate = () => {
  const nowDate = new Date();
  const writtenDate = new Date(2020, 0, 3, 3, 35, 00, 0);
  const pastTime = (nowDate.getTime() - writtenDate.getTime());
  const pastMinute = Math.floor(pastTime / 1000 / 60);
  // const pastMinute = Math.floor(nowDate.getMinutes() - writtenDate.getMinutes());
  const pastHour = Math.floor(pastTime / 1000 / 60 / 60);
  const pastDate = Math.floor(pastTime / 1000 / 60 / 60 / 24);
  const pastWeek = Math.floor(pastTime / 1000 / 60 / 60 / 24 / 7);
  const pastMonth = Math.floor(pastTime / 1000 / 60 / 60 / 24 / 30);
  const pastYear = Math.floor(pastTime / 1000 / 60 / 60 / 24 / 365);

  // console.log(nowDate.getMinutes());

  if (pastMinute < 1) return '• 방금 전';
  if (pastMinute < 60) return `• ${pastMinute}분 전`;
  if (pastHour < 24) return `• ${pastHour}시간 전`;
  if (pastDate < 7) return `• ${pastDate}일 전`;
  if (pastWeek < 5) return `• ${pastWeek}주 전`;
  if (pastMonth < 30) return `• ${pastMonth}달 전`;
  if (pastYear >= 13)`• ${pastYear}년 전`;
  console.log(pastMinute);
  console.log(pastHour);
  // if (pastMinute < 60)`• ${pastMinute}분 전`;
  // if (pastHour < 24)`• ${pastHour}시간 전`;
  // console.log(pastMinute);
};

pastCommentDate()