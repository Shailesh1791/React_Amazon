import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProductProvider } from "./ProductContext";
import ProductDisplayTile from "./ProductDisplayTile";

describe("ProductDisplayTile Test cases", () => {

  it("ProductDisplayTile render test", () => {
    render(
      <ProductDisplayTile />
   );
  });
});