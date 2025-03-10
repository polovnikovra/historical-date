import cn from "classnames";
import { TMainCircle } from "./type";
import ellipseDark from "../../../assets/images/ellipse-dark.png";
import ellipseLight from "../../../assets/images/ellipse-light.png";
import classes from "./styles.module.scss";

export const MainCircle = ({
  item,
  width,
  rotateRightCircle,
  handleChangeSection,
  delayedValue,
}: TMainCircle) => {
  const { id, section } = item;
  const activeEllipse = id === rotateRightCircle ? ellipseDark : ellipseLight;
  const ellipseWidth = width ? activeEllipse : ellipseDark;

  return (
    <div
      className={cn(
        { [classes["ellipse"]]: !width },
        classes[`${section}-position`],
        {
          [classes[`${section}-active`]]: rotateRightCircle === id && !width,
        }
      )}
      onClick={() => handleChangeSection(id)}
    >
      <img src={ellipseWidth} alt="ellipse" />
      <span
        className={cn(classes["section-name-none"], {
          [classes["section-name"]]: rotateRightCircle === id && !width,
        })}
      >
        {delayedValue}
      </span>
    </div>
  );
};
