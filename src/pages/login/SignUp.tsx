import React from 'react';
import styled from '@emotion/styled';
import { Button, InputWrap } from 'styles/LayoutCss';
import { FiMail } from 'react-icons/fi';
import { FaLock, FaUser } from 'react-icons/fa';
export default function SignUp() {
  return (
    <SignUpCss>
      <h3>회원가입</h3>
      <InputWrap>
        <FiMail />
        <input type='email' placeholder='email@example.com' />
      </InputWrap>
      <InputWrap>
        <FaLock />
        <input type='password' placeholder='비밀번호를 입력해주세요' />
      </InputWrap>
      <InputWrap>
        <FaUser />
        <input type='text' placeholder='이름을 입력해주세요.' />
      </InputWrap>
      <Button>회원가입하기</Button>
    </SignUpCss>
  );
}
const SignUpCss = styled.form`
  margin: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 17px;
    font-weight: bold;
    text-align: center;
    color: #8d8d8d;
    margin-bottom: 90px;
  }

  button {
    margin-top: 150px;
  }
`;