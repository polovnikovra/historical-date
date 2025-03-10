export type TMainCircle = {
  item: {
    id: number;
    section: string;
  };
  rotateRightCircle: number;
  handleChangeSection: (id: number) => void;
  delayedValue: string;
  width: boolean;
};
