// import { useState } from "react";
import "./App.css";
import { Description, Feedback, Options, Notification } from "./components";
import { useLocalStorage } from "./hooks/useLocalStorage";

const initialState = { good: 0, neutral: 0, bad: 0 };

function App() {
  const [ratings, setRatings] = useLocalStorage("ratings", initialState);

  const updateFeedback = (feedbackType) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [feedbackType]: prevRatings[feedbackType] + 1,
    }));
  };

  const totalFeedback = ratings.good + ratings.neutral + ratings.bad;
  const resetFeedback = () => {
    setRatings({ good: 0, neutral: 0, bad: 0 });
  };
  const positiveFeedback = Math.round(
    ((ratings.good + ratings.neutral) * 100) / totalFeedback
  );

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={ratings.good}
          neutral={ratings.neutral}
          bad={ratings.bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </>
  );
}

export default App;
