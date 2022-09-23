import About from "./About";

import { render, screen } from "@testing-library/react";

it("Category is defined", () => {
  const category = screen.queryAllByTestId("blog");
  expect(category).toBeDefined();
});
