import styled from "styled-components";

export const LoginFormBlock = styled.div`
  margin-top: 60px;
  transition: opacity 1s;
`;
export const InputBlock = styled.div``;
export const FormLogin = styled.form`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const LoginInput = styled.input`
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
export const OptionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const CheckBoxRow = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  user-select: none;
`;

export const PLeft = styled.p`
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
  @media (max-width: 500px) {
    margin: 0 auto;
  }
`;
export const LoginContent = styled.div`
  display: flex;
  align-items: stretch;
  min-height: 100%;
  width: 100%;
  background-color: var(--block);
  border-radius: 30px;
  overflow: hidden;
  @media (max-width: 1240px) {
    flex-direction: column;
  }
`;

export const LoginSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50%;
  padding: 40px;
  @media (max-width: 1240px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    width: 100%;
    padding: 40px 10px;
  }
`;

export const LoginSideContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  max-width: 600px;
`;

export const ImageSideContent = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 100%;
  width: 50%;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  background: linear-gradient(
    100.06deg,
    #000000 31.35%,
    #2e2e2e 85.26%,
    #000000 98.28%
  );
  @media (max-width: 1240px) {
    width: 100%;
    min-height: 650px;
  }
`;

export const SocialLoginContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 50px;
  transition: opacity 1s;
`;
export const SocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    justify-content: center;
  }
`;

export const SocialButton = styled.button`
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
export const NotRegistered = styled.p`
  color: var(--nav-li);
`;
export const Marked = styled.span`
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
export const CopyRight = styled.p`
  color: var(--nav-li);
  font-size: 14px;
`;
