import React, { FormEvent, useState } from "react";
import { BudgetItem, BudgetItemArray } from "../../types";
// import { v4 as uuidv4 } from "uuid";

const ShowItems: React.FC<BudgetItemArray> = ({
  items,
  RemoveItem,
  EditItem,
}) => {
  const [editOpen, setEditOpen] = useState<number | null>(null);
  const [editItem, setEditItem] = useState<BudgetItem>({
    name: "",
    value: null,
  });
  // Changes the selected list item to editable mode with inputs
  const StartEdit = (index: number, el: BudgetItem) => {
    setEditItem(el);
    setEditOpen(index);
  };
  // change values
  const OnChangeNumber = (e: React.FormEvent<HTMLInputElement>) => {
    setEditItem({
      ...editItem,
      [e.currentTarget.name]: Number(e.currentTarget.value),
    });
  };
  //change name
  const OnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setEditItem({
      ...editItem,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  //Save Edited Changes
  const SaveEditedChanges = (e: FormEvent, index: number, el: BudgetItem) => {
    e.preventDefault();
    EditItem(index, el);
    setEditOpen(null);
  };
  //Cancel Editing
  const CancelEdit = () => {
    setEditOpen(null);
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
                  <button onClick={() => RemoveItem(index)}>X</button>
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
