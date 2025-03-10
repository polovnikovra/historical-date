import chevron_left from "../../../assets/images/chevron_left.png";
import chevron_right from "../../../assets/images/chevron_right.png";
import { useDelayedValue } from "../../../utils/delayData";
import { BottomSheet } from "../bottom-sheet";
import { TBottomSection } from "./types";
import classes from "./styles.module.scss";

export const BottomSection = ({
  main_item,
  width,
  handleIncrement,
  handleDecrement,
  rotateRightCircle,
  delayedValue,
}: TBottomSection) => {
  return (
    <div className={classes["bottom-section"]}>
      <div className={classes["counter-buttons"]}>
        <span className={classes["number-section"]}>
          0{rotateRightCircle}/06
        </span>
        <div className={classes["counter-buttons__block"]}>
          <button
            className={classes["counter-buttons__button"]}
            onClick={handleDecrement}
          >
            <img src={chevron_left} alt="chevron_left" />
          </button>
          <button
            className={classes["counter-buttons__button"]}
            onClick={handleIncrement}
          >
            <img src={chevron_right} alt="chevron_right" />
          </button>
        </div>
      </div>
      {!delayedValue && <div className={classes["empty-div"]} />}
      <div className={classes["item-data"]}>
        <BottomSheet
          data={useDelayedValue(main_item.data)}
          delayedValue={delayedValue}
          width={width}
        />
      </div>
    </div>
  );
};
