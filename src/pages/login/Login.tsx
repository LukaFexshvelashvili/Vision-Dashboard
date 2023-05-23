import { useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  Logo,
  MTitle,
} from "../../styledComponents/main/styledComponents";
import "./Login.css";
import styled from "styled-components";

export default function Login() {
  return (
    <LoginContent>
      <LoginSide>
        <LoginSideContent>
          <Logo></Logo>
          <LoginForm />
        </LoginSideContent>
      </LoginSide>
      <ImageSide></ImageSide>
    </LoginContent>
  );
}

const LoginContent = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: var(--block);
  border-radius: 30px;
  overflow: hidden;
`;

const LoginSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50%;
  padding: 60px;
`;

const LoginSideContent = styled.div`
  height: 100%;
  width: 100%;
  max-width: 600px;
`;

const ImageSide = styled.div`
  height: 100%;
  width: 50%;
  border-radius: 30px;
  background: linear-gradient(
    100.06deg,
    #000000 31.35%,
    #2e2e2e 85.26%,
    #000000 98.28%
  );
`;

function LoginForm() {
  const [checked, setChecked] = useState(false);
  return (
    <LoginFormBlock>
      <MTitle>Login to your account</MTitle>
      <FormLogin>
        <InputBlock>
          <Label>Your Email</Label>
          <LoginInput placeholder="Your Email" />
        </InputBlock>
        <InputBlock>
          <Label>Password</Label>
          <LoginInput placeholder="Password" />
        </InputBlock>
        <OptionRow>
          <CheckBoxRow onClick={() => setChecked(!checked)}>
            <Checkbox className={checked ? "Checked" : ""} />
            <p>Keep me signed in</p>
          </CheckBoxRow>
          <PLeft>Forgot password?</PLeft>
        </OptionRow>
        <Button>Login</Button>
      </FormLogin>
    </LoginFormBlock>
  );
}
const LoginFormBlock = styled.div`
  margin-top: 60px;
`;
const InputBlock = styled.div``;
const FormLogin = styled.form`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const LoginInput = styled.input`
  margin-top: 10px;
  height: 45px;
  width: 100%;
  max-width: 700px;
  background-color: var(--input-bg);
  border: 0;
  outline: none;
  padding: 0 15px;
  font-size: 18px;
  color: var(--input-color);
  font-family: main_m;
  font-weight: bold;
  letter-spacing: 2px;
  &::placeholder {
    color: var(--input-placeholder);
  }
`;
const OptionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;
const CheckBoxRow = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  user-select: none;
`;

const PLeft = styled.p`
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  margin-left: auto;
  &::before {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: -5px;
    background-color: var(--main);
    transition: width 0.2s;
  }
  &:hover:before {
    width: 100%;
  }
`;
