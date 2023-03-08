import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { useEffect } from "react";
import { Button, Stack, Box } from "@mui/material";
import useSelect from "../../hooks/useSelect";

function ControlledCheckbox({ handleChange, checked, idx }) {
  return (
    <Checkbox
      checked={checked}
      onChange={(e) => handleChange(e, idx)}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}

const CheckboxEffect = ({
  charArr,
  arrEffectData,
  setDadEffectArr,
  idxOfLine,
  trigger1,
}) => {
  const { handleChange, setArrEffect, arrEffect } = useSelect(
    arrEffectData,
    trigger1,
    setDadEffectArr,
    idxOfLine
  );

  return (
    <Stack direction={"row"} gap={2} my={3} sx={{ overflowX: "auto" }}>
      {charArr?.map((item, idx) => {
        return (
          <Stack key={idx}>
            <Box sx={{ minWidth: "80px", textAlign: "center" }}>
              index : {idx}
            </Box>
            <ControlledCheckbox
              key={idx}
              setArrEffect={setArrEffect}
              idx={idx}
              checked={arrEffect.includes(idx)}
              handleChange={handleChange}
            />
          </Stack>
        );
      })}
    </Stack>
  );
};

export default CheckboxEffect;
