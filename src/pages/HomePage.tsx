import { Button, Grid, Stack, Typography } from "@mui/material";
import TestImg from "@assets/Homepage/test-image.svg?react";
import InfoCard from "@components/InfoCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadQuiz } from "@utils/helper";
import { QuizInfo } from "./Quiz";
import { EXPIRE_TIMER_SECONDS } from "@utils/constant";

const HomePage = () => {
  useEffect(() => {
    window.sessionStorage.removeItem("selectedAnswer");
  }, []);
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState<QuizInfo[]>([]);

  useEffect(() => {
    const fetchQuiz = () => {
      const _quiz = loadQuiz();
      setQuiz(_quiz);
    };

    fetchQuiz();
  }, []);
  return (
    <Stack justifyContent={"center"} alignItems={"center"} spacing={5} py={8}>
      <Typography variant="h5" fontWeight={"bold"}>
        General English Test
      </Typography>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <InfoCard
            helperText={"Total questions"}
            text={`${quiz.length} questions`}
          />
        </Grid>
        <Grid item xs={6}>
          <InfoCard helperText={"Test duration"} text={"5:00 min"} />
        </Grid>
      </Grid>
      <TestImg />
      <Button
        variant="contained"
        onClick={() => {
          const time = new Date();
          time.setSeconds(time.getSeconds() + EXPIRE_TIMER_SECONDS);

          window.sessionStorage.setItem("targetTime", time.toISOString());
          navigate("/quiz", { replace: true });
        }}
      >
        <Typography>Start The Test</Typography>
      </Button>
    </Stack>
  );
};

export default HomePage;
