import React from "react";
import {
  Btn1,
  CardBox,
  CardShowcase,
  GrayText13,
  Mainsection,
  NavText,
  NavText2,
  PrintIcon,
  SearchContainer,
  SearchInput,
  TableDashboard,
  TableSection,
  Text13,
} from "../../Components/StyledComponents";

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
              <td>Product 1</td>
              <td>Brand A</td>
              <td>$20.00</td>
              <td>2</td>
              <td>$40.00</td>
              <td>In Stock</td>
            </tr>
            <tr>
              <td>Product 2</td>
              <td>Brand B</td>
              <td>$30.00</td>
              <td>1</td>
              <td>$30.00</td>
              <td>Out of Stock</td>
            </tr>
          </tbody>
        </TableSection>
      </TableDashboard>
    </Mainsection>
  );
}

export default Order;
