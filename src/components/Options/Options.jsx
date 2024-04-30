import s from "./Options.module.css";

const Options = ({ setGood, setBad, setNeutral, total }) => {
  const handleChange = (type) => () => {
    switch (type) {
      case "good":
        setGood((prevGood) => prevGood + 1);
        break;
      case "neutral":
        setNeutral((prev) => prev + 1);
        break;
      case "bad":
        setBad((prev) => prev + 1);
        break;
      default:
        setGood(0);
        setNeutral(0);
        setBad(0);
    }
  };

  // const handleGood = () => {
  //   setGood((prevGood) => prevGood + 1);
  // };
  // const handleNeutral = () => {
  //   setNeutral((prev) => prev + 1);
  // };
  // const handleBad = () => {
  //   setBad((prev) => prev + 1);
  // };
  // const handleReset = () => {
  //   setGood(0);
  //   setNeutral(0);
  //   setBad(0);
  // };
  return (
    <div className={s.buttons}>
      <button onClick={handleChange("good")}>Good</button>
      <button onClick={handleChange("neutral")}>Neutral</button>
      <button onClick={handleChange("bad")}>Bad</button>
      {Boolean(total) && <button onClick={handleChange()}>Reset</button>}
    </div>
  );
};

export default Options;
