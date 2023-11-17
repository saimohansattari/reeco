import React from "react";
import { Logo } from "../asserts/index";
import {
  NavBtns,
  NavText,
  NavText2,
  NavbarSection,
  Navlogo,
} from "../Components/StyledComponents";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <NavbarSection>
        <NavText>
          <Navlogo
            onClick={() => {
              navigate("/");
            }}
            src={Logo}
            alt="Reeco Logo"
          />
          <NavBtns
            onClick={() => {
              navigate("./Store");
            }}
          >
            Store
          </NavBtns>
          <NavBtns
            onClick={() => {
              navigate("./Order");
            }}
          >
            orders
          </NavBtns>
          <NavBtns
            onClick={() => {
              navigate("./Analytics");
            }}
          >
            Analytics
          </NavBtns>
        </NavText>

        <NavText2>
          <NavBtns
            onClick={() => {
              navigate("./Cart");
            }}
          >
            🛒
          </NavBtns>
          <NavBtns>
            Hello, James ﹀{" "}
            {/*this is just dummy,  actual function is user name comes from google auth or API */}
          </NavBtns>
        </NavText2>
      </NavbarSection>
    </div>
  );
}

export default Navbar;
