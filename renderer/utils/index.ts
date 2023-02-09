import dayjs from 'dayjs';

export const changeErrorMessage = (message: string) => {
  switch (message) {
    case 'auth/invalid-email':
      return '🚫 잘못된 이메일 주소 형식입니다.';
    case 'auth/weak-password':
      return '🚫 비밀번호는 6자리 이상이어야 합니다.';
    case 'auth/email-already-in-use':
      return '🚫 이미 가입되어 있는 계정입니다.';
    case 'auth/user-not-found':
      return '🚫 가입된 이메일 주소가 아닙니다.';
    case 'auth/wrong-password':
      return '🚫 비밀번호를 잘못 입력하셨습니다.';
  }
};

export const getDate = () => {
  const timeStamp = String(Date.now());
  const date = dayjs(Number(timeStamp));
  const nowDate = date.format('YYYY-MM-DD HH:mm:ss');

  return nowDate;
};

export const getRandomBgColor = () => {
  const red = Math.floor(Math.random() * 128 + 128);
  const green = Math.floor(Math.random() * 128 + 128);
  const blue = Math.floor(Math.random() * 128 + 128);
  const bgcolor = `rgb(${red},${green},${blue})`;
  return bgcolor;
};
