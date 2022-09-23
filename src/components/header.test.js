import { render, screen } from "@testing-library/react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

it("header component renders on screen", () => {
  // jest.mock("axios", () => {
  //   return {
  //     create: jest.fn(() => ({
  //       get: jest.fn(),
  //       interceptors: {
  //         request: { use: jest.fn(), eject: jest.fn() },
  //         response: { use: jest.fn(), eject: jest.fn() },
  //       },
  //     })),
  //   };
  // });

  // jest.spyOn(axios, "get").mockResolvedValue("Axios error");
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
});
