import styled from "styled-components";

const LogoElements = ({ className }: { className?: string }) => (
  <div className={className}>
    <svg
      width="63"
      height="60"
      viewBox="0 0 63 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.79762 38.1888C2.72489 33.0997 2.72489 26.727 5.79762 21.6379L11.6485 11.9476C14.5472 7.14679 19.7464 4.21258 25.3544 4.21258L38.3188 4.21258C43.9268 4.21258 49.126 7.14678 52.0246 11.9476L57.8755 21.6379C60.9483 26.727 60.9483 33.0996 57.8755 38.1887L52.0247 47.8791C49.126 52.6799 43.9268 55.6141 38.3188 55.6141L25.3544 55.6141C19.7464 55.6141 14.5472 52.6799 11.6485 47.8791L5.79762 38.1888Z"
        fill="#C9D9FA"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23.3774 4.33451C28.2117 4.93453 32.5541 7.71593 35.1091 11.9476L40.96 21.6379C44.0327 26.727 44.0327 33.0996 40.96 38.1887L35.1091 47.8791C32.5546 52.1099 28.2134 54.891 23.3803 55.4918C18.546 54.8917 14.2036 52.1103 11.6486 47.8787L5.79771 38.1884C2.72498 33.0993 2.72498 26.7266 5.79771 21.6375L11.6486 11.9472C14.2031 7.71642 18.5443 4.93528 23.3774 4.33451Z"
        fill="black"
      />
    </svg>
    VISION
  </div>
);

export const Logo = styled(LogoElements)`
  display: flex;
  align-items: center;
  font-family: logo_f;
  gap: 10px;
  color: var(--main);
  letter-spacing: 3px;
  font-size: 32px;
`;

export const MTitle = styled.h2`
  color: var(--main);
  font-family: main_m;
  letter-spacing: 2px;
`;
export const STitle = styled.h3`
  color: var(--main);
  font-family: main_m;
  letter-spacing: 2px;
`;
export const Label = styled.p`
  color: var(--main);
  font-family: main_m;
  letter-spacing: 2px;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Checkbox = styled.div`
  height: 20px;
  aspect-ratio: 1;
  border: 2px solid var(--main);
  border-radius: 5px;
  transition: background-color 0.1s;
  background: transparent;
  cursor: pointer;
  &::before {
    opacity: 0;
  }
  &::after {
    opacity: 0;
  }
`;
export const Button = styled.button`
  height: 55px;
  width: 100%;
  background-color: var(--main);
  color: var(--block);
  border-radius: 5px;
  border: 0;
  font-family: main_m;
  letter-spacing: 1px;
  font-size: 18px;
  font-weight: bold;
  transition: background-color 0.3s;
  cursor: pointer;
  &:hover {
    background-color: var(--main-hover);
  }
`;
