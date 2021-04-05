import React, { FormEvent, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { ImCheckmark } from "react-icons/im";
import { TiCancel } from "react-icons/ti";

import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { deleteItem, editExpense } from "../../Redux/valuesSlice";
import { BudgetItem } from "../../types";
import { EditButton, FlexDiv, Item, XButton } from "./BudgetPlannerStyles";
// import { v4 as uuidv4 } from "uuid";

const ShowItems = () => {
  const items = useAppSelector((state) => state.values.items); // Redux Selector (items )

  const disptach = useAppDispatch();
  const [editOpen, setEditOpen] = useState<number | null>(null);
  const [editItem, setEditItem] = useState<BudgetItem>({
    name: "",
    value: 0,
    category: "",
    itemId: "",
  });
  // Changes the selected list item to editable mode with inputs
  const StartEdit = (index: number, el: BudgetItem) => {
    setEditItem(el);
    setEditOpen(index);
  };
  // changes values expenses number
  const OnChangeNumber = (e: React.FormEvent<HTMLInputElement>) => {
    setEditItem({
      ...editItem,
      [e.currentTarget.name]: Number(e.currentTarget.value),
    });
  };
  //changes name and Category
  const OnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setEditItem({
      ...editItem,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  //Save Edited Changes to Redux state
  const SaveEditedChanges = (e: FormEvent, index: number, el: BudgetItem) => {
    e.preventDefault();
    const item = { index: index, editeitemValues: el }; // Creates object for the Redux (takes index and the new edited item)
    disptach(editExpense(item));
    setEditOpen(null);
  };
  //Cancel Editing
  const CancelEdit = () => {
    setEditOpen(null);
  };
  //Remove item from Redux State
  const deleteExpense = (index: number) => {
    disptach(deleteItem(index));
  };
  return (
    <FlexDiv direction="column" width={80} style={{ margin: "0 auto" }}>
      <Item width={100} style={{ borderRadius: "15px" }} background>
        <div style={{ fontSize: "13px", fontWeight: 500 }}>
          <div>Expense name</div>
          <div style={{ marginLeft: "0px" }}>Value</div>
          <div>Category </div>
          <div>
            <span> </span>
            <span> </span>
          </div>
        </div>
      </Item>
      {!items.length && (
        <p
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: "25px",
          }}
        >
          No expenses added
        </p>
      )}
      {items.map((el, index) => {
        return (
          <Item key={index} width={100} borderBottom>
            {editOpen === index ? (
              <form onSubmit={(e) => SaveEditedChanges(e, index, editItem)}>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  value={editItem.name}
                  onChange={OnChange}
                />
                <input
                  type="number"
                  placeholder="name"
                  name="value"
                  value={editItem.value?.toString()}
                  onChange={OnChangeNumber}
                />
                <input
                  type="text"
                  placeholder="category"
                  name="category"
                  value={editItem.category}
                  onChange={OnChange}
                />

                <div style={{ justifyContent: "center" }}>
                  <XButton onClick={CancelEdit}>
                    <TiCancel />
                  </XButton>
                  <EditButton type="submit">
                    <ImCheckmark />
                  </EditButton>
                </div>
              </form>
            ) : (
              <div>
                <div>{el.name}</div>
                <div>{el.value} €</div>
                <div>{el.category} </div>
                <div style={{ justifyContent: "center" }}>
                  <XButton onClick={() => deleteExpense(index)}>
                    <AiFillDelete />
                  </XButton>
                  <EditButton onClick={() => StartEdit(index, el)}>
                    <FaRegEdit />
                  </EditButton>
                </div>
              </div>
            )}
          </Item>
        );
      })}
    </FlexDiv>
  );
};

export default ShowItems;
