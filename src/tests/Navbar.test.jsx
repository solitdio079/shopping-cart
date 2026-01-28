import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AppRoutes from "../AppRoutes";
import { describe, it, expect } from "vitest";
import { renderWithRouter } from "./test-utils";
import Navbar from "../components/Navbar/Navbar";
import Layout from "../routes/layout";

describe("Navbar route tests", () => {
  it("render a list", () => {
    renderWithRouter(<Layout />, "/");

    expect(screen.getByRole("list")).toBeInTheDocument()
  });
});
