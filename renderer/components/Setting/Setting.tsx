import React from 'react';
import Header from '../Common/Header/Header';
import { SETTING_TEXT } from '../../constants';

function Setting() {
  return (
    <>
      <Header
        title={SETTING_TEXT}
        description={'환경 설정을 할 수 있는 페이지입니다.'}
      />
      <span>준비중 입니다!</span>
    </>
  );
}

export default Setting;
