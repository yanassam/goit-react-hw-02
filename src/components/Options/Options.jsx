import s from "./Options.module.css";

export const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className={s.buttons}>
      <button
        className={s.button}
        onClick={() => {
          updateFeedback("good");
        }}
      >
        Good
      </button>
      <button
        className={s.button}
        onClick={() => {
          updateFeedback("neutral");
        }}
      >
        Neutral
      </button>
      <button
        className={s.button}
        onClick={() => {
          updateFeedback("bad");
        }}
      >
        Bad
      </button>

      {totalFeedback > 0 && (
        <button
          className={s.buttonR}
          onClick={() => {
            resetFeedback();
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
};
