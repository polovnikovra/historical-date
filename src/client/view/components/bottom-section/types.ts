export type TBottomSection = {
  main_item: TMainItems;
  width: boolean;
  handleIncrement: () => void;
  handleDecrement: () => void;
  rotateRightCircle: number;
  delayedValue: string;
};

export type TMainItems = {
  id: number;
  title: string;
  firstDate: number;
  secondDate: number;
  firstItem?: boolean;
  lastItem?: boolean;
  data: TData;
};

export type TData = Record<string, string[] | undefined>;
