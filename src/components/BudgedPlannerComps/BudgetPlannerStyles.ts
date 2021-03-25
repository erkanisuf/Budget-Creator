import styled from "styled-components";

const background = "red";
const divbackground = "#474B4F";

const violetColor = "#8860D0";
const violetColorHover = "#A64AC9";
interface DivAddExpense {
  width: number;
  direction: Direction;
}
type Direction = "column" | "row";
export const DivAddExpense = styled.div<DivAddExpense>`
  background-color: ${divbackground};
  width: ${(props) => props.width}%;
  display: flex;
  flex-direction: ${(props) => props.direction};
  padding: 25px;
  margin: 0 auto;
  border-radius: 20px;
  form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    input[type="text"] {
      width: 100%;
      padding: 10px 50px;
    }
    input[type="number"] {
      width: 100px;
      padding: 10px;
    }
    input[type="submit"] {
      width: 100px;
      align-self: flex-end;
      cursor: pointer;
      background-color: ${violetColor};
      font-weight: 900;
      &:hover {
        background-color: ${violetColorHover};
      }
    }
  }
  input {
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    width: 100%;
    padding: 12px 5px;
    border: none;
    outline: none;
    border-radius: 10px;
    background-color: #222629;
    color: white;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
