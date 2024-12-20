import { render } from "@testing-library/react";
import { MessageTypes } from "../../core";
import { FileInput } from "../FileInput";

describe("<FileInput>", () => {
  it("renders FileInput correctly", () => {
    const { asFragment } = render(
      <FileInput
        label="File *"
        id="id"
        name="file"
        onChange={() => {}}
        accept="image/jpeg, image/png, application/*"
        messageType={MessageTypes.error}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
