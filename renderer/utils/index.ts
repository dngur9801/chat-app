export const signupInitialValue = () => ({
  email: '',
  password: '',
  re_password: '',
});

export const loginInitialValue = () => ({
  email: '',
  password: '',
});

export const userInfoInitialValue = () => ({
  uid: '',
  id: '',
});

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
