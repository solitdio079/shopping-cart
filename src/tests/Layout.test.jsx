import { screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { renderWithRouter } from "./test-utils";
import Layout from "../routes/layout";

describe("Layout route tests", () => {
  it("renders navbar links", () => {
    renderWithRouter(<Layout />, "/");
  
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
  
    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /shop/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /cart/i })).toBeInTheDocument();
  });
});
