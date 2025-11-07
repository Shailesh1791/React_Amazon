import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductDashboard from "./ProductDashboard";

describe("ProductDashboard Test cases", () => {

    it("ProductDashboard render test", () => {
        render(<ProductDashboard />);
    });
});