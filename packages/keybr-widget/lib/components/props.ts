import {
  type FocusEventHandler,
  type KeyboardEventHandler,
  type MouseEventHandler,
  type WheelEventHandler,
} from "react";

export type FocusProps = {
  readonly tabIndex?: number;
  readonly disabled?: boolean;
  readonly onFocus?: FocusEventHandler;
  readonly onBlur?: FocusEventHandler;
};

export type MouseProps = {
  readonly onClick?: MouseEventHandler;
  readonly onMouseDown?: MouseEventHandler;
  readonly onMouseUp?: MouseEventHandler;
  readonly onMouseOver?: MouseEventHandler;
  readonly onMouseOut?: MouseEventHandler;
  readonly onMouseEnter?: MouseEventHandler;
  readonly onMouseLeave?: MouseEventHandler;
};

export type WheelProps = {
  readonly onWheel?: WheelEventHandler;
};

export type KeyboardProps = {
  readonly onKeyDown?: KeyboardEventHandler;
  readonly onKeyUp?: KeyboardEventHandler;
};
