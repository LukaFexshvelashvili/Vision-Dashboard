import styled from "styled-components";

export const HomeContent = styled.div`
  display: flex;
  gap: 20px;
`;

export const ContentR7 = styled.div`
  min-width: 70%;
`;

export const ContentR3 = styled.div`
  width: 30%;
`;
export const WelcomeBlock = styled.div`
  padding: 20px;
  position: relative;
  width: 100%;
  overflow: hidden;
  min-height: 480px;
  background: linear-gradient(
    100.06deg,
    #000000 31.35%,
    #2e2e2e 85.26%,
    #000000 100%
  );
  border-radius: 18px;
`;
export const DecorImg = styled.img`
  position: absolute;
  right: 0px;
  top: 0px;
`;

export const BlockTitle = styled.h1`
  color: #ffffff;
  font-family: main_m;
  letter-spacing: 3px;
  margin: 50px;
  margin-bottom: 90px;
`;
export const BlockRows = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

export const BlockStat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 200px;
  width: 240px;
  transition: transform 0.4s;

  &:hover {
    transform: translateY(-10px);
  }
  &::after {
    content: "";
    position: absolute;
    height: 50px;
    width: 90%;
    bottom: -20px;
    background: #626262;
    z-index: 0;
    border-radius: 15px;
  }
`;
export const BlockStatContent = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    28.72deg,
    rgba(62, 62, 62, 0.51) -5.54%,
    rgba(44, 44, 44, 0.51) 62.1%,
    rgba(151, 151, 151, 0.51) 113.25%
  );
  backdrop-filter: blur(14px);
  border-radius: 15px;
`;
export const BlockStatIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  left: 20px;
  height: 48px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #403d3d;
`;

export const BlockStatInfo = styled.div`
  position: absolute;
  width: 100%;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-family: main_m;
  font-weight: bold;
  align-items: flex-end;
  padding: 0 20px;
`;
export const StatLabel = styled.p`
  letter-spacing: 2px;
  font-size: 12px;
  text-transform: uppercase;
  color: #b8b8b8;
`;
export const StatProgress = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const StatGet = ({
  className,
  children,
  per,
}: {
  className?: string;
  children?: string;
  per: number;
}) => (
  <div className={className}>
    {children} {per >= 0 ? "+" : ""}
    {per}%
  </div>
);

export const StatPer = styled(StatGet)`
  font-family: main_m;
  color: ${(props) => (props.per >= 0 ? "#3FB8A9" : "#FA5757")};
  background-color: ${(props) =>
    props.per >= 0 ? "rgba(12, 255, 226, 0.10)" : "rgba(250, 87, 87, 0.10)"};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
  font-size: 14px;
  height: 30px;
  width: 60px;
  border-radius: 5px;
`;
export const StatTimes = styled.h1`
  color: #ffffff;
  letter-spacing: 2px;
  font-size: 32px;
`;
export const StatLast = styled.div`
  margin-top: 4px;
  display: flex;
  align-items: center;
  gap: 6px;
  letter-spacing: 1.5px;
  font-size: 14px;
  color: #b8b8b8;
`;
