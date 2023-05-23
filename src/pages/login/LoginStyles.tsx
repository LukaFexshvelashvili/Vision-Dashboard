import styled from "styled-components";

export const LoginFormBlock = styled.div`
  margin-top: 60px;
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
`;
export const LoginContent = styled.div`
  display: flex;
  align-items: stretch;
  min-height: 100%;
  width: 100%;
  background-color: var(--block);
  border-radius: 30px;
  overflow: hidden;
`;

export const LoginSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50%;
  padding: 40px;
`;

export const LoginSideContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  max-width: 600px;
`;

export const ImageSide = styled.div`
  min-height: 100%;
  width: 50%;
  border-radius: 30px;
  background: linear-gradient(
    100.06deg,
    #000000 31.35%,
    #2e2e2e 85.26%,
    #000000 98.28%
  );
`;
