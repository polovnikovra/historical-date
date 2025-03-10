import { TCard } from "./type";
import classes from "./styles.module.scss";

export const Card = ({ title, content }: TCard) => {
  return (
    <div className={classes.card}>
      <span className={classes.date}>{title}</span>
      <span className={classes.title}>{content}</span>
    </div>
  );
};
