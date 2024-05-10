import { Stack, Typography, Chip, LinearProgress } from "@mui/material";
import AlarmIcon from "../../assets/Quiz/alarmIcon.svg?react";
import { useCountdown } from "../../hook/useTimer";

const QuizHeader = ({
  currentIndex,
  totalQuiz,
  targetCountDown,
  onSubmit
}: {
  currentIndex: number;
  totalQuiz: number;
  targetCountDown: Date | null;
  onSubmit: () => void;
}) => {
  const [minutes, seconds] = useCountdown(targetCountDown ?? new Date());

  if (minutes <= 0 && seconds <= 0) {
    onSubmit();
  }

  return (
    <Stack spacing={2}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography color="#2A59DA" fontWeight={"bold"}>
          Multiple Choice
        </Typography>
        <Chip
          icon={
            <Stack>
              <AlarmIcon />
            </Stack>
          }
          label={
            <Typography color="#2A59DA" fontWeight={"bold"}>
              Time remaining {String(minutes).padStart(2, "0")}:
              {String(seconds).padStart(2, "0")}
            </Typography>
          }
        />
      </Stack>
      <LinearProgress
        variant="determinate"
        value={(currentIndex / (totalQuiz - 1)) * 100}
        sx={{ borderRadius: 4 }}
      />
    </Stack>
  );
};

export default QuizHeader;
