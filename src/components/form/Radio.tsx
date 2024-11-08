import {
  DetailedHTMLProps,
  HTMLAttributes,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
} from "react";

export interface IHTMLInputRadioAttr
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}

export default function Radio({ label, ...props }: IHTMLInputRadioAttr) {
  return (
    <>
      <input type="radio" {...props} />
      <label htmlFor={props.id}>{label}</label>
    </>
  );
}
