import { render, screen } from "@testing-library/react";
import Button from "../../components/Button";

test("Button renders correctly", () => {
  render(<Button label="Click Me" />);
  expect(screen.getByText("Click Me")).toBeInTheDocument();
});
