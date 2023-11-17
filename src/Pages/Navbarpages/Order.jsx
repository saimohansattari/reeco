import React from "react";
import {
  ACE_Sec,
  Approvel,
  Btn1,
  CardBox,
  CardShowcase,
  ConfirmationPOPUP,
  Edit,
  GrayText13,
  Mainsection,
  Missing,
  NavText,
  NavText2,
  POPBtns,
  POPUP_Card,
  POPUP_H1,
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
import { useState } from "react";

function Order() {
  const [statuses, setStatuses] = useState(Array(8).fill(""));
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationIndex, setConfirmationIndex] = useState(null);

  const handlePrint = () => {
    window.print();
  };

  const handleApprove = (index) => {
    const newStatuses = [...statuses];
    newStatuses[index] = "Approvel";
    setStatuses(newStatuses);
  };

  const handleMissing = (index) => {
    setShowConfirmation(true);
    setConfirmationIndex(index);
  };

  const confirmMissing = (index) => {
    const newStatuses = [...statuses];
    newStatuses[index] = "Missing";
    setStatuses(newStatuses);

    setShowConfirmation(false);
  };

  const cancelConfirmation = () => {
    setShowConfirmation(false);
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
            {Array(8)
              .fill(null)
              .map((_, index) => (
                <tr key={index}>
                  <td style={{ display: "flex" }}>
                    <ProductImg src={Avocado} />
                    &nbsp; Lorem ipsum dolor sit amet
                    <br /> consectetur adipisicing elit.
                  </td>
                  <td>
                    Hormel black <br />
                    labelmany
                  </td>
                  <td>$60.67/6+1LB</td>
                  <td>2*6LB</td>
                  <td>0</td>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <StatusBox
                      style={{
                        backgroundColor:
                          statuses[index] === "Approvel"
                            ? "green"
                            : statuses[index] === "Missing"
                            ? "red"
                            : "",
                      }}
                    >
                      {statuses[index]}
                    </StatusBox>
                    <ACE_Sec>
                      <Approvel onClick={() => handleApprove(index)}>
                        ✔
                      </Approvel>
                      <Missing onClick={() => handleMissing(index)}>✘</Missing>
                      <Edit>📝</Edit>
                    </ACE_Sec>
                  </td>
                </tr>
              ))}
          </tbody>
        </TableSection>
      </TableDashboard>

      {showConfirmation && (
        <ConfirmationPOPUP>
          <POPUP_Card>
            <POPUP_H1>Missing Product !</POPUP_H1>
            <p>is chicken Brest fillets,...</p>
            <POPBtns>
              <Btn1 onClick={() => confirmMissing(confirmationIndex)}>Yes</Btn1>
              <Btn1 onClick={cancelConfirmation}>No</Btn1>
            </POPBtns>
          </POPUP_Card>
        </ConfirmationPOPUP>
      )}
    </Mainsection>
  );
}

export default Order;
