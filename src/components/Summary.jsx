import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

export default function Summary({ userAnswers }) {
  return (
    <div id="summary">
      <img src={quizCompleteImg} />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">10%</span>
          <span className="text">skipped</span>
        </p>

        <p>
          <span className="number">10%</span>
          <span className="text">correct</span>
        </p>

        <p>
          <span className="number">10%</span>
          <span className="text">incorrect</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClasses = "user-answered";

          if(answer)

          return (
            <li key={answer}>
              <h3>{index + 1}</h3>
              <p className="question"> {QUESTIONS[index].text}</p>
              <p className="user-answer"> {answer ?? "Skipped"} </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
