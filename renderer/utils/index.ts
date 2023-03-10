import dayjs from 'dayjs';

export const changeErrorMessage = (message: string) => {
  switch (message) {
    case 'auth/invalid-email':
      return 'π« μλͺ»λ μ΄λ©μΌ μ£Όμ νμμλλ€.';
    case 'auth/weak-password':
      return 'π« λΉλ°λ²νΈλ 6μλ¦¬ μ΄μμ΄μ΄μΌ ν©λλ€.';
    case 'auth/email-already-in-use':
      return 'π« μ΄λ―Έ κ°μλμ΄ μλ κ³μ μλλ€.';
    case 'auth/user-not-found':
      return 'π« κ°μλ μ΄λ©μΌ μ£Όμκ° μλλλ€.';
    case 'auth/wrong-password':
      return 'π« λΉλ°λ²νΈλ₯Ό μλͺ» μλ ₯νμ¨μ΅λλ€.';
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
