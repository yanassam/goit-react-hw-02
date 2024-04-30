import s from "./Description.module.css";

export const Description = () => {
  return (
    <div>
      <h1 className={s.header}>Sip Happens Café</h1>
      <p className={s.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};
