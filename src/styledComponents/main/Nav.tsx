import styled from "styled-components";
import { Logo } from "./styledComponents";
import { FirstUl, MoonIcon, SecondUl, SunIcon } from "./NavArray";
import { useState } from "react";

export default function Nav() {
  const [liActive, setLiActive] = useState<number>(0);
  const [darkmode, setDarkmode] = useState<boolean>(false);

  return (
    <NavContent>
      <NavContainer>
        <Logo sm />
        <NavContentor>
          <Label>Administrator</Label>
          <UlButtons>
            {FirstUl.map(
              (
                e: { icon: JSX.Element; title: string; link: string },
                i: number
              ) => (
                <LiButton
                  key={i}
                  onClick={() => setLiActive(i)}
                  activeLi={liActive == i ? true : false}
                >
                  {e.icon} {e.title}
                </LiButton>
              )
            )}
          </UlButtons>
        </NavContentor>
        <NavContentor>
          <Label>Settings</Label>
          <UlButtons>
            {SecondUl.map(
              (
                e: { icon: JSX.Element; title: string; link: string },
                i: number
              ) => (
                <LiButton
                  key={i}
                  onClick={() => setLiActive(i + 30)}
                  activeLi={liActive == i + 30 ? true : false}
                >
                  {e.icon} {e.title}
                </LiButton>
              )
            )}
          </UlButtons>
        </NavContentor>
      </NavContainer>

      <NavControls>
        {SunIcon}
        <Switcher
          onClick={() => setDarkmode(!darkmode)}
          darkmode={darkmode ? true : false}
        >
          <div></div>
        </Switcher>
        {MoonIcon}
      </NavControls>
      <NavCopyRight>© Copyright Vision 2023</NavCopyRight>
    </NavContent>
  );
}

const NavContent = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  height: calc(100vh - 40px);
  top: 20px;
  min-height: 820px;
  min-width: 290px;
  width: 290px;
  border-radius: 15px;
  background-color: var(--block);
`;
const NavContainer = styled.div`
  padding: 20px 0;

  padding-left: 30px;
  width: 100%;
`;

const NavContentor = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const UlButtons = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const LiButton = styled.li<{ activeLi: boolean }>`
  display: flex;
  align-items: center;
  color: ${(props) => (props.activeLi ? "var(--block)" : "var(--nav-li)")};
  font-size: 14px;
  font-family: main_m;
  font-weight: bold;
  letter-spacing: 3px;
  width: 90%;
  display: flex;
  background-color: ${(props) =>
    props.activeLi ? "var(--main)" : "transparent"};
  padding: 15px 0px 15px 25px;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  svg {
    margin-right: 25px;
    path {
      fill: ${(props) => (props.activeLi ? "var(--block)" : "var(--nav-li)")};
      transition: fill 0.3s;
    }
  }
  &:hover {
    ${(props) =>
      props.activeLi ? "" : "background-color: var(--button-hover);"}
  }
`;
const Label = styled.p`
  font-size: 14px;
  font-family: main_m;
  font-weight: bold;
  letter-spacing: 2px;
  color: var(--input-placeholder);
  margin-bottom: 10px;
  padding-left: 20px;
`;
const NavControls = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 60px;
`;
const Switcher = styled.div<{ darkmode: boolean }>`
  height: 30px;
  width: 50px;
  margin: 0 10px;
  border-radius: 50px;
  background-color: var(--nav-li);
  padding: 3px;
  cursor: pointer;
  user-select: none;
  div {
    height: 100%;
    aspect-ratio: 1;
    background-color: var(--block);
    border-radius: 50%;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
    transition: 0.2s;
    transform: translateX(${(props) => (props.darkmode ? "20px" : "0")});
  }
`;

const NavCopyRight = styled.p`
  display: flex;
  align-items: center;
  position: absolute;
  font-size: 12px;
  font-family: main_m;
  font-weight: bold;
  letter-spacing: 2px;
  color: var(--nav-li);
  bottom: 20px;
`;
