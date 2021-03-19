import React from "react";
interface Props {
  label: string;
  toggleImportance?: () => void;
}
const Button: React.FunctionComponent<Props> = ({
  label,
  toggleImportance,
}) => {
  return (
    <div>
      <button onClick={toggleImportance}>{label}</button>
    </div>
  );
};

export default Button;
