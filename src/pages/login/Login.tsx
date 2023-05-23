import { useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  Logo,
  MTitle,
  STitle,
} from "../../styledComponents/main/styledComponents";
import {
  CheckBoxRow,
  FormLogin,
  ImageSide,
  InputBlock,
  LoginContent,
  LoginFormBlock,
  LoginInput,
  LoginSide,
  LoginSideContent,
  OptionRow,
  PLeft,
} from "./LoginStyles";

import GoogleIcon from "../../images/icons/soc/google.png";
import FacebookIcon from "../../images/icons/soc/facebook.png";
import DiscordIcon from "../../images/icons/soc/discord.png";

import styled from "styled-components";

export default function Login() {
  return (
    <LoginContent>
      <LoginSide>
        <LoginSideContent>
          <Logo></Logo>
          <LoginForm />
          <SocialLogin />
        </LoginSideContent>
      </LoginSide>
      <ImageSide></ImageSide>
    </LoginContent>
  );
}

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
function SocialLogin() {
  return (
    <SocialLoginContent>
      <STitle>or continue with open account</STitle>
      <SocialRow>
        <SocialButton>
          <img src={GoogleIcon} alt="GoogleIcon" /> Google
        </SocialButton>
        <SocialButton>
          <img src={FacebookIcon} alt="GoogleIcon" /> Facebook
        </SocialButton>
        <SocialButton>
          <img src={DiscordIcon} alt="GoogleIcon" /> Discord
        </SocialButton>
      </SocialRow>
      <NotRegistered>
        not registered yet? <Marked>Try Sign Up</Marked>
      </NotRegistered>
      <CopyRight>© Copyright Vision 2023 </CopyRight>
    </SocialLoginContent>
  );
}

const SocialLoginContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 50px;
`;
const SocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background-color: var(--input-bg);
  color: var(--main);
  border: 0;
  height: 60px;
  width: 180px;
  font-family: main_m;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: var(--button-hover);
  }
`;
const NotRegistered = styled.p`
  color: var(--nav-li);
`;
const Marked = styled.a`
  position: relative;
  display: inline-flex;
  justify-content: center;
  color: var(--main);
  cursor: pointer;
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
const CopyRight = styled.p`
  color: var(--nav-li);
  font-size: 14px;
`;
