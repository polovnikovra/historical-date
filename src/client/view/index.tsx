import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import cn from "classnames";
import {
  statusesEllipseMap,
  sectionEllipseMap,
  MAIN_ITEMS,
  HISTORICAL_DATE,
  statusesEllipseArray,
} from "./constants";
import { BottomSection } from "./components/bottom-section";
import { HTMLContent } from "../components/animatedNumbers";
import { MainCircle } from "./components/main-circle";
import classes from "./styles.module.scss";

export const HistoricalDates = () => {
  const [rotateRightCircle, setRotateRightCircle] = useState(1);
  const [delayedValue, setDelayedValue] = useState("");
  const [currentStartDate, setCurrentStartDate] = useState(0);
  const [currentTargetDate, setCurrentTargetDate] = useState(0);

  const width = useMediaQuery({ maxWidth: 500 });

  const main_item = MAIN_ITEMS.filter(
    (item) => item.id === rotateRightCircle
  )[0];

  const handleIncrement = () => {
    if (rotateRightCircle === 6) {
      setRotateRightCircle(0);
    }
    setDelayedValue("");
    setRotateRightCircle((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (rotateRightCircle === 1) {
      setRotateRightCircle(7);
    }
    setDelayedValue("");
    setRotateRightCircle((prev) => prev - 1);
  };

  const handleChangeSection = (id: number) => {
    setRotateRightCircle(id);
    setDelayedValue("");
    setCurrentStartDate(main_item.firstDate);
    setCurrentTargetDate(main_item.secondDate);
  };

  const visibleDivider = width ? (
    delayedValue && <div className={classes["horizontal-divider"]} />
  ) : (
    <div className={classes["horizontal-divider"]} />
  );

  useEffect(() => {
    const value =
      sectionEllipseMap[rotateRightCircle as keyof typeof sectionEllipseMap];
    const timeoutId = setTimeout(() => {
      setDelayedValue(value);
    }, 800);

    return () => clearTimeout(timeoutId);
  }, [rotateRightCircle]);

  return (
    <div className={classes["main-block"]}>
      {visibleDivider}
      <div className={classes["vertical-divider"]} />
      <div className={classes["side-title"]}>
        <div className={classes["side-divider"]} />
        <span className={classes["side-text"]}>{HISTORICAL_DATE}</span>
      </div>
      <h1 className={classes["main-numbers"]}>
        <HTMLContent
          targetNumber={main_item.firstDate}
          startNumber={currentStartDate}
          stylesDate={"first-date"}
        />
        <HTMLContent
          targetNumber={main_item.secondDate}
          startNumber={currentTargetDate}
          stylesDate={"second-date"}
        />
      </h1>
      <span className={classes["section-mobile-width"]}>
        {delayedValue &&
          width &&
          sectionEllipseMap[
            rotateRightCircle as keyof typeof sectionEllipseMap
          ]}
      </span>
      <div
        className={cn(
          classes["main-circle"],
          classes[
            statusesEllipseMap[
              rotateRightCircle as keyof typeof statusesEllipseMap
            ]
          ]
        )}
      >
        {statusesEllipseArray.map((item, idx) => (
          <MainCircle
            key={idx}
            item={item}
            width={width}
            delayedValue={delayedValue}
            rotateRightCircle={rotateRightCircle}
            handleChangeSection={handleChangeSection}
          />
        ))}
      </div>
      <BottomSection
        main_item={main_item}
        width={width}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        rotateRightCircle={rotateRightCircle}
        delayedValue={delayedValue}
      />
    </div>
  );
};
