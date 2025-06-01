import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Input } from "../components/Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "danger"],
    },
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

const ControlledTemplate = (args: any) => {
  const [value, setValue] = useState(args.value || "");
  return (
    <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />
  );
};

export const Default: Story = {
  render: ControlledTemplate,
  args: {
    placeholder: "Type something...",
    variant: "default",
  },
};

export const Danger: Story = {
  render: ControlledTemplate,
  args: {
    placeholder: "Invalid input",
    variant: "danger",
  },
};

export const Disabled: Story = {
  render: ControlledTemplate,
  args: {
    placeholder: "Can't type here",
    disabled: true,
  },
};
