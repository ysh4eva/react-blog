import React, { useState } from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import Search from "./Search";

describe("Search Component", () => {
  it("for the visibility of the test bar and custom placeholder", async () => {
    render(<Search />);
    const input = screen.getByPlaceholderText("Search");
    expect(input).toBeInTheDocument();
  });

  it("for Onchange event", () => {
    render(<Search />);
    const search = screen.getByTestId("search-input");
    fireEvent.change(search, { target: { value: "John" } });
  });
});
