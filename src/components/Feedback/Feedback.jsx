import s from "./Feedback.module.css";

export const Feedback = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedback,
}) => {
  return (
    <ul className={s.feedbacks}>
      <li className={s.feedback}>Good: {good}</li>
      <li className={s.feedback}>Bad: {bad}</li>
      <li className={s.feedback}>Neutral: {neutral}</li>
      <li className={s.feedback}>TotalFeedback: {totalFeedback}</li>
      <li className={s.feedback}>Positive: {positiveFeedback}%</li>
    </ul>
  );
};
