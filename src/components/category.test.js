import Category from "./Category";
import { render, screen } from "@testing-library/react";

it("Category is defined", () => {
  const category = screen.queryAllByTestId("category");
  expect(category).toBeDefined();
});
