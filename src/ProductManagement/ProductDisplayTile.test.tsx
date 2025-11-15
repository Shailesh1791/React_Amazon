import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProductProvider } from "./ProductContext";
import ProductDisplayTile from "./ProductDisplayTile";

describe("ProductDisplayTile Test cases", () => {

  it("ProductDisplayTile render test", () => {
    render(<ProductProvider>
      <ProductDisplayTile />
    </ProductProvider>);
  });

  it("throws error if used outside provider", () => {
    const spy = jest.spyOn(console, "error").mockImplementation(() => { });
    expect(() => render(<ProductDisplayTile />)).toThrow(
      "Product must be used within a UserProvider"
    );
    spy.mockRestore();
  });
});