import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductDisplayPage from "./PaymentDisplayPage";

describe("ProductDisplayPage Test cases", () => {

    it("ProductDisplayPage render test", () => {
        render(<ProductDisplayPage />);
    });
});