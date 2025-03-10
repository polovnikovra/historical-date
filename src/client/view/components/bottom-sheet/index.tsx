import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Card } from "../card";
import { TData } from "./type";

import "swiper/css/navigation";
import "swiper/css";
import classes from "./styles.module.scss";

export const BottomSheet = ({ data, delayedValue, width }: TData) => {
  const countCard = width ? 2 : 3;
  const hasPagination = width ? [] : [Navigation];

  return (
    <div className={classes["bottom-sheet"]}>
      <Swiper
        modules={hasPagination}
        spaceBetween={100}
        slidesPerView={countCard}
        pagination={{ clickable: true }}
        navigation={!width}
        className={classes["swiper-class"]}
      >
        {Object.keys(data).map((key, index) => {
          const content = data[key];

          return (
            <SwiperSlide key={index}>
              {delayedValue && <Card title={key} content={content} />}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
