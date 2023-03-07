import React from "react";
import Checkbox from "@mui/material/Checkbox";

function ControlledCheckbox({ setArrEffect, idx }) {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (event.target.checked) {
      setArrEffect((prev) => [...prev, idx]);
    } else {
      setArrEffect((prev) => prev.filter((item) => item !== idx));
    }
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}

const CheckboxEffect = ({ charArr = ["lo", "he", "sd"] }) => {
  const [arrEffect, setArrEffect] = React.useState([]);
  return (
    <>
      {charArr.map((item, idx) => {
        return (
          <ControlledCheckbox key={idx} setArrEffect={setArrEffect} idx={idx} />
        );
      })}
    </>
  );
};

const RenderRowCheckBox = ({ amount }) => {
  return (
    <>
      {new Array(amount).fill(null).map((item, idx) => {
        return <CheckboxEffect key={idx} />;
      })}
    </>
  );
};
export default CheckboxEffect;
