import { useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + bad + neutral;
  return (
    <>
      <Description />
      <Options
        setGood={setGood}
        setNeutral={setNeutral}
        setBad={setBad}
        total={total}
      />
      <Feedback good={good} neutral={neutral} bad={bad} total={total} />
    </>
  );
}

export default App;
