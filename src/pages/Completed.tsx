import { Stack, Typography } from "@mui/material";
import CompletedImg from "@assets/Finished/completedImg.svg?react";
import { useEffect } from "react";

const Completed = () => {
  useEffect(() => {
    window.sessionStorage.removeItem("targetTime");
  }, []);

  return (
    <Stack justifyContent={"center"} alignItems={"center"} spacing={5} py={8}>
      <Typography variant="h5" fontWeight={"bold"}>
        Great Job!
      </Typography>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Typography variant="h6" fontWeight={"bold"}>
          You have completed the test.
        </Typography>
        <Typography variant="h6" fontWeight={"bold"}>
          Your test result will be sent to your registered email.
        </Typography>
      </Stack>
      <CompletedImg />
    </Stack>
  );
};

export default Completed;
