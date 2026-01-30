import { screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { renderWithRouter } from "./test-utils";
import Layout from "../routes/layout";
import Shop from "../routes/shop";

describe("Layout route tests", () => {
  it("renders navbar links", () => {
    renderWithRouter(<Shop/>, "/shop");
  
   
  });
});
