import Badge from "./Badge";
import { render, screen } from "@testing-library/react";

it("Badge Component", () => {
  render(<Badge />);
  const badge = screen.queryByTestId("badges");
  expect(badge).toBeDefined();
});
