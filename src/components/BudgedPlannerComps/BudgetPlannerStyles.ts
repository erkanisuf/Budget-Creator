import styled from "styled-components";

const background = "red";
const divbackground = "#474B4F";

const violetColor = "#8860D0";
const violetColorHover = "#A64AC9";
interface DivAddExpense {
  width: number;
  direction?: Direction;
  inputwidth?: number;
}
type Direction = "column" | "row";
//For the Add Expense Input Wrapper
export const DivAddExpense = styled.div<DivAddExpense>`
  background-color: ${divbackground};
  width: ${(props) => props.width}%;
  display: flex;
  flex-direction: ${(props) => props.direction};
  padding: 25px;
  margin: 15px auto;
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
      width: ${(props) => props.inputwidth}%;
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

// Budget,Expenses,Remaining Wrapper
export interface IBudgetResultWrapper extends DivAddExpense {
  background: string;
}
export const BudgetResultWrapper = styled.div<IBudgetResultWrapper>`
  background-color: ${(props) => props.background};
  width: ${(props) => props.width}%;
  display: flex;
  flex-direction: ${(props) => props.direction};
  padding: 25px;
  margin: 0 15px;
  border-radius: 20px;
  align-items: center;
  transition: 1s;
  animation-name: example;
  animation-duration: 1s;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  input {
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    width: 100%;
    padding: 12px 5px;
    border: none;
    outline: none;
    border-radius: 10px;
    background-color: #222629;
    color: white;
    width: ${(props) => props.inputwidth}%;
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
  span {
    font-size: 30px;
    margin: 10px auto;
    font-style: bold;
  }
  @keyframes example {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

//Flex Div
export interface IFlexDiv {
  direction: Direction;
  width?: number;
  background?: string;
  padding?: number;
  margin?: string;
}
export const FlexDiv = styled.div<IFlexDiv>`
  background-color: ${(props) => props.background};
  width: ${(props) => props.width}%;
  justify-content: space-between;
  display: flex;
  flex-direction: ${(props) => props.direction};
  padding: ${(props) => props.padding}px;
  margin: ${(props) => props.margin};
  border-radius: 20px;
`;
