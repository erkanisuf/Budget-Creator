import React, { FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { deleteItem, editExpense } from "../../Redux/valuesSlice";
import { BudgetItem } from "../../types";
// import { v4 as uuidv4 } from "uuid";

const ShowItems = () => {
  const items = useAppSelector((state) => state.values.items); // Redux Selector (items )
  const disptach = useAppDispatch();
  const [editOpen, setEditOpen] = useState<number | null>(null);
  const [editItem, setEditItem] = useState<BudgetItem>({
    name: "",
    value: 0,
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
  //changes name
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
    <div>
      {items.map((el, index) => {
        return (
          <div key={index}>
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

                <span>
                  <button onClick={CancelEdit}>Cancel</button>
                </span>
                <span>
                  <input type="submit" value="Save" />
                </span>
              </form>
            ) : (
              <div>
                <span>
                  {el.name} - {el.value}
                </span>
                <span>
                  <button onClick={() => deleteExpense(index)}>X</button>
                </span>
                <span>
                  <button onClick={() => StartEdit(index, el)}>Edit</button>
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ShowItems;
