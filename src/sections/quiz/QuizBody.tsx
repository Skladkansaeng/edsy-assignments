import { Stack, Typography } from "@mui/material";
import RadioButtonGroup from "../../components/RadioButtonGroup";
import { QuizInfo } from "../../pages/Quiz";

const QuizBody = ({
  quiz,
  currentIndex,
  totalQuiz,
  setSelectedAnswer,
  selectedAnswer
}: {
  quiz: QuizInfo;
  currentIndex: number;
  totalQuiz: number;
  setSelectedAnswer: React.Dispatch<React.SetStateAction<string[]>>;
  selectedAnswer: string[];
}) => {
  return (
    <Stack spacing={2}>
      <Stack spacing={1}>
        <Typography fontWeight={"bold"} variant="subtitle1">
          Question {currentIndex + 1}/{totalQuiz}
        </Typography>
        <Typography variant="subtitle2">{quiz.question}</Typography>
      </Stack>
      <RadioButtonGroup
        options={quiz.answers.map((answer, idx) => ({
          value: `${currentIndex}_${idx}`,
          label: answer
        }))}
        defaultValue={selectedAnswer[currentIndex]}
        onChange={(value) => {
          selectedAnswer[currentIndex] = value;
          window.sessionStorage.setItem(
            "selectedAnswer",
            JSON.stringify(selectedAnswer)
          );
          setSelectedAnswer(selectedAnswer);
        }}
      />
    </Stack>
  );
};

export default QuizBody;
