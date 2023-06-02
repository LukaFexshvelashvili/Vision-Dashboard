import styled from "styled-components";
import DecorImage from "../../images/bg/objects/welcomeBlock.png";
import {
  BlockRows,
  BlockStat,
  BlockStatContent,
  BlockStatIcon,
  BlockStatInfo,
  BlockTitle,
  ContentR3,
  ContentR7,
  DecorImg,
  HomeContent,
  StatLabel,
  StatLast,
  StatPer,
  StatProgress,
  StatTimes,
  WelcomeBlock,
} from "./HomeStyled";
import WelcomeBlocks from "./assets/WelcomeBlocks";

const eye = (
  <svg
    width="17"
    height="12"
    viewBox="0 0 17 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.63123 0.192017C4.88123 0.192017 1.67873 2.52452 0.381226 5.81702C1.67873 9.10952 4.88123 11.442 8.63123 11.442C12.3812 11.442 15.5837 9.10952 16.8812 5.81702C15.5837 2.52452 12.3812 0.192017 8.63123 0.192017ZM8.63123 9.56702C6.56123 9.56702 4.88123 7.88702 4.88123 5.81702C4.88123 3.74702 6.56123 2.06702 8.63123 2.06702C10.7012 2.06702 12.3812 3.74702 12.3812 5.81702C12.3812 7.88702 10.7012 9.56702 8.63123 9.56702ZM8.63123 3.56702C7.38623 3.56702 6.38123 4.57202 6.38123 5.81702C6.38123 7.06202 7.38623 8.06702 8.63123 8.06702C9.87623 8.06702 10.8812 7.06202 10.8812 5.81702C10.8812 4.57202 9.87623 3.56702 8.63123 3.56702Z"
      fill="#B8B8B8"
    />
  </svg>
);

export default function Home() {
  return (
    <HomeContent>
      <ContentR7>
        <WelcomeBlock>
          <DecorImg src={DecorImage} alt="DecorObject" />
          <BlockTitle>Welcome to your Analytics</BlockTitle>
          <BlockRows>
            {WelcomeBlocks.map((e, i) => (
              <BlockStat key={i}>
                <BlockStatContent>
                  <BlockStatIcon>{e.icon}</BlockStatIcon>
                  <BlockStatInfo>
                    <StatLabel>{e.label}</StatLabel>
                    <StatProgress>
                      <StatPer per={e.percentage} />
                      <StatTimes>{e.quantity.toLocaleString()}</StatTimes>
                    </StatProgress>
                    <StatLast>
                      {eye} Last week {e.lastQuantity.toLocaleString()}
                    </StatLast>
                  </BlockStatInfo>
                </BlockStatContent>
              </BlockStat>
            ))}
          </BlockRows>
        </WelcomeBlock>
      </ContentR7>
      <ContentR3></ContentR3>
    </HomeContent>
  );
}
