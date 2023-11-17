import React from "react";
import {
  ACE_Sec,
  Approvel,
  Btn1,
  CardBox,
  CardShowcase,
  Edit,
  GrayText13,
  Mainsection,
  Missing,
  NavText,
  NavText2,
  PrintIcon,
  ProductImg,
  SearchContainer,
  SearchInput,
  StatusBox,
  TableDashboard,
  TableSection,
  Text13,
} from "../../Components/StyledComponents";
import { Apple, Avocado } from "../../asserts/index.js";

function Order() {
  const handlePrint = () => {
    window.print();
  };
  return (
    <Mainsection>
      <CardShowcase>
        <CardBox>
          <GrayText13>Supplier</GrayText13>
          <Text13>Vegetable & east cost fruits</Text13>
        </CardBox>
        <CardBox>
          <GrayText13>Shipping Date</GrayText13>
          <Text13>Thu,Feb 10</Text13>
        </CardBox>
        <CardBox>
          <GrayText13>Total</GrayText13>
          <Text13>$ 15,028.3</Text13>
        </CardBox>
        <CardBox>
          <GrayText13>Category</GrayText13>
          <Text13>
            ♨&nbsp;&nbsp; 🍶&nbsp;&nbsp; ❄&nbsp;&nbsp; 🥨&nbsp;&nbsp; 🎂
            &nbsp;&nbsp;🎂&nbsp;&nbsp;🎂&nbsp;&nbsp;🎂
          </Text13>
        </CardBox>
        <CardBox>
          <GrayText13>Department</GrayText13>
          <Text13>300-444-678</Text13>
        </CardBox>
        <CardBox>
          <GrayText13>Status</GrayText13>
          <Text13>Awaiting your approvel</Text13>
        </CardBox>
      </CardShowcase>

      <TableDashboard>
        <SearchContainer>
          <NavText>
            <SearchInput placeholder="Search.." />
          </NavText>
          <NavText2>
            <Btn1>Add Item</Btn1>
            <PrintIcon onClick={handlePrint}>🖶 </PrintIcon>
          </NavText2>
        </SearchContainer>
        <TableSection>
          <thead>
            <tr>
              <th>Productname</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ display: "flex" }}>
                <ProductImg src={Avocado} />
                &nbsp;&nbsp; Lorem ipsum dolor sit amet consectetur.
              </td>
              <td>
                Hormel black <br />
                labelmany
              </td>
              <td>$60.67/6+1LB</td>
              <td>2*6LB</td>
              <td>$9000.00</td>
              <td style={{ display: "flex" }}>
                <StatusBox>Missing-urgent</StatusBox>
                <ACE_Sec>
                  <Approvel>✔</Approvel>
                  <Missing>✘</Missing>
                  <Edit>📝</Edit>
                </ACE_Sec>
              </td>
            </tr>
          </tbody>
        </TableSection>
      </TableDashboard>
    </Mainsection>
  );
}

export default Order;
