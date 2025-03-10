import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";
import classes from "./styles.module.scss";
import { TAnimatedNumbers } from "./type";

export const HTMLContent = ({
  targetNumber,
  startNumber,
  stylesDate,
}: TAnimatedNumbers) => {
  const count = useMotionValue(startNumber);
  const rounded = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    const controls = animate(count, targetNumber, { duration: 0.5 });
    return () => controls.stop();
  }, [count, targetNumber]);

  return <motion.pre className={classes[stylesDate]}>{rounded}</motion.pre>;
};
