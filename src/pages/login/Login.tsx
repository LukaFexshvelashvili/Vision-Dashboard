import { useContext, useEffect, useState } from "react";
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
  CopyRight,
  FormLogin,
  ImageSideContent,
  InputBlock,
  LoginContent,
  LoginFormBlock,
  LoginInput,
  LoginSide,
  LoginSideContent,
  Marked,
  NotRegistered,
  OptionRow,
  PLeft,
  SocialButton,
  SocialLoginContent,
  SocialRow,
} from "./LoginStyles";

import GoogleIcon from "../../images/icons/soc/google.png";
import FacebookIcon from "../../images/icons/soc/facebook.png";
import DiscordIcon from "../../images/icons/soc/discord.png";
import Bg1 from "../../images/bg/objects/login1.png";
import Bg2 from "../../images/bg/objects/login2.png";
import { User } from "../../main/App";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const userData = useContext(User);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (userData.data.session == true) {
      navigate("/Home");
    }
    const getTout = setTimeout(() => {
      setLoaded(true);
    }, 300);
    return () => {
      clearTimeout(getTout);
    };
  }, []);
  return (
    <LoginContent>
      <LoginSide>
        <LoginSideContent>
          <Logo className={loaded ? "" : "getTr3"} />
          <LoginForm />
          <SocialLogin />
        </LoginSideContent>
      </LoginSide>
      <ImageSide />
    </LoginContent>
  );
}

function LoginForm() {
  const [checked, setChecked] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const getTout = setTimeout(() => {
      setLoaded(true);
    }, 500);
    return () => {
      clearTimeout(getTout);
    };
  }, []);

  return (
    <LoginFormBlock className={loaded ? "" : "getTr3"}>
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
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const getTout = setTimeout(() => {
      setLoaded(true);
    }, 700);
    return () => {
      clearTimeout(getTout);
    };
  }, []);
  return (
    <SocialLoginContent className={loaded ? "" : "getTr3"}>
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
        not registered yet?{" "}
        <Marked>
          <Link to={"/Register"}>Try Sign Up</Link>
        </Marked>
      </NotRegistered>
      <CopyRight>© Copyright Vision 2023 </CopyRight>
    </SocialLoginContent>
  );
}

function ImageSide() {
  const [loaded, setLoaded] = useState(false);
  const [loaded2, setLoaded2] = useState(false);
  useEffect(() => {
    const getTout = setTimeout(() => {
      setLoaded(true);
    }, 400);
    const getTout2 = setTimeout(() => {
      setLoaded2(true);
    }, 700);
    return () => {
      clearTimeout(getTout);
      clearTimeout(getTout2);
    };
  }, []);
  return (
    <ImageSideContent>
      <ImgObj1 src={Bg1} alt="bgDecor" className={loaded ? "" : "getTr1"} />
      <ImgObj2 src={Bg2} alt="bgDecor" className={loaded ? "" : "getTr2"} />
      <ImageSideTexter>
        <Logo White className={loaded ? "" : "getTr3"} />
        <ImageTexter className={loaded2 ? "" : "getTr3"}>
          Powerfull and Easy to use Marketing Dashboard Analytic
        </ImageTexter>
      </ImageSideTexter>
    </ImageSideContent>
  );
}

const ImgObj1 = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
  transition: transform 1.5s, rotate 1.5s;
`;
const ImgObj2 = styled.img`
  position: absolute;
  top: 50px;
  right: 0;
  user-select: none;
  transition: transform 1.5s, rotate 1.5s;
`;
const ImageSideTexter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  position: absolute;
  width: 80%;
  bottom: 55px;
  min-height: 100px;
  color: var(--block);
`;
const ImageTexter = styled.h1`
  color: var(--block);
  font-family: main_m;
  font-size: 48px;
  line-height: 65px;
  width: 100%;
  max-width: 490px;
  letter-spacing: 2px;
  transition: opacity 1s;
`;
