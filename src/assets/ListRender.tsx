import { useState } from "react";
import styled from "styled-components";
import ListBlockProducts from "./ListBlockProducts";
import { transactions } from "../api/Transactions";

export interface ProductI {
  invoiceNo: string;
  productName: string;
  date: string;
  price: number;
  status: number;
}

export default function ListRender() {
  return (
    <ListRenderBlock>
      <ListFirstLine>
        <ListBlock />
      </ListFirstLine>
      <ListRows>
        {transactions.map((product: ProductI, i: number) => (
          <ListBlockProducts
            key={i}
            invoiceNo={product.invoiceNo}
            productName={product.productName}
            date={product.date}
            price={product.price}
            status={product.status}
          />
        ))}
      </ListRows>
    </ListRenderBlock>
  );
}
const ListRows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ListRenderBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;
const ListFirstLine = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const CheckBox = styled.button<{ active: boolean }>`
  height: 20px;
  aspect-ratio: 1;
  border-radius: 5px;
  border: 2px solid #d9d9d9;
  transition: background-color 0.1s;
  background-color: ${(props) => (props.active ? "#d9d9d9" : "transparent")};
  cursor: pointer;
  margin-right: 20px;
`;

const ListBlock = () => {
  const [active, setActive] = useState(false);
  return (
    <ListRow>
      <CheckBox onClick={() => setActive((state) => !state)} active={active} />
      <L2>Invoice No.</L2>
      <L2>Product Name</L2>
      <L2>Date</L2>
      <L1>Price</L1>
      <L2 style={{ paddingLeft: "20px" }}>Status</L2>
      <L1>Option</L1>
    </ListRow>
  );
};

const ListRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-family: main_m;
  color: #99b2c6;
  padding: 10px 0;
  border-bottom: 1px solid #e6e6e6;
`;
const L2 = styled.div`
  width: 20%;
`;
const L1 = styled.div`
  width: 10%;
`;
