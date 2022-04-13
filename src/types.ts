import {
  CheckboxProps,
  PasswordInputProps,
  RadioGroupProps,
  SelectProps,
  TextareaProps,
  TextInputProps,
  GroupProps,
  SelectItem,
} from "@mantine/core";
import { DatePickerProps } from "@mantine/dates";

export type OptionType = {
  label: string;
  value: any;
};

export type ControlledProps = { label: string; name: string; __hide?: boolean };

export type ControllerProps = ControlledProps &
  (
    | ({ control: "text-input" } & TextInputProps)
    | ({ control: "password-input" } & PasswordInputProps)
    | ({ control: "select"; options: SelectItem[] } & Omit<SelectProps, "data">)
    | ({ control: "checkbox"; options: OptionType[] } & CheckboxProps &
        GroupProps)
    | ({ control: "radio-group"; options: OptionType[] } & Omit<
        RadioGroupProps,
        "children"
      >)
    | ({ control: "text-area" } & TextareaProps)
    | ({ control: "date-picker" } & DatePickerProps)
  );

export interface OptionsProps {
  options: OptionType[];
}
