import React from "react";

import { FlexDiv } from "../components/BudgedPlannerComps/BudgetPlannerStyles";
import { NavContainer } from "./LayoutStyle";

interface Props {
  children: JSX.Element[] | JSX.Element;
}
const Layout: React.FC<Props> = (props) => {
  return (
    <FlexDiv direction="row" justify="flex-start" width={100}>
      <div style={{ height: "100vh", width: "5%" }}>
        <NavContainer
          style={{ height: "100%", paddingBottom: "100px" }}
          toggle={true}
        >
          xD
        </NavContainer>
      </div>

      <div
        style={{
          width: "100%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
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
