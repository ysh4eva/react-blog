import Blogs from "./Blogs";

import { screen, render } from "@testing-library/react";
import Badge from "./Badge";

it("Badge Component", () => {
  render(<Badge />);
  const blog = screen.queryByTestId("blog");
  expect(blog).toBeDefined();
});

// it("Badge Components", () => {
//   render(<Badge />);
//   const badge = screen.getByTestId("blogs");
//   expect(badge).toHaveClass("blog");
// });
