import { Stack, Divider, Button } from "@mui/material";

const QuizFooter = ({
  setCurrentQuizIndex,
  currentIndex,
  totalQuiz,
  onSubmit
}: {
  setCurrentQuizIndex: React.Dispatch<React.SetStateAction<number>>;
  currentIndex: number;
  totalQuiz: number;
  onSubmit: () => void;
}) => {
  return (
    <Stack spacing={2}>
      <Divider variant="fullWidth" />
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Button
          variant="outlined"
          sx={{ visibility: currentIndex === 0 ? "hidden" : "none" }}
          onClick={() => setCurrentQuizIndex(currentIndex - 1)}
        >
          Back
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            if (totalQuiz - 1 === currentIndex) {
              onSubmit();
            } else setCurrentQuizIndex(currentIndex + 1);
          }}
        >
          {totalQuiz - 1 === currentIndex ? "Submit" : "Next"}
        </Button>
      </Stack>
    </Stack>
  );
};

export default QuizFooter;
