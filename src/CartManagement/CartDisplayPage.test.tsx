import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartDisplayPage from "./CartDisplayPage";

describe("CartDisplayPage Test cases", () => {

    it("CartDisplayPage render test", () => {
        render(<CartDisplayPage />);
    });
});