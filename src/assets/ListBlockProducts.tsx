import { useState } from "react";
import { CheckBox, ProductI } from "./ListRender";
import styled from "styled-components";

export default function ListBlockProducts({
  invoiceNo,
  productName,
  date,
  price,
  status,
}: ProductI) {
  const [active, setActive] = useState(false);
  const checkProfit = () => {
    switch (status) {
      case 0:
        return <A0>-${price}</A0>;
        break;
      case 1:
        return <A1>${price}</A1>;
        break;
      case 2:
        return <A2>+${price}</A2>;
        break;
    }
  };
  const checkStatus = () => {
    switch (status) {
      case 0:
        return <B0 />;
        break;
      case 1:
        return <B1 />;
        break;
      case 2:
        return <B2 />;
        break;
    }
  };
  return (
    <ListRow>
      <CheckBox onClick={() => setActive((state) => !state)} active={active} />
      <L2>{invoiceNo}</L2>
      <L2>{productName}</L2>
      <L2>{date}</L2>
      <L1>{checkProfit()}</L1>
      <L2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {checkStatus()}
      </L2>
      <L1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <OptionButton>Detail</OptionButton>
      </L1>
    </ListRow>
  );
}
const OptionButton = styled.button`
  cursor: pointer;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  background-color: #2c2c2c;
  color: #ffffff;
  border-radius: 5px;
  transition: background-color 0.2s;
  font-family: main_m;
  letter-spacing: 1px;
  &:hover {
    background-color: #3f3f3f;
  }
`;

const ListRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-family: main_m;
  color: #747474;
  padding: 10px 0;
  border-bottom: 1px solid #e6e6e6;
`;
const L2 = styled.div`
  width: 20%;
`;
const L1 = styled.div`
  width: 10%;
`;

const A0 = styled.p`
  color: #fa5757;
  font-weight: normal;
  text-align: center;
`;
const A1 = styled.p`
  color: #f8b917;
  font-weight: normal;
  text-align: center;
`;
const A2 = styled.p`
  color: #3fb8a9;
  text-align: center;
  font-weight: normal;
`;

const B0 = () => <B0B>Fail</B0B>;
const B1 = () => <B1B>Hold</B1B>;
const B2 = () => <B2B>Completed</B2B>;

const B0B = styled.div`
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  background-color: #fa5757;
  color: #ffffff;
  border-radius: 5px;
`;
const B1B = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 120px;
  border-radius: 5px;

  background-color: #f8b917;
  color: #ffffff;
`;
const B2B = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 30px;
  border-radius: 5px;

  background-color: #3fb8a9;
  color: #ffffff;
`;
