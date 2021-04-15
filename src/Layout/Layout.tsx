import React from "react";

import { FlexDiv } from "../components/BudgedPlannerComps/BudgetPlannerStyles";
import { NavContainer } from "./LayoutStyle";

interface Props {
  children: JSX.Element[] | JSX.Element;
}
export const width = window.innerWidth;
const Layout: React.FC<Props> = (props) => {
  return (
    <FlexDiv direction="row" justify="flex-start" width={100}>
      {/* In case need to use navigation for future features */}
      {/* <div style={{ height: "100vh", width: "5%" }}>
        <NavContainer
          style={{ height: "100%", paddingBottom: "100px" }}
          toggle={true}
        >
          xD
        </NavContainer>
      </div> */}

      <div
        style={{
          width: "90%",
          margin: "0 auto",
          display: "flex",
          flexDirection: width > 1024 ? "row" : "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.children}
      </div>
    </FlexDiv>
  );
};

export default Layout;
