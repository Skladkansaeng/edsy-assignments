import { Stack, Typography } from "@mui/material";

const InfoCard = ({
  text,
  helperText
}: {
  text: string;
  helperText: string;
}) => {
  return (
    <Stack bgcolor={"#E9EEFB"} borderRadius={2} p="12px 30px">
      <Typography variant="subtitle2" color={"#5B6471"}>
        {helperText}
      </Typography>
      <Typography fontWeight={"bold"} variant="subtitle1">
        {text}
      </Typography>
    </Stack>
  );
};

export default InfoCard;
