import { Stack, Button } from "@mui/material";
import { useEffect, useState } from "react";

const RadioButtonGroup = ({
  options,
  defaultValue,
  onChange
}: {
  options: Array<{ label: string; value: string }>;
  onChange: (value: string) => void;
  defaultValue?: string;
}) => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    setSelected(defaultValue ?? "");
  }, [defaultValue, setSelected]);

  useEffect(() => {
    onChange(selected);
  }, [onChange, selected]);

  return (
    <Stack spacing={1}>
      {options.map(({ value, label }) => (
        <Button
          key={value}
          size="large"
          variant="outlined"
          onClick={() => setSelected(value)}
          sx={
            selected === value
              ? {
                  justifyContent: "flex-start",
                  bgcolor: "#E9EEFB",
                  color: "#1F46B1",
                  borderColor: "#A8BBF0",
                  "&:hover": {
                    bgcolor: "#E9EEFB"
                  }
                }
              : {
                  justifyContent: "flex-start",
                  color: "#000",
                  borderColor: "#C7CBD1"
                }
          }
        >
          {label}
        </Button>
      ))}
    </Stack>
  );
};

export default RadioButtonGroup;
