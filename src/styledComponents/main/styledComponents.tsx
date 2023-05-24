import styled, { createGlobalStyle, keyframes } from "styled-components";

const LogoElements = ({
  className,
  White,
}: {
  className?: string;
  White?: boolean;
}) => (
  <div className={className}>
    {White ? (
      <svg
        width="63"
        height="60"
        viewBox="0 0 63 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.20655 38.4576C2.13382 33.3685 2.13382 26.9959 5.20655 21.9068L11.0575 12.2164C13.9561 7.41565 19.1553 4.48144 24.7633 4.48144L37.7277 4.48144C43.3357 4.48144 48.5349 7.41564 51.4336 12.2164L57.2845 21.9068C60.3572 26.9959 60.3572 33.3685 57.2845 38.4576L51.4336 48.1479C48.5349 52.9487 43.3357 55.8829 37.7277 55.8829L24.7633 55.8829C19.1553 55.8829 13.9561 52.9487 11.0575 48.1479L5.20655 38.4576Z"
          fill="#616161"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22.7863 4.60337C27.6206 5.20339 31.963 7.98479 34.518 12.2164L40.3689 21.9067C43.4416 26.9958 43.4416 33.3685 40.3689 38.4576L34.518 48.1479C31.9635 52.3787 27.6223 55.1599 22.7892 55.7606C17.9549 55.1606 13.6125 52.3792 11.0575 48.1476L5.20665 38.4572C2.13392 33.3681 2.13392 26.9955 5.20665 21.9064L11.0575 12.2161C13.612 7.98528 17.9532 5.20414 22.7863 4.60337Z"
          fill="white"
        />
      </svg>
    ) : (
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
    )}
    Vision
  </div>
);

export const Logo = styled(LogoElements)`
  display: flex;
  align-items: center;
  font-family: logo_f;
  gap: 10px;
  color: ${(props) => (props.White ? "var(--block)" : "var(--main)")};
  letter-spacing: 4px;
  font-size: 32px;
  transition: opacity 1s;
`;

const LoaderElements = ({
  className,
}: {
  className?: string;
  White?: boolean;
}) => (
  <div className={className}>
    <LoaderInside />
  </div>
);

export const Loader = styled(LoaderElements)`
  position: fixed;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--block);
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  visibility: visible;
  opacity: 1;
  transition: visibility 0.3s, opacity 0.3s;
`;
const loading = keyframes`
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: 360deg;

  }
`;
const LoaderInside = styled.div`
  height: 85px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 10px solid transparent;
  border-top: 10px solid var(--main);
  border-bottom: 10px solid var(--main);
  animation: ${loading} 1.2s infinite linear;
`;
export const GlobalStyles = createGlobalStyle`
  .LoaderHide{
  visibility: hidden;
  opacity: 0;
  }
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
