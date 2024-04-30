import s from "./Feedback.module.css";

const Feedback = ({ good, bad, neutral, total }) => {
  const positive = Math.round((100 * (good + neutral)) / total);

  const result =
    total > 0
      ? `Good: ${good} 
Bad: ${bad}
Neutral: ${neutral}
Total: ${total}
Positive: ${positive}%`
      : "No feedback yet";
  return <p className={s.feedback}>{result}</p>;
};

export default Feedback;
