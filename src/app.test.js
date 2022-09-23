import App from "./App";
import { screen, render } from "@testing-library/react";
it("renders welcome message", () => {
  render(<App />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
});
