import styled from "styled-components";
import { getThisMonth } from "../../assets/functions";
import Avatar from "../../images/user.png";

const NotificationIcon = (
  <svg
    width="22"
    height="27"
    viewBox="0 0 22 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.3177 18.4723C21.2237 18.359 21.1313 18.2457 21.0407 18.1364C19.7946 16.6292 19.0407 15.7195 19.0407 11.4528C19.0407 9.24381 18.5123 7.43131 17.4706 6.07194C16.7026 5.0677 15.6644 4.30588 14.2959 3.74288C14.2783 3.73308 14.2626 3.72023 14.2495 3.70493C13.7573 2.05668 12.4104 0.952759 10.8913 0.952759C9.37217 0.952759 8.02582 2.05668 7.53362 3.70323C7.52048 3.71797 7.50497 3.73041 7.48774 3.74004C4.29434 5.05467 2.74238 7.57688 2.74238 11.4511C2.74238 15.7195 1.98963 16.6292 0.742405 18.1347C0.65178 18.244 0.559455 18.355 0.465432 18.4706C0.222557 18.7635 0.0686763 19.1198 0.0220001 19.4974C-0.0246761 19.8751 0.0378063 20.2582 0.202053 20.6014C0.551526 21.3377 1.29635 21.7948 2.14653 21.7948H19.6422C20.4885 21.7948 21.2282 21.3383 21.5788 20.6054C21.7437 20.262 21.8068 19.8786 21.7605 19.5006C21.7143 19.1225 21.5606 18.7657 21.3177 18.4723ZM10.8913 26.3278C11.7097 26.3271 12.5128 26.1049 13.2152 25.6848C13.9176 25.2647 14.4933 24.6623 14.881 23.9415C14.8993 23.9069 14.9083 23.8683 14.9072 23.8292C14.9061 23.7901 14.8949 23.752 14.8748 23.7186C14.8546 23.6851 14.8261 23.6574 14.7921 23.6382C14.758 23.619 14.7196 23.609 14.6805 23.609H7.10315C7.06402 23.6089 7.02553 23.6189 6.99142 23.638C6.9573 23.6572 6.92873 23.6848 6.90848 23.7183C6.88824 23.7518 6.87701 23.79 6.87588 23.8291C6.87476 23.8682 6.88378 23.9069 6.90207 23.9415C7.2898 24.6622 7.86533 25.2645 8.56765 25.6847C9.26997 26.1048 10.0729 26.327 10.8913 26.3278Z"
      fill="black"
    />
  </svg>
);

const SearchIcon = (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.3638 15.117L20.6468 19.399L19.2318 20.814L14.9498 16.531C13.3565 17.8082 11.3748 18.5029 9.33276 18.5C4.36476 18.5 0.332764 14.468 0.332764 9.5C0.332764 4.532 4.36476 0.5 9.33276 0.5C14.3008 0.5 18.3328 4.532 18.3328 9.5C18.3357 11.542 17.641 13.5237 16.3638 15.117ZM14.3578 14.375C15.6269 13.0699 16.3356 11.3204 16.3328 9.5C16.3328 5.632 13.1998 2.5 9.33276 2.5C5.46476 2.5 2.33276 5.632 2.33276 9.5C2.33276 13.367 5.46476 16.5 9.33276 16.5C11.1532 16.5029 12.9026 15.7941 14.2078 14.525L14.3578 14.375Z"
      fill="#B8B8B8"
    />
  </svg>
);

export default function HeaderNav() {
  const time = new Date();
  const getTime = time.toLocaleDateString().split("/");
  console.log();

  return (
    <HeaderNavContent>
      <HeaderSearchBlock>
        <HeaderSearch placeholder="Search" />
        {SearchIcon}
      </HeaderSearchBlock>
      <HeaderTimeBlock>
        {getTime[1]} {getThisMonth(parseInt(getTime[0]))} {getTime[2]}
        {" | "}
        {time.getHours()}:{time.getMinutes()}
      </HeaderTimeBlock>
      <HeaderNotification>{NotificationIcon}</HeaderNotification>
      <HeaderAvatar>
        <img src={Avatar} alt="Avatar" />
      </HeaderAvatar>
    </HeaderNavContent>
  );
}

const HeaderNavContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;
const HeaderSearchBlock = styled.div`
  height: 50px;
  width: 70%;
  position: relative;
  display: flex;
  align-items: center;
  svg {
    cursor: pointer;
    position: absolute;
    right: 25px;
    path {
      fill: var(--input-placeholder);
    }
  }
`;

const HeaderSearch = styled.input`
  height: 100%;
  width: 100%;
  padding: 0 20px;
  font-family: main_m;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 2px;
  border: 0;
  outline: none;
  background-color: var(--block);
  border-radius: 8px;
  transition: background-color 0.2s;
  &:focus {
    background-color: var(--block-hover);
  }
  &::placeholder {
    color: var(--input-placeholder);
  }
`;
const HeaderTimeBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--block);
  border-radius: 8px;
  font-family: main_m;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 1.5px;
  height: 50px;
  width: 250px;
  color: var(--main);
  transition: background-color 0.2s;
  &:hover {
    background-color: var(--block-hover);
  }
`;

const HeaderNotification = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  aspect-ratio: 1;
  background-color: var(--block);
  border-radius: 8px;
  transition: background-color 0.2s;
  &:hover {
    background-color: var(--block-hover);
  }
  svg {
    height: 25px;
    aspect-ratio: 1;
    path {
      fill: var(--main);
    }
  }
`;
const HeaderAvatar = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  aspect-ratio: 1;
  background-color: var(--block);
  border-radius: 8px;
  transition: background-color 0.2s;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  &:hover {
    background-color: var(--block-hover);
  }
`;
