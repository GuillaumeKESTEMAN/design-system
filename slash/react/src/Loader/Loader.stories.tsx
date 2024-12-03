import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button/Button";
import { TextInput } from "../Form/Text";
import { MessageTypes } from "../Form/core";
import { Title } from "../Title/Title";
import { Loader } from "./Loader";

const meta: Meta<typeof Loader> = {
  component: Loader,
  title: "Components/Loader",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type StoryProps = React.ComponentProps<typeof Loader>;
type Story = StoryObj<StoryProps>;

export const Default: Story = {
  name: "Loader",
  render: ({ children: text, ...args }) => <Loader {...args}>{text}</Loader>,
  args: {
    mode: "get",
    text: "",
    children: (
      <form style={{ height: "100vh", padding: "3rem" }}>
        <Title>A form asking for your name</Title>
        <TextInput
          label="name"
          message="error"
          messageType={MessageTypes.error}
        />
        <Button>Send</Button>
      </form>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};