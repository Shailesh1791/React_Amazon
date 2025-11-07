import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProductProvider } from "./ProductContext";

describe("ProductProvider Test cases", () => {
    const OrderProviderProps = jest.fn();
    it("ProductProvider render test", () => {
        render(<ProductProvider children />);
    });
});