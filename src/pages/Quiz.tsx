import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { loadQuiz } from "@utils/helper";
import { useNavigate } from "react-router-dom";
import { EXPIRE_TIMER_SECONDS } from "@utils/constant";
import { QuizHeader, QuizBody, QuizFooter } from "@sections/quiz";

export type QuizInfo = {
  uuid: string;
  question: string;
  answers: string[];
  correctAnswer: string;
};

const Quiz = () => {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quiz, setQuiz] = useState<QuizInfo[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string[]>([]);
  const [targetCountDown, setTargetCountDown] = useState<Date | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuiz = () => {
      const _quiz = loadQuiz();
      setQuiz(_quiz);
      setSelectedAnswer(Array(_quiz.length));

      const targetTime = window.sessionStorage.getItem("targetTime");
      if (targetTime) setTargetCountDown(new Date(targetTime));
      else {
        const time = new Date();
        time.setSeconds(time.getSeconds() + EXPIRE_TIMER_SECONDS);
        setTargetCountDown(time);
        window.sessionStorage.setItem("targetTime", time.toISOString());
      }

      const storeSelectedAnswer =
        window.sessionStorage.getItem("selectedAnswer");

      if (storeSelectedAnswer)
        setSelectedAnswer(JSON.parse(storeSelectedAnswer));
    };

    fetchQuiz();
  }, []);

  const onSubmit = () => {
    window.sessionStorage.removeItem("selectedAnswer");
    console.log(
      "🚀 ~ body to Backend:",
      selectedAnswer
        .map((value, idx) => {
          if (value) {
            const answerIndex = parseInt(value.split("_")[1]);
            return {
              questionId: quiz[idx]?.uuid,
              answer: quiz[idx]?.answers[answerIndex],
              answerIndex
            };
          }
        })
        ?.filter((value) => value)
    );
    navigate("/completed", { replace: false });
  };
  return quiz.length === 0 ? (
    <></>
  ) : (
    <Stack width={"100%"} py={8}>
      <Stack px={4} spacing={2}>
        <QuizHeader
          currentIndex={currentQuizIndex}
          totalQuiz={quiz.length}
          targetCountDown={targetCountDown}
          onSubmit={onSubmit}
        />
        <QuizBody
          quiz={quiz[currentQuizIndex]}
          currentIndex={currentQuizIndex}
          totalQuiz={quiz.length}
          setSelectedAnswer={setSelectedAnswer}
          selectedAnswer={selectedAnswer}
        />
        <QuizFooter
          setCurrentQuizIndex={setCurrentQuizIndex}
          currentIndex={currentQuizIndex}
          totalQuiz={quiz.length}
          onSubmit={onSubmit}
        />
      </Stack>
    </Stack>
  );
};

export default Quiz;
