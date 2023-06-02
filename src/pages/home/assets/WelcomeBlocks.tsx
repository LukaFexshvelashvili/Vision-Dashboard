const rocket = (
  <svg
    width="19"
    height="21"
    viewBox="0 0 19 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.8257 15.3174L9.89134 18.8194C8.52725 19.8589 6.80863 20.3194 5.10752 20.1012C4.06797 18.7371 3.60747 17.0185 3.8257 15.3174ZM14.6522 15.5694L15.2502 18.5335L14.2867 20.2024L0.43032 12.2024L1.39382 10.5335L4.25987 9.56937L7.16237 4.5421C8.90387 1.52573 12.5544 0.21083 16.131 1.00793C18.6096 3.70683 19.2962 7.52573 17.5547 10.5421L14.6522 15.5694ZM11.3585 9.27415C11.8179 9.53936 12.3638 9.61123 12.8762 9.47395C13.3885 9.33666 13.8254 9.00146 14.0906 8.5421C14.3558 8.08273 14.4277 7.53682 14.2904 7.02446C14.1531 6.5121 13.8179 6.07526 13.3585 5.81005C12.8992 5.54483 12.3532 5.47296 11.8409 5.61024C11.3285 5.74753 10.8917 6.08273 10.6265 6.5421C10.3613 7.00146 10.2894 7.54738 10.4267 8.05973C10.564 8.57209 10.8992 9.00893 11.3585 9.27415Z"
      fill="white"
    />
  </svg>
);

const times = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.4585 10.807C22.1213 8.23462 20.8582 5.87334 18.9056 4.16513C16.953 2.45692 14.4448 1.5189 11.8504 1.52666C9.2561 1.53442 6.75351 2.48742 4.81115 4.20727C2.8688 5.92713 1.61982 8.29593 1.29803 10.8702C0.976243 13.4446 1.6037 16.0479 3.06294 18.193C4.52219 20.338 6.71318 21.8777 9.22579 22.5238C11.7384 23.17 14.4003 22.8782 16.7134 21.7032C19.0264 20.5282 20.8319 18.5505 21.7919 16.1403M22.4585 22.807V16.1403H15.7919"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.8586 14.6026C13.2185 14.6026 14.3209 13.5002 14.3209 12.1403C14.3209 10.7804 13.2185 9.67798 11.8586 9.67798C10.4987 9.67798 9.39624 10.7804 9.39624 12.1403C9.39624 13.5002 10.4987 14.6026 11.8586 14.6026Z"
      fill="white"
    />
  </svg>
);

const timer = (
  <svg
    width="19"
    height="22"
    viewBox="0 0 19 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.89148 2.01978V0.0197754H12.8915V2.01978H6.89148ZM8.89148 13.0198H10.8915V7.01978H8.89148V13.0198ZM9.89148 21.0198C8.65815 21.0198 7.49548 20.7824 6.40348 20.3078C5.31215 19.8324 4.35815 19.1864 3.54148 18.3698C2.72481 17.5531 2.07881 16.5991 1.60348 15.5078C1.12881 14.4158 0.891479 13.2531 0.891479 12.0198C0.891479 10.7864 1.12881 9.62378 1.60348 8.53178C2.07881 7.44044 2.72481 6.48644 3.54148 5.66978C4.35815 4.85311 5.31215 4.20744 6.40348 3.73278C7.49548 3.25744 8.65815 3.01978 9.89148 3.01978C10.9248 3.01978 11.9165 3.18644 12.8665 3.51978C13.8165 3.85311 14.7081 4.33644 15.5415 4.96978L16.9415 3.56978L18.3415 4.96978L16.9415 6.36978C17.5748 7.20311 18.0581 8.09478 18.3915 9.04478C18.7248 9.99477 18.8915 10.9864 18.8915 12.0198C18.8915 13.2531 18.6541 14.4158 18.1795 15.5078C17.7041 16.5991 17.0581 17.5531 16.2415 18.3698C15.4248 19.1864 14.4708 19.8324 13.3795 20.3078C12.2875 20.7824 11.1248 21.0198 9.89148 21.0198Z"
      fill="white"
    />
  </svg>
);

const WelcomeBlocks = [
  {
    icon: rocket,
    label: "User Visit",
    percentage: 30,
    quantity: 57711,
    lastQuantity: 43212,
  },
  {
    icon: times,
    label: "Sessions",
    percentage: -15,
    quantity: 17577,
    lastQuantity: 23212,
  },
  {
    icon: timer,
    label: "Time on site",
    percentage: 30,
    quantity: 17577,
    lastQuantity: 23212,
  },
];

export default WelcomeBlocks;