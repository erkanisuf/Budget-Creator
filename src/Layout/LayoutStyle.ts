import styled from "styled-components";

interface INavContainer {
  toggle: boolean;
}
export const NavContainer = styled.div<INavContainer>`
  border-right: 1px solid #474b4f;
  padding-top: 50px;
  opacity: ${(props) => (props.toggle ? "1" : "0")};
  visibility: ${(props) => (props.toggle ? "visible" : "hidden")};
  width: ${(props) => (props.toggle ? 100 : 0)}%;
  height: 100%;

  transition: 1s;
`;
