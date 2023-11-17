import styled from "styled-components";

export const NavbarSection = styled.div`
  padding: 10px 60px 10px 60px;
  width: 100vw;
  /* height: 80px; */
  background-color: #044f04;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Navlogo = styled.img`
  background-color: transparent;
  width: 70px;
  height: 35px;
`;

export const NavText = styled.div`
  width: 390px;
  background-color: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const NavText2 = styled.div`
  width: 180px;
  background-color: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const NavBtns = styled.a`
  cursor: pointer;
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
`;

export const Mainsection = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 25px 0px;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
`;

export const CardShowcase = styled.div`
  display: flex;
  justify-content: space-between;
  width: 88vw;
  border: 1px solid #8080803f;
  border-radius: 4px;
  padding: 5px 0px;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0px 0px 8px #8080808c;
`;

export const CardBox = styled.div`
  width: 180px;
  height: 80px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 8px 30px;
  flex-wrap: wrap;
  border-right: 1px solid #8080803f;
`;

export const GrayText13 = styled.p`
  margin: 5px 0px;
  font-size: 13px;
  color: gray;
  font-weight: bold;
`;

export const Text13 = styled.p`
  font-family: sans-serif;
  font-weight: bold;
  font-size: 13px;
  color: #121212;
  display: flex;
  flex-wrap: wrap;
`;

export const TableDashboard = styled.div`
  /* display: flex;
  justify-content: space-between; */
  width: 88vw;
  border: 1px solid #8080803f;
  border-radius: 4px;
  padding: 20px 10px;
  background-color: white;
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;
  box-shadow: 0px 0px 8px #8080808c;
`;

export const SearchContainer = styled.div`
  padding: 10px 60px 10px 60px;
  width: 100vw;
  background-color: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 30vw;
  padding: 8px;
  border: 1px solid gray;
  border-radius: 25px;
`;

export const Btn1 = styled.button`
  padding: 8px 15px;
  font-weight: bold;
  border-radius: 25px;
  background-color: white;
  border: 1px solid green;
  color: green;
`;

export const PrintIcon = styled.p`
  margin-bottom: 2px;
  font-size: 29px;
`;

export const TableSection = styled.table`
  background-color: violet;
  width: 100vw;
  height: auto;

  thead {
    height: 40px;
    background-color: red;
    /* padding: 30px 0px; */
    text-align: left;
  }
`;

export const ProductImg = styled.img``;
