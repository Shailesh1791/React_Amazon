import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProductProvider } from "./ProductContext";
import ProductDisplayPage2 from "./ProductDisplayPage2";

describe("ProductDisplayPage2 Test cases", () => {

    it("ProductDisplayPage2 render test", () => {
        render(<ProductProvider>
            <ProductDisplayPage2 />
        </ProductProvider>);
    });

    it("throws error if used outside provider", () => {
        const spy = jest.spyOn(console, "error").mockImplementation(() => {});
        expect(() => render(<ProductDisplayPage2 />)).toThrow(
            "Product must be used within a UserProvider"
        );
        spy.mockRestore();
    });
});