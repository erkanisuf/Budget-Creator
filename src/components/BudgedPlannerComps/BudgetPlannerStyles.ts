import styled from "styled-components";
//Colors
const divbackground = "#474B4F";
const violetColor = "#8860D0";
const violetColorHover = "#A64AC9";
const redcolor = "#BA324F";
const redColorHover = "#E73E4F";
interface IDivAddExpense {
  width: number;
  direction?: Direction;
  inputwidth?: number;
}
type Direction = "column" | "row";
//For the Add Expense Input Wrapper
export const DivAddExpense = styled.div<IDivAddExpense>`
  background-color: ${divbackground};
  width: ${(props) => props.width}%;
  display: flex;
  flex-direction: ${(props) => props.direction};
  padding: 25px;
  margin: 15px auto;
  border-radius: 20px;
  div {
    flex: 1;
  }
  span {
    align-self: center;
  }
  form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input[type="submit"] {
      justify-self: center;
      align-self: center;
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
    width: 80%;
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
export interface IBudgetResultWrapper extends IDivAddExpense {
  background: string;
}
export const BudgetResultWrapper = styled.div<IBudgetResultWrapper>`
  background-color: ${(props) => props.background};
  width: ${(props) => props.width}%;
  display: flex;
  flex-direction: ${(props) => props.direction};
  padding: 25px;
  margin: 0 15px;
  overflow: hidden;

  border-radius: 20px;
  align-items: center;
  transition: 1s;
  animation-name: example;
  animation-duration: 1s;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  form {
    display: flex;
    width: ${(props) => props.width}%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  input {
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    width: 100%;
    padding: 8px 5px;
    border: none;
    outline: none;
    margin-top: 10px;
    border-radius: 10px;
    background-color: #222629;
    color: white;
    width: ${(props) => props.inputwidth}%;
  }
  input[type="submit"] {
    width: 100px;
    padding: 15px;
    align-self: flex-end;
    cursor: pointer;
    background-color: ${violetColor};
    font-weight: 900;
    &:hover {
      background-color: ${violetColorHover};
    }
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
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
  justify?: string;
}
export const FlexDiv = styled.div<IFlexDiv>`
  background-color: ${(props) => props.background};
  width: ${(props) => props.width}%;

  justify-content: ${(props) =>
    props.justify ? props.justify : "space-between"};
  display: flex;
  flex-direction: ${(props) => props.direction};
  padding: ${(props) => props.padding}px;
  margin: ${(props) => props.margin};
  border-radius: 20px;
`;

// Plus Button Add Budget
export interface IPlusButton {
  borderRadius: boolean;
  padding?: number;
}
export const PlusButton = styled.button<IPlusButton>`
  width: 55px;
  align-self: flex-end;
  outline: none;
  color: white;
  font-size: 23.5px;
  border: none;
  padding: ${(props) => props.padding}px;
  border-top-right-radius: ${(props) => (props.borderRadius ? "10px" : "")};
  border-bottom-right-radius: ${(props) => (props.borderRadius ? "10px" : "")};
  cursor: pointer;
  background-color: ${violetColor};

  &:hover {
    background-color: ${violetColorHover};
  }
`;

// Item of expense
interface IItem {
  width: number;
  background?: boolean;
  borderBottom?: boolean;
}
export const Item = styled.div<IItem>`
  width: ${(props) => props.width}%;
  background-color: ${(props) => (props.background ? divbackground : "")};
  padding: 15px 5px;
  margin: 2px auto;
  border-radius: 2px;

  div,
  form {
    padding: 0px 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex: 1;
    input {
      flex: 1;
      box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
      width: 50%;
      padding: 8px;
      border: none;
      margin: 5px;
      outline: none;
      border-radius: 10px;
      background-color: #222629;
      color: white;
    }
  }

  border-bottom: ${(props) => (props.borderBottom ? "1px solid #464646 " : "")};

  &:hover {
    background-color: ${divbackground};
  }
`;

// X Button
export const XButton = styled.button`
  width: 55px;
  align-self: flex-end;
  outline: none;
  color: white;
  font-size: 18px;
  border: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  cursor: pointer;
  background-color: ${redcolor};

  &:hover {
    background-color: ${redColorHover};
  }
`;
export const EditButton = styled.button`
  width: 55px;
  align-self: flex-end;
  outline: none;
  color: white;
  font-size: 18px;
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;
  background-color: ${violetColor};

  &:hover {
    background-color: ${violetColorHover};
  }
`;
